import { useTranslations } from "next-intl";
import { BookOpen, HardDrive, ScrollText, Bell } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/card";
import { DeviceFrame } from "@/components/DeviceFrame";
import { Reveal } from "@/components/Reveal";

export function Features() {
  const t = useTranslations("features");

  const items = [
    { key: "cite", Icon: BookOpen, shot: "/screenshots/chat.jpg" },
    { key: "local", Icon: HardDrive, shot: "/screenshots/history.jpg" },
    { key: "scope", Icon: ScrollText, shot: "/screenshots/empty.jpg" },
    { key: "reminders", Icon: Bell, shot: "/screenshots/settings.jpg" },
  ] as const;

  return (
    <section id="features" className="py-20 sm:py-28">
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map(({ key, Icon, shot }, i) => (
            <Reveal key={key} delay={i * 0.06}>
              <Card className="flex h-full flex-col gap-6 overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex flex-col gap-3 px-6 pt-6">
                  <span className="grid size-10 place-items-center rounded-2xl bg-primary-soft text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {t(`${key}.title`)}
                  </h3>
                  <p className="text-muted-foreground">{t(`${key}.desc`)}</p>
                </div>
                <div className="relative mx-auto w-[210px] pb-6">
                  <DeviceFrame src={shot} alt="" className="w-[210px] sm:w-[210px]" />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
