import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const inriaSerif = localFont({
  src: "./fonts/InriaSerif-Regular.woff",
  variable: "--font-inria-serif",
  weight: "400",
});
const inriaSerifBold = localFont({
  src: "./fonts/InriaSerif-Bold.woff",
  variable: "--font-inria-serif-bold",
  weight: "700",
});
const inriaSerifBoldItalic = localFont({
  src: "./fonts/InriaSerif-BoldItalic.woff",
  variable: "--font-inria-serif-bold-italic",
  weight: "700",
});
const aboretoSerif = localFont({
  src: "./fonts/Aboreto-Regular.woff",
  variable: "--font-aboreto-serif",
  weight: "400",
});
const rosarivoCursive = localFont({
  src: "./fonts/Rosarivo-Regular.woff",
  variable: "--font-rosarivo-cursive",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inriaSerif.variable} ${inriaSerifBold.variable} ${inriaSerifBoldItalic.variable} ${aboretoSerif.variable} ${rosarivoCursive.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
