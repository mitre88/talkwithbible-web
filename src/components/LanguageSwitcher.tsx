"use client";

import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { Check, Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LABELS: Record<string, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex h-9 items-center gap-1.5 rounded-full border border-border bg-background-elevated/60 px-3 text-sm text-muted-foreground backdrop-blur transition-colors hover:border-border-strong hover:text-foreground"
      >
        <Globe className="size-4" />
        <span className="font-medium uppercase">{locale}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-11 z-50 min-w-40 overflow-hidden rounded-2xl border border-border bg-background-elevated p-1.5 shadow-xl shadow-black/20"
        >
          {routing.locales.map((loc) => (
            <li key={loc}>
              <button
                type="button"
                role="option"
                aria-selected={loc === locale}
                onClick={() => {
                  setOpen(false);
                  router.replace(pathname, { locale: loc });
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors hover:bg-primary-soft",
                  loc === locale
                    ? "font-medium text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {LABELS[loc]}
                {loc === locale && <Check className="size-4 text-primary" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
