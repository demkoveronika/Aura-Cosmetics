import Image from "next/image";

import { CatalogCard } from "../care-cosmetics/CatalogCard";
import { decCosmeticsData } from "../../../data/decCosmeticsData";

import more from "@/../../public/images/icons/more.svg";

export const Catalog = () => {
  return (
    <section className="relative mt-[118px]" id="special">
      <div className="absolute left-[300px] w-[300px] h-[300px] bg-secondary rounded-full" />
      <div className="absolute left-[1150px] top-[-100px] w-[300px] h-[300px] bg-secondary rounded-full" />
      <div className="absolute left-[800px] top-[600px] w-[300px] h-[300px] bg-secondary rounded-full" />
      <div className="absolute left-[50px] top-[1100px] w-[300px] h-[300px] bg-secondary rounded-full" />
      <div className="absolute right-[34px] top-[1250px] w-[300px] h-[300px] bg-secondary rounded-full" />

      <h2 className="relative z-10 uppercase font-inria text-[36px] leading-[60px] tracking-[0.5em] text-primary text-center mb-[96px]">
        Special for you
      </h2>

      <div className="relative z-10 grid grid-cols-3 gap-x-[66px] gap-y-[56px] justify-items-center align-items-center ml-[174px] mr-[174px] mb-[82px]">
        {decCosmeticsData.map((item) => (
          <CatalogCard item={item} key={item.id} />
        ))}
      </div>

      <div className="flex justify-center mt-[82px] mb-[191px]">
        <button className="bg-secondary rounded-[8px] w-[204px] pt-[2px] pb-[2px] pl-[90px]">
          <Image src={more} alt="more" width={24} height={24} />
        </button>
      </div>
    </section>
  );
};
