import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const inriaSans = localFont({
  src: "./fonts/InriaSerif-Regular.woff",
  variable: "--font-inria-sans",
  weight: "100 900",
});
const aboretoSans = localFont({
  src: "./fonts/Aboreto-Regular.woff",
  variable: "--font-aboreto-sans",
  weight: "100 900",
});
const rosarivoSans = localFont({
  src: "./fonts/Rosarivo-Regular.woff",
  variable: "--font-rosarivo-sans",
  weight: "100 900",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inriaSans.variable} ${aboretoSans.variable} ${rosarivoSans.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
