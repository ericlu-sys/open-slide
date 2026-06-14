import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import chalk from 'chalk';
import { loadUserConfig } from '../vite/open-slide-plugin.ts';
import { extractSlideMessages, messagesToRecord } from './i18n-extract.ts';

export type I18nOptions = {
  locales?: string[];
  extract?: boolean;
  primary?: string;
};

const DEFAULT_TARGET_LOCALES = ['en'];

function readPrimaryLocale(source: string, fallback: string): string {
  const match = source.match(/export\s+const\s+defaultLocale\s*=\s*['"]([^'"]+)['"]/);
  return match?.[1] ?? fallback;
}

function formatMessagesObject(messages: Record<string, string>, indent = 2): string {
  const pad = ' '.repeat(indent);
  const lines = Object.entries(messages).map(([key, value]) => {
    const escaped = JSON.stringify(value);
    return `${pad}${JSON.stringify(key)}: ${escaped},`;
  });
  return `{\n${lines.join('\n')}\n${' '.repeat(indent - 2)}}`;
}

function renderMessagesFile(locales: Record<string, Record<string, string>>): string {
  const localeBlocks = Object.entries(locales)
    .map(([locale, messages]) => {
      return `  ${JSON.stringify(locale)}: ${formatMessagesObject(messages, 4)},`;
    })
    .join('\n');

  return `import type { SlideMessages } from '@open-slide/core';

export const messages: Record<string, SlideMessages> = {
${localeBlocks}
};
`;
}

async function readExistingMessages(file: string): Promise<Record<string, Record<string, string>>> {
  if (!existsSync(file)) return {};
  const source = await fs.readFile(file, 'utf8');
  const match = source.match(/export const messages[^=]*=\s*(\{[\s\S]*\});/);
  if (!match) return {};
  try {
    const fn = new Function(`return (${match[1]});`);
    return fn() as Record<string, Record<string, string>>;
  } catch {
    return {};
  }
}

function todoValue(primary: string): string {
  return `[TODO translate] ${primary}`;
}

export async function i18n(slideId: string, opts: I18nOptions = {}): Promise<void> {
  const cwd = process.cwd();
  const config = await loadUserConfig(cwd);
  const slidesDir = config.slidesDir ?? 'slides';
  const slideDir = path.join(cwd, slidesDir, slideId);
  const indexFile = path.join(slideDir, 'index.tsx');
  const messagesFile = path.join(slideDir, 'messages.ts');

  if (!existsSync(indexFile)) {
    throw new Error(`Slide not found: ${path.relative(cwd, indexFile)}`);
  }

  const indexSource = await fs.readFile(indexFile, 'utf8');
  const primaryLocale = opts.primary ?? readPrimaryLocale(indexSource, 'zh-TW');
  const targetLocales = opts.locales ?? DEFAULT_TARGET_LOCALES;
  const existing = await readExistingMessages(messagesFile);

  let primaryMessages = existing[primaryLocale] ?? {};
  if (opts.extract || Object.keys(primaryMessages).length === 0) {
    const extracted = messagesToRecord(extractSlideMessages(indexSource));
    if (Object.keys(extracted).length > 0) {
      primaryMessages = { ...primaryMessages, ...extracted };
    }
  }

  if (Object.keys(primaryMessages).length === 0) {
    primaryMessages = {
      'cover.title': 'Replace with your primary-locale copy',
      'cover.subtitle': 'Run open-slide i18n with --extract after adding page components',
    };
  }

  const merged: Record<string, Record<string, string>> = {
    ...existing,
    [primaryLocale]: primaryMessages,
  };

  for (const locale of targetLocales) {
    if (locale === primaryLocale) continue;
    const current = merged[locale] ?? {};
    const next: Record<string, string> = {};
    for (const [key, value] of Object.entries(primaryMessages)) {
      next[key] =
        current[key] && !current[key].startsWith('[TODO translate]')
          ? current[key]
          : todoValue(value);
    }
    merged[locale] = next;
  }

  await fs.mkdir(slideDir, { recursive: true });
  await fs.writeFile(messagesFile, renderMessagesFile(merged), 'utf8');

  const relativeMessages = path.relative(cwd, messagesFile);
  const relativeIndex = path.relative(cwd, indexFile);

  process.stdout.write(`${chalk.bold('i18n scaffold ready')}\n`);
  process.stdout.write(`  ${chalk.dim('messages')}  ${relativeMessages}\n`);
  process.stdout.write(`  ${chalk.dim('primary')}   ${primaryLocale}\n`);
  process.stdout.write(
    `  ${chalk.dim('locales')}   ${[primaryLocale, ...targetLocales.filter((id) => id !== primaryLocale)].join(', ')}\n\n`,
  );

  const needsExports =
    !indexSource.includes("from './messages") &&
    !indexSource.includes('from "./messages') &&
    !indexSource.includes('export { messages }');

  if (needsExports) {
    process.stdout.write(`${chalk.yellow('Next in')} ${relativeIndex}:\n`);
    process.stdout.write(`  import { messages } from './messages.ts';\n`);
    process.stdout.write(`  export { messages };\n`);
    if (!indexSource.includes('defaultLocale')) {
      process.stdout.write(`  export const defaultLocale = '${primaryLocale}';\n`);
    }
    if (!indexSource.includes('localeLabels')) {
      const labels = [primaryLocale, ...targetLocales.filter((id) => id !== primaryLocale)]
        .map((id) => `    '${id}': '${id}',`)
        .join('\n');
      process.stdout.write(`  export const localeLabels = {\n${labels}\n  };\n`);
    }
    process.stdout.write('\n');
  }

  process.stdout.write(
    `${chalk.dim('Then run')} ${chalk.cyan('/slide-i18n')} ${chalk.dim('in your agent to wire')} ${chalk.cyan('useSlideT()')} ${chalk.dim('and translate target locales.')}\n`,
  );
}
