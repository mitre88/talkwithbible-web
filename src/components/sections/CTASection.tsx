import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { AppStoreBadge } from "@/components/AppStoreBadge";
import { Lumen } from "@/components/Lumen";
import { Reveal } from "@/components/Reveal";

export function CTASection() {
  const t = useTranslations("cta");
  const hero = useTranslations("hero");

  return (
    <section className="pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] border border-border-strong bg-card px-6 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 hero-aurora" />
            <div className="relative">
              <Lumen size={72} className="mx-auto" />
              <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                {t("title")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
                {t("subtitle")}
              </p>
              <div className="mt-8 flex justify-center">
                <AppStoreBadge label={hero("badgeLabel")} />
              </div>
              <p className="mt-5 text-sm text-muted-foreground">{t("note")}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
