import Image from "next/image";
import Link from "next/link";

import arrowBack from "@/../../public/images/icons/arrow-back.svg";
import logo from "@/../../public/images/logo-care-cosmetics.svg";
import image from "@/../../public/images/image-care-cosmetics.svg";

export const Header = () => {
  return (
    <header>
      <div className="relative flex flex-row items-center justify-between mt-[28px] ml-[68px]">
        <Link href="/">
          <Image src={arrowBack} alt="arrow back" width={48} height={48} />
        </Link>
        <div className="absolute left-[355px] w-[80px] h-[80px] bg-tertiary rounded-full" />
        <h1 className="uppercase text-[40px] tracking-[0.5em] leading-[40px] font-aboreto text-primary text-center flex-grow">
          Care Cosmetics
        </h1>
      </div>

      <div className="relative flex flex-row mt-[68px]">
        <Image
          src={logo}
          alt="logo"
          width={529}
          height={529}
          className="absolute ml-[63px] mt-[43px]"
        />
        <Image
          src={image}
          alt=""
          width={685}
          height={636}
          className="ml-[507px]"
        />

        <div className="absolute right-[62px] w-[150px] h-[150px] bg-tertiary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-primary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            A
          </h2>
        </div>

        <div className="absolute right-[62px] top-[180px] w-[150px] h-[150px] bg-tertiary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-primary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            U
          </h2>
        </div>

        <div className="absolute right-[62px] top-[360px] w-[150px] h-[150px] bg-tertiary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-primary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            R
          </h2>
        </div>

        <div className="absolute right-[62px] top-[540px] w-[150px] h-[150px] bg-tertiary rounded-full">
          <h2 className="font-alexBrush text-[80px] text-primary leading-[80px] tracking-[0.2em] ml-[75px] mt-[75px]">
            A
          </h2>
        </div>
      </div>

      <div className="absolute top-[600px] left-[110px] w-[300px] h-[300px] bg-tertiary rounded-full flex items-center justify-center">
        <h3 className="font-aboreto text-[28px] text-primary leading-[40px] tracking-[0.2em] text-center">
          Freshness
        </h3>
      </div>

      <div className="absolute top-[600px] left-[442px] w-[300px] h-[300px] bg-tertiary rounded-full flex items-center justify-center">
        <h3 className="font-aboreto text-[28px] text-primary leading-[40px] tracking-[0.2em] text-center">
          Tenderness
        </h3>
      </div>
    </header>
  );
};
