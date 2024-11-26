import { Header } from "@/components/Header";
import Image from "next/image";
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
    </div>
  );
}
