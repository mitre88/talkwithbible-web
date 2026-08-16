import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { LegalArticle } from "@/components/LegalArticle";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "termsPage" });
  return { title: t("title"), description: t("intro").slice(0, 155) };
}

export default async function TermsPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  return <LegalArticle namespace="termsPage" locale={locale} />;
}
