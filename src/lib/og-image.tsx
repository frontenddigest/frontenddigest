import { ImageResponse } from "next/og";

const sectionColors: Record<string, string> = {
  fundamentals: "#3b82f6",
  architecture: "#a855f7",
  "system-design": "#14b8a6",
  interview: "#f59e0b",
  leadership: "#22c55e",
  communication: "#f97316",
  ai: "#ec4899",
};

export function generateOGImage({
  title,
  description,
  section,
}: {
  title: string;
  description?: string;
  section?: string;
}) {
  const accentColor = section ? sectionColors[section] || "#3b82f6" : "#3b82f6";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {section && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: accentColor,
                }}
              />
              <span
                style={{
                  fontSize: "24px",
                  color: accentColor,
                  textTransform: "capitalize",
                  fontWeight: 600,
                }}
              >
                {section.replace("-", " ")}
              </span>
            </div>
          )}

          <h1
            style={{
              fontSize: title.length > 60 ? "48px" : "56px",
              fontWeight: 700,
              color: "#fafafa",
              lineHeight: 1.2,
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>

          {description && (
            <p
              style={{
                fontSize: "24px",
                color: "#a1a1aa",
                lineHeight: 1.5,
                margin: 0,
                maxWidth: "800px",
              }}
            >
              {description.length > 140
                ? description.slice(0, 140) + "..."
                : description}
            </p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: `linear-gradient(135deg, ${accentColor}, #3b82f6)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              FD
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#fafafa",
              }}
            >
              Frontend Digest
            </span>
          </div>

          <span
            style={{
              fontSize: "18px",
              color: "#71717a",
            }}
          >
            frontenddigest.com
          </span>
        </div>

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background: `radial-gradient(circle at top right, ${accentColor}15, transparent 70%)`,
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
