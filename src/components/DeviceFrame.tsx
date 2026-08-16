import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export function DeviceFrame({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const t = useTranslations("a11y");

  return (
    <figure
      className={cn("relative mx-auto w-[260px] sm:w-[300px]", className)}
      aria-label={t("phoneFrame")}
    >
      <div className="relative rounded-[2.6rem] border border-border-strong bg-[#07091a] p-2 shadow-[0_30px_80px_-24px_rgba(13,18,41,0.75)] ring-1 ring-white/10">
        <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative overflow-hidden rounded-[2.15rem] bg-midnight">
          <Image
            src={src}
            alt={alt}
            width={430}
            height={932}
            priority={priority}
            sizes="(max-width: 640px) 260px, 300px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </figure>
  );
}
