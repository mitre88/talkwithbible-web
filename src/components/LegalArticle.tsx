import { getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
};

export async function LegalArticle({
  namespace,
  locale,
}: {
  namespace: string;
  locale: string;
}) {
  const t = await getTranslations({ locale, namespace });
  const common = await getTranslations({ locale, namespace: "legalCommon" });
  const sections = t.raw("sections") as Section[];

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

        <div className="mt-12 flex flex-col gap-10">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {s.heading}
              </h2>
              {s.body?.map((p, j) => (
                <p key={j} className="mt-3 leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {s.list && (
                <ul className="mt-4 flex flex-col gap-2">
                  {s.list.map((item, j) => (
                    <li key={j} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </Container>
    </article>
  );
}
