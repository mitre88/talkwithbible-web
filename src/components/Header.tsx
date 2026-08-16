"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { APP_NAME, APP_STORE_URL, cn } from "@/lib/utils";

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#features", label: t("features") },
    { href: "/#privacy", label: t("privacy") },
    { href: "/#how", label: t("howItWorks") },
    { href: "/support", label: t("support") },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/appicon-512.png"
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-[9px] shadow-sm"
          />
          <span className="font-display text-[17px] font-semibold tracking-tight">
            {APP_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover md:inline-flex"
          >
            {t("download")}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menu" : "Menu"}
            className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-primary-soft hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center justify-between px-3">
              <LanguageSwitcher />
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                {t("download")}
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
