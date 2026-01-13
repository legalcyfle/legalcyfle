import {
  Inter,
  Playfair_Display,
  Lora,
  Italiana,
  Croissant_One,
  Abril_Fatface,
  Work_Sans,
} from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
export const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
export const italiana = Italiana({
  subsets: ["latin"],
  variable: "--font-italiana",
  weight: ["400"],
});
export const croissantOne = Croissant_One({
  subsets: ["latin"],
  variable: "--font-croissant-one",
  weight: ["400"],
});

export const abrilFatface = Abril_Fatface({
  subsets: ["latin"],
  variable: "--font-abril-fatface",
  weight: ["400"],
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

export const googleSans = localFont({
  src: [
    {
      path: "../../public/assets/google-sans/GoogleSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/google-sans/GoogleSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/google-sans/GoogleSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/google-sans/GoogleSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-google-sans",
});

// usuage
// className={`${inter.variable} ${playfair.variable} ${lora.variable} ${googleSans.variable} font-sans`}
