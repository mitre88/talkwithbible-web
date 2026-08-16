import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Why } from "@/components/sections/Why";
import { PrivacyStory } from "@/components/sections/PrivacyStory";
import { CTASection } from "@/components/sections/CTASection";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Features />
      <PrivacyStory />
      <HowItWorks />
      <Why />
      <CTASection />
    </>
  );
}
