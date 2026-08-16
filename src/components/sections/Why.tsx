import { useTranslations } from "next-intl";
import { Lock, Quote, Gift, Feather } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/Reveal";

export function Why() {
  const t = useTranslations("why");
  const items = [
    { key: "private", Icon: Lock },
    { key: "cited", Icon: Quote },
    { key: "free", Icon: Gift },
    { key: "quiet", Icon: Feather },
  ] as const;

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{t("subtitle")}</p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map(({ key, Icon }, i) => (
            <Reveal key={key} delay={i * 0.05}>
              <Card className="h-full">
                <Icon className="size-5 text-primary" />
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {t(`points.${key}.title`)}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {t(`points.${key}.desc`)}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
