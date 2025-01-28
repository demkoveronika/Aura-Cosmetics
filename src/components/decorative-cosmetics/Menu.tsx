import Image from "next/image";
import Link from "next/link";

import hero from "@/../../public/images/heroes/hero-dec-cosmetics.svg";

export const Menu = () => {
  return (
    <section className="mt-[149px]">
      <div className="bg-tertiary pt-[20px] pb-[20px] pr-[48px]">
        <ul className="flex flex-row justify-between relative">
          <li className="group">
            <button className="relative font-aboreto text-[24px] pl-[48px] leading-[40px] tracking-[0.2em] text-primary hover:text-secondary">
              Face Makeup
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Foundation
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Liquid Foundation
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Stick Foundation
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Powder Foundation
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Concealer
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Liquid Concealer
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Stick Concealer
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Cream Concealer
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Powder
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Loose Powder
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Compact Powder
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Blush
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Powder Blush
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Cream Blush
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Stick Blush
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Highlighter
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Powder Highlighter
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Liquid Highlighter
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Stick Highlighter
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Bronzer
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Powder Bronzer
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Cream Bronzer
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary hover:text-secondary">
              Eye Makeup
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Eyeshadow
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Powder Eyeshadow
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Cream Eyeshadow
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Liquid Eyeshadow
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Eyeliner
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Pencil Eyeliner
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Liquid Eyeliner
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Gel Eyeliner
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Mascara
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Volumizing Mascara
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Lengthening Mascara
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Waterproof Mascara
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Eyebrow Products
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Brow Pencil
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Brow Gel
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Brow Powder
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Brow Pomade
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                False Eyelashes
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Strip Lashes
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Individual Lashes
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Lash Glue
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary hover:text-secondary">
              Lip Makeup
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Lipstick
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Matte Lipstick
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Cream Lipstick
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Satin Lipstick
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Lip Gloss
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Clear Lip Gloss
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Tinted Lip Gloss
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Plumping Lip Gloss
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Lip Liner
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Pencil Lip Liner
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Retractable Lip Liner
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Liquid Lip Liner
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Lip Balm
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Hydrating Lip Balm
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Tinted Lip Balm
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  SPF Lip Balm
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="relative font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary hover:text-secondary">
              Makeup Accessories
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Makeup Brushes
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Foundation Brushes
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Eyeshadow Brushes
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Blush Brushes
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Lip Brushes
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Beauty Sponges
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Makeup Sponge
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Silicone Sponge
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Eyelash Curlers
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Manual Eyelash Curler
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Heated Eyelash Curler
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Makeup Removers
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Micellar Water
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Makeup Removing Wipes
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Cleansing Oil
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Makeup Bags
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Travel Makeup Bags
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Cosmetic Cases
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Organizer Bags
                </Link>
              </ul>
            </div>
          </li>

          <li className="group">
            <button className="font-aboreto text-[24px] leading-[40px] tracking-[0.2em] text-primary">
              Gift sets
            </button>

            <div className="absolute top-[61px] left-0 transition-all duration-300 transform opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 flex flex-col bg-tertiary bg-opacity-90 w-screen p-[42px] shadow-lg origin-top">
              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Face Makeup Sets
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Foundation Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Blush + Highlighter Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Contour + Bronzer Sets
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Eye Makeup Sets
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Eyeshadow Palettes
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Eyeliner + Mascara Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Brow Grooming Sets
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Lip Makeup Sets
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-[20px]">
                <Link href={"/"} className="hover:text-secondary">
                  Lipstick + Lip Gloss Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Lip Care Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Lip Liner + Lipstick Sets
                </Link>
              </ul>

              <p className="font-aboreto text-primary text-[20px] pb-[8px] hover:text-secondary font-bold">
                Makeup Accessories Sets
              </p>
              <ul className="font-aboreto text-primary pl-[20px] text-[18px] gap-[36px] flex flex-row pb-0">
                <Link href={"/"} className="hover:text-secondary">
                  Brush Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Beauty Sponge Sets
                </Link>
                <Link href={"/"} className="hover:text-secondary">
                  Eyelash Curler Sets
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
