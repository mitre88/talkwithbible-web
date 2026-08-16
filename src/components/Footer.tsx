import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { APP_NAME, SITE_YEAR } from "@/lib/utils";

export function Footer() {
  const t = useTranslations("footer");

  const legal = [
    { href: "/privacy", label: t("privacy") },
    { href: "/support", label: t("support") },
    { href: "/terms", label: t("terms") },
  ];

  return (
    <footer className="mt-24 border-t border-border">
      <Container className="flex flex-col gap-10 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5">
            <Image
              src="/appicon-512.png"
              alt=""
              width={32}
              height={32}
              className="size-8 rounded-[9px]"
            />
            <span className="font-display text-lg font-semibold">{APP_NAME}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {t("tagline")}
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {t("legalHeading")}
          </span>
          {legal.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-start gap-4">
          <LanguageSwitcher />
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {SITE_YEAR} {APP_NAME}. {t("rights")}
        </span>
        <span>{t("madeWith")}</span>
      </Container>
    </footer>
  );
}
