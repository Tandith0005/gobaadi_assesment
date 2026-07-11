import localFont from "next/font/local";

export const tusker = localFont({
  src: [
    {
      path: "../fonts/TuskerGrotesk-6600Semibold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tusker",
});