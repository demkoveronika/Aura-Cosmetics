import Image from "next/image";
import Link from "next/link";

import catalog1 from "@/../../public/images/catalog/catalog-1.svg";
import catalog2 from "@/../../public/images/catalog/catalog-2.svg";
import catalog3 from "@/../../public/images/catalog/catalog-3.svg";
import catalog4 from "@/../../public/images/catalog/catalog-4.svg";

export const Catalog = () => {
  return (
    <section
      id="catalog"
      className="relative flex flex-col mt-[175px] items-center justify-center"
    >
      <h1 className="relative z-10 uppercase text-[50px] tracking-[0.5em] leading-[60px] font-inria text-primary text-center">
        Our Catalog
      </h1>
      <div className="absolute top-[-45px] left-[400px] w-[150px] h-[150px] bg-secondary rounded-full" />
      <div className="w-[287px] mb-[170px] mt-[10px] h-[1px] bg-secondary" />

      <div className="flex row-auto gap-[32px] items-center justify-center relative">
        <Link href="/care-cosmetics" className="cursor-pointer">
          <Image
            className="relative z-10 transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={catalog1}
            alt="catalog-1"
            width={400}
            height={533}
          />
        </Link>
        <div className="absolute left-[480px] top-[350px] w-[150px] h-[150px] bg-secondary rounded-full" />
        <div className="absolute left-[270px] top-[350px] w-[300px] h-[300px] bg-tertiary rounded-full" />
        <div className="absolute left-[360px] top-[250px] w-[200px] h-[200px] bg-primary rounded-full" />

        <div className="block items-center">
          <Link href="#catalog2" className="cursor-pointer">
            <Image
              className="relative z-10 transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={catalog2}
              alt="catalog-2"
              width={338}
              height={274}
            />
          </Link>

          <Link href="#catalog3" className="cursor-pointer">
            <Image
              className=" relative z-10 mt-[14px] ml-[195px] transition-transform duration-300 ease-in-out transform hover:scale-105"
              src={catalog3}
              alt="catalog-3"
              width={374}
              height={245}
            />
          </Link>
        </div>

        <div className="absolute right-[286px] bottom-[30px] w-[300px] h-[300px] bg-primary rounded-full" />
        <div className="absolute right-[446px] bottom-[250px] w-[150px] h-[150px] bg-tertiary rounded-full" />
        <div className="absolute right-[144px] bottom-[270px] w-[400px] h-[400px] bg-secondary rounded-full" />
        <Link href="#catalog4" className="cursor-pointer">
          <Image
            className="relative z-10 transition-transform duration-300 ease-in-out transform hover:scale-105"
            src={catalog4}
            alt="catalog-4"
            width={381}
            height={533}
          />
        </Link>
      </div>
    </section>
  );
};
