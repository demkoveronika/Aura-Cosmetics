import { Header } from "@/components/Header";
import Image from "next/image";
import hero from "../../public/images/header/hero.svg";
import { Catalog } from "@/components/Catalog";
import { New } from "@/components/New";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";

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
    </div>
  );
}
