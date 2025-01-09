import Image from "next/image";

import hero from "@/../../public/images/hero-sens-cosmetics.svg";

export const Menu = () => {
  return (
    <section className="mt-[304px]">
      <div className="bg-primary pt-[20px] pb-[20px] pl-[61px]">
        <ul className="flex flex-row gap-[44px]">
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary">
              Facial Care
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary">
              Body Care
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary">
              Hair Care
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary">
              Sun Protection Products
            </button>
          </li>
          <li>
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary">
              Gift sets
            </button>
          </li>
        </ul>
      </div>

      <div className="w-full h-[1px] bg-secondary" />
      <Image src={hero} alt="hero" width={2000} height={839} />
    </section>
  );
};
