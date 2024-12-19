import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/header/logo.svg";
import phone from "../../public/images/footer/phone.svg";
import location from "../../public/images/footer/location.svg";

export const Footer = () => {
  return (
    <section className="flex flex-row bg-primary gap-[153px] items-center pl-[20px] pt-[64px] pb-[64px] box-border h-[473px]">
      <Image src={logo} alt="logo" width={441} height={345} />

      <div>
        <ul className="flex flex-col gap-[48px]">
          <li className="uppercase font-inria text-[24px] tracking-[0.5em] leading-[20px] text-light">
            <Link href="#catalog">Catalog</Link>
          </li>

          <li className="uppercase font-inria text-[24px] tracking-[0.5em] leading-[20px] text-light">
            <Link href="#new">New</Link>
          </li>

          <li className="uppercase font-inria text-[24px] tracking-[0.5em] leading-[20px] text-light">
            <Link href="#about-us">About us</Link>
          </li>

          <li className="uppercase font-inria text-[24px] tracking-[0.5em] leading-[20px] text-light">
            <Link href="#reviews">Reviews</Link>
          </li>

          <li className="uppercase font-inria text-[24px] tracking-[0.5em] leading-[20px] text-light">
            <Link href="#why-us">Why us</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex flex-col gap-[36px]">
          <li className="flex flex-row items-start">
            <Image src={phone} alt="phone" width={24} height={24} />
            <div className="flex flex-col gap-[10px]">
              <Link href="tel:0506795413" className="font-inria text-[20px] text-light leading-[20px] tracking-[0.5em] ml-[24px]">
                050 679 5413
              </Link>

              <Link href="tel:0676458214" className="font-inria text-[20px] text-light leading-[20px] tracking-[0.5em] ml-[24px]">
                067 645 8214
              </Link>
            </div>
          </li>

          <li className="flex flex-row items-start">
            <Image src={location} alt="location" width={24} height={24} />

            <div className="flex flex-col gap-[10px]">
              <Link href="https://www.google.com/maps?q=50.4501,30.5236" target="_blank" className="font-inria text-[20px] text-light leading-[20px] tracking-[0.5em] ml-[24px]">
              Kyiv, Ukraine
              </Link>

              <Link href="https://www.google.com/maps?q=49.8397,24.0297" target="_blank" className="font-inria text-[20px] text-light leading-[20px] tracking-[0.5em] ml-[24px]">
              Lviv, Ukraine
              </Link>
            </div>
          </li>
        </ul>

        <ul className="mt-[82px]">
          <li>
            <Link href="#privacy" className="uppercase font-inria text-[20px] text-light leading-[20px] tracking-[0.5em]">Privacy Police</Link>
          </li>

          <li className="mt-[22px]">
            <Link href="#terms" className="uppercase font-inria text-[20px] text-light leading-[20px] tracking-[0.5em]">Terms</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
