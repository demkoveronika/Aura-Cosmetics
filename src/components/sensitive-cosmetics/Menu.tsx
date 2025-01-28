import Image from "next/image";
import Link from "next/link";

import hero from "@/../../public/images/heroes/hero-sens-cosmetics.svg";

export const Menu = () => {
  return (
    <section className="mt-[304px]">
      <div className="bg-primary pt-[20px] pb-[20px] pr-[48px]">
        <ul className="flex flex-row justify-between relative">
          <li className="group">
            <button className="relative font-aboreto pl-[48px] text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-secondary">
              Facial Care
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-primary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Face Masks
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Hydrating
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Purifying
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Anti-aging
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Face Creams
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Day Cream
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Night Cream
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Anti-aging Cream
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Serums
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  For Hydration
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Anti-wrinkle
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Vitamin Complexes
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Cleansing Products
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Cleansing Gels
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Micellar Water
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Toners
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-secondary">
              Body Care
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-primary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Body Lotions and Creams
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Moisturizing
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Nourishing
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Scrubs and Peelings
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  For Smooth Skin
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Anti-cellulite
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Body Oils
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Natural Oils
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Aromatic Oils
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Bath Products
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Bath Bombs
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Bath Salts
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Anti-cellulite Products
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Creams
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Gels
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-secondary">
              Hair Care
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-primary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Shampoos
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  For Dry Hair
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  For Oily Hair
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Anti-Hair Loss
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Conditioners and Masks
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Repairing
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  For Volume
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Serums and Oils
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  For Hair Ends
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Strengthening
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Styling Products
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Hairsprays
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Gels
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Hair Coloring
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Natural Dyes
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Toning Products
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-secondary">
              Sun Protection Products
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-primary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                SPF Creams and Lotions
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  For Face
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  For Body
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Sun Protection for kids
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Hypoallergenic
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  High SPF
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                After-Sun Lotions
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Soothing
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Hydrating
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Sunscreen Sprays
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Quick Application
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Mineral SPF Cosmetics
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Powders
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Tinted Moisturizers
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-tertiary hover:text-secondary">
              Gift sets
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-primary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Facial Care Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Hydrating Kits
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Anti-aging Kits
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Body Care Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Lotions and Oils
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Scrubs and Creams
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Hair Care Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Shampoo + Conditioner
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Masks + Serums
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Aromatic Gift Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Candles and Oils
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Bath Products
                </Link>
              </ul>

              <p className="font-aboreto text-tertiary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Universal Gift Sets
              </p>
              <ul className="font-aboreto text-tertiary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Travel Kits
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  For Men
                </Link>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="w-full h-[1px] bg-secondary" />
      <Image src={hero} alt="hero" width={2000} height={839} />
    </section>
  );
};
