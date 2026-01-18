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

export const galaxiePolaris = localFont({
    src :[
        {
           path: "../public/fonts/GalaxiePolaris-Book.woff",
      weight: "400",
      style: "normal",  
        },
    ],
      variable: "--font-polaris",
  display: "swap",
})

//C:\Users\ajink\OneDrive\Desktop\personal - coding - ventures\Roboto\apps\web\public\fonts\GalaxiePolaris-Book.woff