import Image from "next/image";

import image1 from "../../public/images/about/image-1.svg";
import image2 from "../../public/images/about/image-2.svg";
import image3 from "../../public/images/about/image-3.svg";

export const About = () => {
  return (
    <section
      className="flex flex-col mt-[200px] items-center justify-center"
      id="about-us"
    >
      <div className="relative flex flex-col items-center justify-center">
        <h1 className="relative z-10 uppercase text-[50px] tracking-[0.5em] leading-[60px] font-inria text-primary text-center">
          About our cosmetics
        </h1>
        <div className="w-[488px] h-[1px] bg-secondary mt-[10px] mb-[120px]" />

        <div className="absolute left-[-35px] bottom-[110px] w-[100px] h-[100px] bg-tertiary rounded-full" />
      </div>

      <div className="flex flex-row justify-between items-center gap-[200px]">
        <div className="relative">
          <Image
            className="relative"
            src={image1}
            alt="image-1"
            width={461}
            height={550}
          />
          <Image
            className="absolute bottom-[220px] left-[330px] z-20"
            src={image2}
            alt="image-2"
            width={280}
            height={247}
          />
          <Image
            className="absolute bottom-[-80px] left-[250px] z-10"
            src={image3}
            alt="image-3"
            width={387}
            height={329}
          />
        </div>

        <div className="relative">
          <p className="w-[727px] h-[474px] uppercase text-primary text-[35px] font-aboreto text-center tracking-normal leading-none">
            AuraCosmetics offers high-quality cosmetics made from the finest
            natural ingredients, carefully designed to nourish and care for your
            skin. Each product is crafted with hypoallergenic and safe
            components to ensure maximum comfort and effectiveness. Our
            cosmetics enhance your natural beauty, providing your skin with a
            healthy glow and gentle care.
          </p>

          <p className="uppercase text-primary text-[35px] font-aboreto text-center tracking-normal leading-none">
            Choose AuraCosmetics— <br /> perfection in every detail!
          </p>

          <div className="absolute -z-10 bottom-[350px] right-[-100px] w-[300px] h-[300px] bg-tertiary rounded-full" />
          <div className="absolute -z-10 top-[360px] w-[300px] h-[300px] bg-tertiary rounded-full" />
        </div>
      </div>
    </section>
  );
};
