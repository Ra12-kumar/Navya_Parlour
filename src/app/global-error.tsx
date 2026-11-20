"use client";

/** Last-resort error page, used if the root layout itself fails. */
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#FFF9F5",
          color: "#382B2B",
          fontFamily: "system-ui, sans-serif",
          textAlign: "center",
          padding: "1.5rem",
        }}
      >
        <div>
          <h1 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Something went wrong</h1>
          <p style={{ marginBottom: "1.25rem" }}>Please try again in a moment.</p>
          <button
            type="button"
            onClick={reset}
            style={{
              background: "#D96C8A",
              color: "#fff",
              border: 0,
              borderRadius: 999,
              padding: "0.8rem 1.6rem",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
