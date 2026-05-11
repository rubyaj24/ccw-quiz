import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "CCW Quiz Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(name: string, weight: number): Promise<ArrayBuffer> {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(name)}:wght@${weight}&display=swap`,
  ).then((r) => r.text());

  const urlMatch = css.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/);
  if (!urlMatch) throw new Error(`Could not resolve font: ${name}`);

  return fetch(urlMatch[1]).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [playfairData, nunitoData] = await Promise.all([
    loadGoogleFont("Playfair Display", 700),
    loadGoogleFont("Nunito", 400),
  ]);

  const thumbBuffer = fs.readFileSync(path.join(process.cwd(), "public", "thumb.png"));
  const thumbBase64 = thumbBuffer.toString("base64");
  const thumbUrl = `data:image/png;base64,${thumbBase64}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `url(${thumbUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 280,
            background: "linear-gradient(to top, rgba(10,10,10,0.92), rgba(10,10,10,0.4) 50%, transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "44px 56px",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#a0a0a0",
              letterSpacing: 2.5,
              textTransform: "uppercase",
              fontFamily: "Nunito",
              fontWeight: 400,
            }}
          >
            CST 308
          </div>
          <div
            style={{
              fontSize: 48,
              color: "#f5f5f5",
              fontFamily: "Playfair Display",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: -0.5,
            }}
          >
            CCW Quiz Platform
          </div>
          <div
            style={{
              fontSize: 16,
              color: "#a0a0a0",
              fontFamily: "Nunito",
              fontWeight: 400,
              marginTop: 2,
            }}
          >
            421 curated questions across 10 core domains
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Playfair Display", data: playfairData, weight: 700 },
        { name: "Nunito", data: nunitoData, weight: 400 },
      ],
    },
  );
}
