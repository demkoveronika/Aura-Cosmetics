import Image from "next/image";
import Link from "next/link";

import arrowBack from "@/../../public/images/icons/arrow-back.svg";
import logo from "@/../../public/images/logo-dec-cosmetics.svg";
import image from "@/../../public/images/image-dec-cosmetics.svg";

export const Header = () => {
  return (
    <header>
      <div className="relative flex flex-row items-center justify-between mt-[28px] ml-[68px]">
        <Link href="/">
          <Image src={arrowBack} alt="arrow back" width={48} height={48} />
        </Link>
        <div className="absolute left-[220px] w-[80px] h-[80px] bg-secondary rounded-full" />
        <h1 className="uppercase text-[40px] tracking-[0.5em] leading-[40px] font-aboreto text-primary text-center flex-grow">
          Decorative Cosmetics
        </h1>
      </div>

      <div className="relative flex flex-row mt-[68px]">
        <div className="absolute z-10 left-[811px] w-[300px] h-[300px] bg-secondary rounded-full flex items-center justify-center">
          <h3 className="font-aboreto text-[28px] text-tertiary leading-[40px] tracking-[0.2em] text-center">
            Elegance
          </h3>
        </div>

        <div className="absolute z-10 left-[1084px] top-[200px] w-[300px] h-[300px] bg-secondary rounded-full flex items-center justify-center">
          <h3 className="font-aboreto text-[28px] text-tertiary leading-[40px] tracking-[0.2em] text-center">
            Durability
          </h3>
        </div>

        <Image
          src={image}
          alt=""
          width={649}
          height={766}
          className="ml-[63px]"
        />
        <Image
          src={logo}
          alt="logo"
          width={500}
          height={500}
          className="absolute ml-[588px] mt-[205px]"
        />

        <div className="absolute top-[667px] left-[613px] w-[150px] h-[150px] bg-secondary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-primary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            A
          </h2>
        </div>

        <div className="absolute top-[667px] left-[811px] w-[150px] h-[150px] bg-secondary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-primary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            U
          </h2>
        </div>

        <div className="absolute top-[667px] left-[1009px] w-[150px] h-[150px] bg-secondary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-primary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            R
          </h2>
        </div>

        <div className="absolute top-[667px] left-[1207px] w-[150px] h-[150px] bg-secondary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-primary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            A
          </h2>
        </div>
      </div>
    </header>
  );
};
