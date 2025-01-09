import Image from "next/image";
import Link from "next/link";

import arrowBack from "@/../../public/images/icons/arrow-back-light.svg";
import logo from "@/../../public/images/logoes/logo-mens-cosmetics.svg";
import image from "@/../../public/images/picture/image-mens-cosmetics.svg";

export const Header = () => {
  return (
    <header className="min-h-[1000px] bg-primary pb-[229px]">
      <div className="relative flex flex-row items-center justify-between pt-[28px] ml-[68px]">
        <Link href="/">
          <Image src={arrowBack} alt="arrow back" width={48} height={48} />
        </Link>
        <div className="absolute left-[340px] w-[80px] h-[80px] bg-tertiary rounded-full" />
        <h1 className="uppercase text-[40px] tracking-[0.5em] leading-[40px] font-aboreto text-tertiary text-center flex-grow">
          Men’s Cosmetics
        </h1>
      </div>

      <div className="relative flex flex-row mt-[68px]">
        <div className="absolute left-[350px]  w-[300px] h-[300px] bg-tertiary rounded-full flex items-center justify-center">
          <h3 className="font-aboreto text-[28px] text-primary leading-[40px] tracking-[0.2em] text-center">
            Energy
          </h3>
        </div>

        <div className="absolute left-[95px] top-[236px] w-[300px] h-[300px] bg-tertiary rounded-full flex items-center justify-center">
          <h3 className="font-aboreto text-[28px] text-primary leading-[40px] tracking-[0.2em] text-center">
            Boldness
          </h3>
        </div>

        <Image
          src={logo}
          alt="logo"
          width={525}
          height={278}
          className="absolute ml-[392px] mt-[416px]"
        />
        <Image
          src={image}
          alt=""
          width={685}
          height={712}
          className="ml-[692px]"
        />

        <div className="absolute top-[694px] left-[38px] w-[150px] h-[150px] bg-tertiary rounded-full flex items-center justify-center">
          <h2 className="font-alexBrush text-[80px] text-secondary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            A
          </h2>
        </div>
        <div className="absolute top-[694px] left-[242px] w-[150px] h-[150px] bg-tertiary rounded-full flex items-center justify-center">
          <h2 className="font-alexBrush text-[80px] text-secondary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            U
          </h2>
        </div>
        <div className="absolute top-[694px] left-[446px] w-[150px] h-[150px] bg-tertiary rounded-full flex items-center justify-center">
          <h2 className="font-alexBrush text-[80px] text-secondary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            R
          </h2>
        </div>
        <div className="absolute top-[694px] left-[650px] w-[150px] h-[150px] bg-tertiary rounded-full flex items-center justify-center">
          <h2 className="font-alexBrush text-[80px] text-secondary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            A
          </h2>
        </div>
      </div>
    </header>
  );
};
