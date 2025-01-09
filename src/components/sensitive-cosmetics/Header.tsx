import Image from "next/image";
import Link from "next/link";

import arrowBack from "@/../../public/images/icons/arrow-back.svg";
import logo from "@/../../public/images/logo-sens-cosmetics.svg";
import image from "@/../../public/images/image-sens-cosmetics.svg";

export const Header = () => {
  return (
    <header>
      <div className="relative flex flex-row items-center justify-between mt-[28px] ml-[68px]">
        <Link href="/">
          <Image src={arrowBack} alt="arrow back" width={48} height={48} />
        </Link>
        <div className="absolute left-[260px] w-[80px] h-[80px] bg-primary rounded-full" />
        <h1 className="uppercase text-[40px] tracking-[0.5em] leading-[40px] font-aboreto text-primary text-center flex-grow">
          Sensitive Cosmetics
        </h1>
      </div>

      <div className="relative flex flex-row mt-[68px]">
        <div className="absolute left-[474px] w-[150px] h-[150px] bg-primary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-secondary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            A
          </h2>
        </div>
        <div className="absolute left-[324px] top-[150px] w-[150px] h-[150px] bg-primary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-secondary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            U
          </h2>
        </div>
        <div className="absolute left-[174px] top-[300px] w-[150px] h-[150px] bg-primary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-secondary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            R
          </h2>
        </div>
        <div className="absolute left-[24px] top-[450px] w-[150px] h-[150px] bg-primary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-secondary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            A
          </h2>
        </div>

        <Image
          src={logo}
          alt="logo"
          width={433}
          height={418}
          className="absolute ml-[407px] mt-[317px]"
        />
        <Image
          src={image}
          alt=""
          width={685}
          height={762}
          className="ml-[692px]"
        />
      </div>

      <div className="absolute top-[780px] left-[56px] w-[300px] h-[300px] bg-primary rounded-full flex items-center justify-center">
        <h3 className="font-aboreto text-[28px] text-secondary leading-[40px] tracking-[0.2em] text-center">
          Sensitivity
        </h3>
      </div>

      <div className="absolute top-[780px] left-[392px] w-[300px] h-[300px] bg-primary rounded-full flex items-center justify-center">
        <h3 className="font-aboreto text-[28px] text-secondary leading-[40px] tracking-[0.2em] text-center">
          Calmness
        </h3>
      </div>
    </header>
  );
};
