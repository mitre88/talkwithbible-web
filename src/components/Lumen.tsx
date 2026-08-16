import { cn } from "@/lib/utils";

/** Brand illustration of Lumen — a voxel dove, not a photograph. */
export function Lumen({
  className,
  size = 96,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={cn("relative grid place-items-center", className)}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="lumen-halo absolute inset-2 rounded-full bg-[radial-gradient(circle,rgba(209,173,97,0.45),transparent_68%)]" />
      <svg
        viewBox="0 0 140 140"
        width={size}
        height={size}
        className="relative"
        role="img"
      >
        <title>Lumen</title>
        <ellipse cx="72" cy="118" rx="26" ry="7" fill="currentColor" opacity="0.18" />
        <g>
          <rect x="78" y="38" width="18" height="16" rx="2" fill="#D1AD61" />
          <rect x="82" y="34" width="10" height="8" rx="1.5" fill="#E4C57A" />
          <rect x="56" y="48" width="16" height="14" rx="2" fill="#6B8F62" />
          <rect x="52" y="54" width="12" height="10" rx="2" fill="#587754" />
          <rect x="62" y="58" width="36" height="22" rx="3" fill="#F3E6C8" />
          <rect x="70" y="50" width="22" height="16" rx="2" fill="#F7EDD6" />
          <rect x="86" y="64" width="22" height="14" rx="2" fill="#EFE0BA" />
          <rect x="94" y="58" width="16" height="12" rx="2" fill="#F5EBD1" />
          <rect x="54" y="72" width="18" height="14" rx="2" fill="#E8D7A8" />
          <rect x="48" y="78" width="14" height="10" rx="2" fill="#D9C48E" />
          <circle cx="76" cy="62" r="2.2" fill="#241E2E" />
          <rect x="88" y="56" width="6" height="4" rx="1" fill="#DB943D" />
        </g>
      </svg>
    </div>
  );
}
