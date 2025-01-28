import Image from "next/image";
import Link from "next/link";

import hero from "@/../../public/images/heroes/hero-mens-cosmetics.svg";

export const Menu = () => {
  return (
    <section>
      <div className="bg-tertiary pt-[20px] pb-[20px] pr-[48px]">
        <ul className="flex flex-row justify-between relative">
          <li className="group">
            <button className="relative font-aboreto text-[24px] pl-[48px] leading-[40px] tracking-[0.2em] text-primary hover:text-secondary">
              Facial Care
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Cleansers
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Face Wash
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Exfoliating Cleanser
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Micellar Water
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Toners
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Hydrating Toner
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Mattifying Toner
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Pore-Minimizing Toner
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Serums
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Anti-Aging Serum
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Hydrating Serum
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Brightening Serum
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Moisturizers
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Daily Moisturizer
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Oil-Free Moisturizer
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Night Cream
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Eye Care
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Eye Cream
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Eye Gel
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Eye Serum
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Face Masks
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Hydrating Face Mask
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Purifying Face Mask
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Anti-Aging Face Mask
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Acne Treatments
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Spot Treatment
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Acne Gel
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Acne Cream
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Sun Protection
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Sunscreen Lotion
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  SPF Face Cream
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  After-Sun Care
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary hover:text-secondary">
              Body Care
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Body Wash
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Shower Gel
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Bar Soap
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Exfoliating Body Scrub
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Body Lotion
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Hydrating Body Lotion
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Firming Body Lotion
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  After-Sun Lotion
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Body Spray
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Body Mist
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Deodorant Spray
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Hand Care
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Hand Cream
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Hand Sanitizer
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary hover:text-secondary">
              Hair Care
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Shampoo
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Volumizing Shampoo
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Moisturizing Shampoo
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Strengthening Shampoo
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Conditioner
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Leave-In Conditioner
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Rinse-Out Conditioner
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Deep Conditioning Treatment
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Hair Styling
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Hair Gel
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Hair Wax
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Hair Cream
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Hair Mousse
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Hair Treatments
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Hair Serum
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Hair Oil
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Scalp Treatment
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary hover:text-secondary">
              Shaving Products
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Shaving Cream
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Foam Shaving Cream
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Gel Shaving Cream
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Shaving Soap
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Razors
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Disposable Razors
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Safety Razors
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Electric Razors
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Aftershave
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Aftershave Balm
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Aftershave Lotion
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Aftershave Gel
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Shaving Brushes
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Badger Hair Brushes
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Synthetic Hair Brushes
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary hover:text-secondary">
              Gift sets
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Hair Care Sets
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Shampoo + Conditioner Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Hair Styling + Treatment Sets
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Body Care Sets
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Body Wash + Lotion Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Exfoliating Scrub + Body Cream Sets
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Shaving Sets
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Razor + Shaving Cream Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Shaving Brush + Aftershave Sets
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Universal Gift Sets
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Travel Grooming Kits
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Luxury Grooming Sets
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
