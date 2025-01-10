import Image from "next/image";

import hero from "@/../../public/images/heroes/hero-dec-cosmetics.svg";

export const Menu = () => {
  return (
    <section className="mt-[149px]">
      <div className="bg-tertiary pt-[20px] pb-[20px] pl-[48px] pr-[48px]">
        <ul className="flex flex-row justify-between">
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Face Makeup
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Eye Makeup
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Lip Makeup
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Makeup Accessories
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Gift sets
            </button>
          </li>
        </ul>
      </div>

      <div className="w-full h-[1px] bg-primary" />
      <Image src={hero} alt="hero" width={2000} height={839} />
    </section>
  );
};
