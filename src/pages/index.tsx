import Image from "next/image";

import { Header } from "@/components/main/Header";
import { Catalog } from "@/components/main/Catalog";
import { New } from "@/components/main/New";
import { About } from "@/components/main/About";
import { Reviews } from "@/components/main/Reviews";
import { Other } from "@/components/main/Other";
import { Footer } from "@/components/main/Footer";

import hero from "../../public/images/heroes/hero.svg";

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
