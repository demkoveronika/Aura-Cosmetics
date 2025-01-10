import Image from "next/image";

import hero from "@/../../public/images/heroes/hero-care-cosmetics.svg";

export const Menu = () => {
  return (
    <section className="mt-[231px]">
      <div className="bg-secondary pt-[20px] pb-[20px] pr-[48px]">
        <ul className="flex flex-row justify-between">
          <li className="group relative">
            <button className="relative font-aboreto pl-[48px] text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-primary">
              Facial Care
            </button>

            <div className="absolute top-[61px] transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-secondary bg-opacity-80 w-[2000px] h-[400px] p-[48px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary">Пункт меню 1</p>
              <p className="font-aboreto text-tertiary">Пункт меню 2</p>
              <p className="font-aboreto text-tertiary">Пункт меню 3</p>
            </div>
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

      <div className="w-full h-[1px] bg-primary" />
      <Image src={hero} alt="hero" width={2000} height={839} />
    </section>
  );
};
