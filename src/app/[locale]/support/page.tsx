import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowLeft, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CONTACT_EMAIL } from "@/lib/utils";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "supportPage" });
  return { title: t("title"), description: t("intro").slice(0, 155) };
}

export default async function SupportPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "supportPage" });
  const common = await getTranslations({ locale, namespace: "legalCommon" });
  const faqs = t.raw("faqs") as { q: string; a: string }[];
  const issues = t.raw("issues") as string[];

  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {common("backHome")}
        </Link>

        <h1 className="mt-8 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {common("lastUpdated")}: {t("updated")}
        </p>
        <p className="mt-8 text-lg leading-relaxed text-foreground/90">{t("intro")}</p>

        <section className="mt-12">
          <h2 className="font-display text-xl font-semibold">{t("headingNeed")}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{t("needBody")}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Talk%20with%20the%20Bible%20support`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
          >
            <Mail className="size-4" />
            {CONTACT_EMAIL}
          </a>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold">{t("headingFaq")}</h2>
          <Accordion type="single" collapsible className="mt-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold">{t("headingIssues")}</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {issues.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-xl font-semibold">{t("headingFeedback")}</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">{t("feedback")}</p>
        </section>
      </Container>
    </article>
  );
}
