import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "MOMumental Moments® · For women rebuilding everything that matters · The parent IP behind The PHASE™ and The Power Method®";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFF9F1",
          padding: "80px",
          position: "relative",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "12px",
            background: "linear-gradient(90deg, #F086DC 0%, #C95CB0 100%)",
            display: "flex",
          }}
        />

        <div
          style={{
            fontSize: "20px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#F086DC",
            fontFamily: "monospace",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          THE PARENT IP
        </div>

        <div
          style={{
            fontSize: "92px",
            color: "#2f4858",
            lineHeight: 1.05,
            marginBottom: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            MOMumental Moments<sup style={{ fontSize: "44px" }}>®</sup>
          </div>
          <div
            style={{
              fontStyle: "italic",
              color: "#F086DC",
              display: "flex",
            }}
          >
            behind everything I build.
          </div>
        </div>

        <div
          style={{
            fontSize: "30px",
            color: "rgba(47, 72, 88, 0.75)",
            lineHeight: 1.4,
            marginTop: "48px",
            maxWidth: "900px",
            display: "flex",
          }}
        >
          One IP. Two consumer products. Built for women rebuilding everything that matters.
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "70px",
            left: "80px",
            right: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(47, 72, 88, 0.5)",
                fontFamily: "monospace",
                display: "flex",
              }}
            >
              TWO PILLARS
            </div>
            <div
              style={{
                fontSize: "32px",
                color: "#2f4858",
                display: "flex",
              }}
            >
              The PHASE<sup style={{ fontSize: "16px" }}>™</sup>
              <span style={{ color: "#F086DC", margin: "0 16px" }}>·</span>
              The Power Method<sup style={{ fontSize: "16px" }}>®</sup>
            </div>
          </div>

          <div
            style={{
              fontSize: "22px",
              color: "rgba(47, 72, 88, 0.6)",
              fontFamily: "monospace",
              display: "flex",
            }}
          >
            momumentalmoments.co
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
