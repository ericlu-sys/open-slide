import { parse as babelParse } from '@babel/parser';
import { isJSXText, type JSXText } from '@babel/types';
import { walkAll } from '../editing/babel-walk.ts';

export type ExtractedMessage = {
  key: string;
  value: string;
  page: string;
};

function unwrapExpression(
  node: Record<string, unknown> | undefined,
): Record<string, unknown> | undefined {
  let current = node;
  while (
    current &&
    (current.type === 'TSAsExpression' || current.type === 'TSSatisfiesExpression')
  ) {
    current = current.expression as Record<string, unknown> | undefined;
  }
  return current;
}

function pageComponentName(id: Record<string, unknown> | undefined): string | null {
  if (!id || id.type !== 'Identifier' || typeof id.name !== 'string') return null;
  const typeAnnotation = id.typeAnnotation as Record<string, unknown> | undefined;
  if (!typeAnnotation || typeAnnotation.type !== 'TSTypeAnnotation') return null;
  const type = typeAnnotation.typeAnnotation as Record<string, unknown> | undefined;
  if (type?.type === 'TSTypeReference') {
    const refName = type.typeName as Record<string, unknown> | undefined;
    if (refName?.type === 'Identifier' && refName.name === 'Page') {
      return id.name;
    }
  }
  return null;
}

function toKeyPrefix(name: string): string {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
}

function collectJsxText(root: unknown): string[] {
  const texts: string[] = [];
  walkAll(root, (node) => {
    if (!isJSXText(node)) return;
    const value = (node as JSXText).value.replace(/\s+/g, ' ').trim();
    if (value.length > 0) texts.push(value);
  });
  return texts;
}

export function extractSlideMessages(source: string): ExtractedMessage[] {
  let ast: unknown;
  try {
    ast = babelParse(source, {
      sourceType: 'module',
      plugins: ['typescript', 'jsx'],
      errorRecovery: true,
    });
  } catch {
    return [];
  }

  const body = (ast as { program?: { body?: Array<Record<string, unknown>> } }).program?.body ?? [];
  const results: ExtractedMessage[] = [];

  for (const stmt of body) {
    if (stmt.type !== 'VariableDeclaration') continue;
    const declarations = (stmt.declarations as Array<Record<string, unknown>> | undefined) ?? [];
    for (const decl of declarations) {
      const name = pageComponentName(decl.id as Record<string, unknown> | undefined);
      if (!name) continue;
      const init = unwrapExpression(decl.init as Record<string, unknown> | undefined);
      if (!init) continue;
      const bodyNode =
        init.type === 'ArrowFunctionExpression' || init.type === 'FunctionExpression'
          ? init.body
          : null;
      if (!bodyNode) continue;
      const texts = collectJsxText(bodyNode);
      const prefix = toKeyPrefix(name);
      texts.forEach((value, index) => {
        results.push({
          key: `${prefix}.text.${index}`,
          value,
          page: name,
        });
      });
    }
  }

  return results;
}

export function messagesToRecord(entries: ExtractedMessage[]): Record<string, string> {
  const out: Record<string, string> = {};
  for (const entry of entries) {
    out[entry.key] = entry.value;
  }
  return out;
}
