import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          hover: "#2A2A2A",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          purple: "#7C5DFA",
          blue: "#3B82F6",
          pink: "#EC4899",
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blur":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out infinite 3s",
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 30s linear infinite",
        "spin-slow-reverse": "spin 10s linear infinite reverse",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "float-plane": "floatPlane 20s ease-in-out infinite",
        "particle-float": "particleFloat 10s ease-in-out infinite",
        "fly-away": "flyAway 1.2s ease-in-out forwards",
        "fade-in": "fadeIn 0.3s ease-in-out forwards",
        "fly-right": "flyRight 1s forwards",
        "menu-in": "menu-in 0.3s ease-out",
        "menu-out": "menu-out 0.3s ease-in",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        glow: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        floatPlane: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0) rotate(0deg)",
          },
          "25%": {
            transform: "translate3d(25vw, -15vh, 50px) rotate(15deg)",
          },
          "75%": {
            transform: "translate3d(-25vw, 15vh, -50px) rotate(-15deg)",
          },
        },
        particleFloat: {
          "0%, 100%": {
            transform: "translate3d(0, 0, 0)",
          },
          "50%": {
            transform: "translate3d(100px, -100px, 50px)",
          },
        },
        flyAway: {
          "0%": {
            transform: "translateX(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(300%)",
            opacity: "0",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        flyRight: {
          "0%": {
            transform: "translateX(0) rotate(0)",
            opacity: "1",
          },
          "100%": {
            transform: "translateX(150px) rotate(45deg)",
            opacity: "0",
          },
        },
        "menu-in": {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "menu-out": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      perspective: {
        "1000": "1000px",
      },
      zIndex: {
        "40": "40",
        "50": "50",
        "60": "60",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
