import Image from "next/image";

import logo from "@/../../public/images/logo-light.svg";
import Link from "next/link";
import phone from "@/../../public/images/icons/call-light.svg";
import location from "@/../../public/images/icons/location-light.svg";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-secondary" />
    
      <footer className="flex flex-row justify-between items-center pb-[59px] pt-[64px]">
        <Image src={logo} alt="logo" width={441} height={345} />

        <div>
          <ul className="flex flex-col gap-[40px] items-start">
            <li className="font-inria uppercase text-[24px] leading-[20px] tracking-[0.5em] text-primary">
              <Link href="#">Facial Care</Link>
            </li>

            <li className="font-inria uppercase text-[24px] leading-[20px] tracking-[0.5em] text-primary">
              <Link href="#">Body Care</Link>
            </li>

            <li className="font-inria uppercase text-[24px] leading-[20px] tracking-[0.5em] text-primary">
              <Link href="#">Hair Care</Link>
            </li>

            <li className="font-inria uppercase text-[24px] leading-[20px] tracking-[0.5em] text-primary">
              <Link href="#">
                Sun Protection <br /> Products
              </Link>
            </li>

            <li className="font-inria uppercase text-[24px] leading-[20px] tracking-[0.5em] text-primary">
              <Link href="#">Gift Sets</Link>
            </li>

            <li className="font-inria uppercase text-[24px] leading-[20px] tracking-[0.5em] text-primary">
              <Link href="#special">Special for you</Link>
            </li>
          </ul>
        </div>

        <div className="mr-[79px]">
          <ul className="flex flex-col gap-[38px]">
            <li className="flex flex-row items-start">
              <Image src={phone} alt="phone" width={24} height={24} />

              <div className="flex flex-col gap-[10px]">
                <Link
                  href="tel:0506795413"
                  className="font-inria text-[20px] tracking-[0.5em] leading-[20px] text-primary ml-[21px]"
                >
                  050 679 5413
                </Link>

                <Link
                  href="tel:0676458214"
                  className="font-inria text-[20px] tracking-[0.5em] leading-[20px] text-primary ml-[21px]"
                >
                  067 645 8214
                </Link>
              </div>
            </li>

            <li className="flex flex-row items-start">
              <Image src={location} alt="location" width={24} height={24} />

              <div className="flex flex-col gap-[10px]">
                <Link
                  href="https://www.google.com/maps?q=50.4501,30.5236"
                  target="_blank"
                  className="font-inria text-[20px] tracking-[0.5em] leading-[20px] text-primary ml-[21px]"
                >
                  Kyiv, Ukraine
                </Link>

                <Link
                  href="https://www.google.com/maps?q=49.8397,24.0297"
                  target="_blank"
                  className="font-inria text-[20px] tracking-[0.5em] leading-[20px] text-primary ml-[21px]"
                >
                  Lviv, Ukraine
                </Link>
              </div>
            </li>
          </ul>

          <ul className="flex flex-col items-end gap-[24px] mt-[133px]">
            <li className="font-inria text-[24px] leading-[20px] tracking-[0.5em] text-primary uppercase">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>

            <li className="font-inria text-[24px] leading-[20px] tracking-[0.5em] text-primary uppercase">
              <Link href="/terms">Terms</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
