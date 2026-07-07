export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#030712",
        panel: "#0b1120",
        cyanGlow: "#22d3ee",
        blueGlow: "#60a5fa",
        violetGlow: "#a78bfa"
      },
      boxShadow: {
        premium: "0 28px 90px rgba(15, 23, 42, 0.42), 0 0 72px rgba(96, 165, 250, 0.14)",
        glow: "0 0 46px rgba(34, 211, 238, 0.24)"
      },
      backgroundImage: {
        "premium-gradient": "linear-gradient(135deg, #22d3ee 0%, #60a5fa 42%, #a78bfa 100%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -16px, 0)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite"
      }
    }
  },
  plugins: []
};
