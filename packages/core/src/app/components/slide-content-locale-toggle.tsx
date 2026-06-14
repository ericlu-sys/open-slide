import { Languages } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { ContentLocaleOption } from '@/lib/content-locale';
import type { ContentLocaleId } from '@/lib/sdk';
import { useLocale } from '@/lib/use-locale';
import { cn } from '@/lib/utils';

type Props = {
  options: ContentLocaleOption[];
  value: ContentLocaleId;
  onChange: (id: ContentLocaleId) => void;
};

export function SlideContentLocaleToggle({ options, value, onChange }: Props) {
  const t = useLocale();
  if (options.length < 2) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        type="button"
        aria-label={t.present.contentLocaleToggleAria}
        title={t.present.contentLocaleToggleAria}
        className={cn(buttonVariants({ variant: 'ghost', size: 'icon-sm' }))}
      >
        <Languages className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px]">
        {options.map((option) => (
          <DropdownMenuItem
            key={option.id}
            onSelect={() => onChange(option.id)}
            data-active={option.id === value}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
