import Image from "next/image";

import { Header } from "@/components/Header";
import { Catalog } from "@/components/Catalog";
import { New } from "@/components/New";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { Other } from "@/components/Other";
import { Footer } from "@/components/Footer";

import hero from "../../public/images/hero.svg";

export default function Home() {
  return (
    <div>
      <Header />
      <Image
        src={hero}
        alt="hero"
        width={1440}
        height={744}
        className="w-full"
      />
      <Catalog />
      <New />
      <About />
      <Reviews />
      <Other />
      <Footer />
    </div>
  );
}
