import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";
import { Link } from "@/i18n/navigation";

export function PrivacyStory() {
  const t = useTranslations("privacy");
  const keys = ["device", "intelligence", "notify"] as const;

  return (
    <section id="privacy" className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-5 grid size-12 place-items-center rounded-full bg-primary-soft text-primary">
            <ShieldCheck className="size-6" />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {keys.map((key, i) => (
            <Reveal key={key} delay={i * 0.06}>
              <Card className="h-full">
                <h3 className="font-display text-xl font-semibold">
                  {t(`points.${key}.title`)}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {t(`points.${key}.desc`)}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          <Link href="/privacy" className="underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
        </p>
      </Container>
    </section>
  );
}
