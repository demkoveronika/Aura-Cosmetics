import Image from "next/image";

import { Catalog } from "../../../types/catalogTypes";

import favourite from "@/../../public/images/icons/favourite.svg";

export const CatalogCard = ({ item }: { item: Catalog }) => {
  return (
    <>
      <div className="w-[320px] h-[450px] p-[10px] shadow" key={item.id}>
        <Image
          src={item.image}
          alt={`${item.productName}`}
          width={300}
          height={350}
        />
        <h3 className="uppercase font-josefinSlab text-[18px] leading-[20px] tracking-[0.2em] text-primary text-center mt-[10px]">
          {item.productName}
        </h3>

        <div className="flex flex-row gap-[32px] items-center justify-center mt-[14px] mb-[12px]">
          <button className="font-aboreto text-[20px] leading-[20px] tracking-[0.2em] text-tertiary bg-secondary rounded-[20px] w-[200px] pt-[2px] pb-[2px] text-center">
            Buy
          </button>

          <Image src={favourite} alt="favourite" width={24} height={24} />
        </div>
      </div>
    </>
  );
};
