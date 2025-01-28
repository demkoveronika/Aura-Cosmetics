import Image from "next/image";
import Link from "next/link";

import hero from "@/../../public/images/heroes/hero-care-cosmetics.svg";

export const Menu = () => {
  return (
    <section className="mt-[231px]">
      <div className="bg-secondary pt-[20px] pb-[20px] pr-[48px]">
        <ul className="flex flex-row justify-between relative">
          <li className="group">
            <button className="relative font-aboreto text-[24px] pl-[48px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-primary">
              Facial Care
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-secondary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Face Masks
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Hydrating
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Purifying
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Anti-aging
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Face Creams
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Day Cream
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Night Cream
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Anti-aging Cream
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Serums
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  For Hydration
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Anti-wrinkle
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Vitamin Complexes
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Cleansing Products
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-primary">
                  Cleansing Gels
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Micellar Water
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Toners
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-primary">
              Body Care
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-secondary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Body Lotions and Creams
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Moisturizing
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Nourishing
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Scrubs and Peelings
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  For Smooth Skin
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Anti-cellulite
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Body Oils
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Natural Oils
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Aromatic Oils
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Bath Products
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Bath Bombs
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Bath Salts
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Anti-cellulite Products
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-primary">
                  Creams
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Gels
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-primary">
              Hair Care
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-secondary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Shampoos
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  For Dry Hair
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  For Oily Hair
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Anti-Hair Loss
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Conditioners and Masks
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Repairing
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  For Volume
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Serums and Oils
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  For Hair Ends
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Strengthening
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Styling Products
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Hairsprays
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Gels
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Hair Coloring
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-primary">
                  Natural Dyes
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Toning Products
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-primary">
              Sun Protection Products
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-secondary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                SPF Creams and Lotions
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  For Face
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  For Body
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Sun Protection for kids
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Hypoallergenic
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  High SPF
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                After-Sun Lotions
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Soothing
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Hydrating
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Sunscreen Sprays
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Quick Application
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Mineral SPF Cosmetics
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-primary">
                  Powders
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Tinted Moisturizers
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-primary">
              Gift sets
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-secondary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Facial Care Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Hydrating Kits
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Anti-aging Kits
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Body Care Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Lotions and Oils
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Scrubs and Creams
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Hair Care Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Shampoo + Conditioner
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Masks + Serums
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Aromatic Gift Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-primary">
                  Candles and Oils
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  Bath Products
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-primary font-bold">
                Universal Gift Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-primary">
                  Travel Kits
                </Link>
                <Link href={"/"} className="hover:text-primary">
                  For Men
                </Link>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full h-[1px] bg-primary" />
      <Image src={hero} alt="hero" width={2000} height={839} />
    </section>
  );
};
