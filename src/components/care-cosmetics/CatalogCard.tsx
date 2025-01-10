import Image from "next/image";

import { Catalog } from "../../../types/catalogTypes";

import favourite from "@/../../public/images/icons/favourite.svg";
import Link from "next/link";

export const CatalogCard = ({ item }: { item: Catalog }) => {
  return (
    <>
      <div
        className="w-[320px] h-[450px] p-[10px] shadow bg-white transition-all duration-500 ease-in-out transform hover:scale-105 hover:rotate-2 hover:shadow-lg hover:bg-gray-100"
        key={item.id}
      >
        <Link href="/">
          <Image
            src={item.image}
            alt={`${item.productName}`}
            width={300}
            height={350}
          />
          <h3 className="uppercase font-josefinSlab font-bold text-[18px] leading-[20px] tracking-[0.2em] text-primary text-center mt-[10px]">
            {item.productName}
          </h3>

          <div className="flex flex-row gap-[32px] items-center justify-center mt-[14px] mb-[12px]">
            <button className="font-aboreto font-bold text-[20px] leading-[20px] tracking-[0.2em] text-tertiary bg-secondary rounded-[20px] w-[200px] pt-[2px] pb-[2px] text-center">
              Buy
            </button>

            <Image src={favourite} alt="favourite" width={24} height={24} />
          </div>
        </Link>
      </div>
    </>
  );
};
