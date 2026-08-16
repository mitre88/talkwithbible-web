import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { DeviceFrame } from "@/components/DeviceFrame";
import { Reveal } from "@/components/Reveal";

const SHOTS = [
  "/screenshots/empty.jpg",
  "/screenshots/chat.jpg",
  "/screenshots/onboarding.jpg",
];

export function HowItWorks() {
  const t = useTranslations("how");

  return (
    <section id="how" className="py-20 sm:py-28">
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

        <ol className="mt-16 grid gap-10 lg:grid-cols-3">
          {SHOTS.map((shot, i) => (
            <Reveal key={shot} delay={i * 0.08} className="text-center">
              <DeviceFrame src={shot} alt="" className="w-[230px] sm:w-[230px]" />
              <p className="mt-6 font-display text-sm uppercase tracking-[0.2em] text-primary">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">
                {t(`steps.${i}.title`)}
              </h3>
              <p className="mt-2 text-muted-foreground">{t(`steps.${i}.desc`)}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
