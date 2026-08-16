import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-border bg-card/80 p-6 text-card-foreground shadow-sm backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  );
}
