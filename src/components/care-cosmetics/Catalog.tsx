import Image from "next/image";

import { CatalogCard } from "./CatalogCard";
import { careCosmeticsData } from "../../../data/careCosmeticsData";

import more from "@/../../public/images/icons/more.svg";

export const Catalog = () => {
  return (
    <section className="mt-[118px]" id="special">
      <h2 className="uppercase font-inria text-[36px] leading-[60px] tracking-[0.5em] text-primary text-center mb-[96px]">
        Special for you
      </h2>

      <div className="grid grid-cols-3 gap-x-[66px] gap-y-[56px] justify-items-center align-items-center ml-[174px] mr-[174px] mb-[82px]">
        {careCosmeticsData.map((item) => (
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
