import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Talk with the Bible — a private, on-device King James companion";

export default async function OgImage() {
  const iconData = await readFile(join(process.cwd(), "public", "appicon-512.png"));
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(900px 520px at 12% 0%, #2a2158 0%, transparent 58%), radial-gradient(800px 500px at 100% 100%, #5a3d16 0%, transparent 52%), #0D1229",
          color: "#F5EBD1",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <img src={iconSrc} width={88} height={88} style={{ borderRadius: "20px" }} alt="" />
          <span style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Talk with the Bible
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 960,
            }}
          >
            A private conversation{" "}
            <span style={{ color: "#D1AD61", fontStyle: "italic" }}>with Scripture</span>
          </span>
          <span style={{ marginTop: 24, fontSize: 30, color: "#D8CCAE", maxWidth: 860 }}>
            On-device Apple Intelligence cites the King James Bible. No account. No cloud.
          </span>
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {["No account", "On-device", "King James, cited"].map((chip) => (
            <span
              key={chip}
              style={{
                fontSize: 22,
                padding: "10px 20px",
                borderRadius: 999,
                border: "1px solid rgba(209,173,97,0.35)",
                color: "#E8D9B0",
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
