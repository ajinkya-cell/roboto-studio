import localFont from "next/font/local";

export const galaxieCopernicus = localFont({
    src: [
    {
      path: "../public/fonts/GalaxieCopernicus-Book.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-galaxie",
  display: "swap",
})