import Image from "next/image";

import hero from "@/../../public/images/heroes/hero-mens-cosmetics.svg";

export const Menu = () => {
  return (
    <section>
      <div className="bg-tertiary pt-[20px] pb-[20px] pl-[61px]">
        <ul className="flex flex-row gap-[73px]">
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Facial Care
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Body Care
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Hair Care
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Shaving Products
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
