import { useTranslations } from "next-intl";
import { Shield, Smartphone, BookMarked } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { DeviceFrame } from "@/components/DeviceFrame";
import { Lumen } from "@/components/Lumen";
import { Reveal } from "@/components/Reveal";
import { Link } from "@/i18n/navigation";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 sanctuary-mesh" />
      <div className="pointer-events-none absolute inset-0 hero-aurora" />
      <div className="pointer-events-none absolute inset-0 bg-grid" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div className="flex items-center gap-3">
            <Lumen size={56} />
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              {t("badge")}
            </p>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            {t("title")}
            <span className="block italic text-primary">{t("titleAccent")}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <AppStoreBadge label={t("badgeLabel")} />
            <Link
              href="/#how"
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {t("secondary")}
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {[
              { Icon: Shield, key: "noAccount" as const },
              { Icon: Smartphone, key: "onDevice" as const },
              { Icon: BookMarked, key: "kjv" as const },
            ].map(({ Icon, key }) => (
              <li
                key={key}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background-elevated/70 px-3.5 py-1.5 text-sm text-muted-foreground backdrop-blur"
              >
                <Icon className="size-3.5 text-primary" />
                {t(`trust.${key}`)}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <DeviceFrame
            src="/screenshots/chat.jpg"
            alt="Chat citing John 3:16"
            priority
          />
        </Reveal>
      </Container>
    </section>
  );
}
