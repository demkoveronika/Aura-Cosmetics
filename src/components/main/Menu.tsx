import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import closeIcon from "@/../../public/images/icons/close.svg";

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<Props> = ({ isOpen, toggleMenu }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <section
      className={`transition-all duration-500 ease-in-out transform ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } fixed top-0 right-0 w-full h-full bg-white z-50 overflow-y-auto`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="relative">
          <div className="absolute left-[-40px] top-[200px] w-[100px] h-[100px] bg-primary rounded-full" />
          <div className="absolute left-[110px] top-[-60px] w-[200px] h-[200px] bg-primary rounded-full" />
          <div className="absolute left-[-100px] top-[-60px] w-[300px] h-[300px] bg-tertiary rounded-full" />
          <div className="absolute left-[100px] top-[110px] w-[150px] h-[150px] bg-secondary rounded-full" />
        </div>

        <div className="relative">
          <h1 className="relative z-10 uppercase text-[50px] tracking-[0.5em] leading-[60px] font-inria text-primary text-center mt-[48px]">
            Menu
          </h1>

          <div className="absolute left-[70px] top-[-100px] w-[300px] h-[300px] bg-tertiary rounded-full" />
          <div className="absolute left-[-30px] top-[-1px] w-[150px] h-[150px] bg-secondary rounded-full" />
        </div>

        <div className="pr-[68px]">
          <Link href="/" onClick={toggleMenu}>
            <Image src={closeIcon} alt="close icon" width={45} height={45} />
          </Link>
        </div>
      </div>

      <div className="relative ml-[173px] mt-[112px]">
        <div>
          <Link
            href="#catalog"
            onClick={() => {
              toggleMenu();
            }}
            className="uppercase text-[36px] tracking-[0.5em] leading-[60px] font-inria text-primary"
          >
            Our catalog
          </Link>
          <div className="mb-[89px]">
            <div className="mt-[20px] flex flex-row items-center">
              <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full ml-[75px]" />
              <h3 className="ml-[176px] uppercase text-[25px] tracking-[0.2em] text-primary font-inria">
                Care cosmetics
              </h3>
            </div>

            <hr className="relative top-[68px] right-[10px] rotate-90 bg-secondary w-[190px] border-none h-[1px]" />

            <div className="mt-[20px] flex flex-row items-center">
              <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full ml-[75px]" />
              <h3 className="ml-[176px] uppercase text-[25px] tracking-[0.2em] text-primary font-inria">
                Decorative cosmetics
              </h3>
            </div>

            <div className="mt-[20px] flex flex-row items-center">
              <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full ml-[75px]" />
              <h3 className="ml-[176px] uppercase text-[25px] tracking-[0.2em] text-primary font-inria">
                Sensitive cosmetics
              </h3>
            </div>

            <div className="mt-[20px] flex flex-row items-center">
              <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full ml-[75px]" />
              <h3 className="ml-[176px] uppercase text-[25px] tracking-[0.2em] text-primary font-inria">
                Men’s cosmetics
              </h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[44px]">
          <Link
            href="#new"
            onClick={() => toggleMenu()}
            className="uppercase text-[36px] tracking-[0.5em] leading-[60px] font-inria text-primary"
          >
            New product
          </Link>
          <Link
            href="#about-us"
            onClick={() => toggleMenu()}
            className="uppercase text-[36px] tracking-[0.5em] leading-[60px] font-inria text-primary"
          >
            About our cosmetics
          </Link>
          <Link
            href="#reviews"
            onClick={() => toggleMenu()}
            className="uppercase text-[36px] tracking-[0.5em] leading-[60px] font-inria text-primary"
          >
            Reviews
          </Link>
          <Link
            href="#why-us"
            onClick={() => toggleMenu()}
            className="uppercase text-[36px] tracking-[0.5em] leading-[60px] font-inria text-primary"
          >
            Our advantages
          </Link>
        </div>

        <div className="mt-[44px]">
          <h2 className="uppercase text-[36px] tracking-[0.5em] leading-[60px] font-inria text-primary">
            Contacts
          </h2>
          <div>
            <div className="mt-[24px] flex flex-row items-center">
              <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full ml-[75px]" />
              <Link
                href="tel:0506795413"
                className="ml-[176px] uppercase text-[25px] tracking-[0.5em] leading-[20px] text-primary font-inria"
              >
                050 679 5413
              </Link>
            </div>

            <hr className="relative top-[10px] left-[55px] rotate-90 bg-secondary w-[58px] border-none h-[1px]" />

            <div className="mt-[23px] flex flex-row items-center">
              <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full ml-[75px]" />
              <Link
                href="tel:0676458214"
                className="ml-[176px] uppercase text-[25px] tracking-[0.5em] leading-[20px] text-primary font-inria"
              >
                067 645 8214
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-[41px]">
          <h2 className="uppercase text-[36px] tracking-[0.5em] leading-[60px] font-inria text-primary">
            Location
          </h2>
          <div>
            <div className="mt-[17px] flex flex-row items-center">
              <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full ml-[75px]" />
              <Link
                href="https://www.google.com/maps?q=50.4501,30.5236"
                target="_blank"
                className="ml-[176px] uppercase text-[25px] tracking-[0.5em] leading-[20px] text-primary font-inria"
              >
                Kyiv, Ukraine
              </Link>
            </div>

            <hr className="relative top-[10px] left-[58px] rotate-90 bg-secondary w-[54px] border-none h-[1px]" />

            <div className="mt-[17px] flex flex-row items-center">
              <div className="absolute w-[20px] h-[20px] bg-secondary rounded-full ml-[75px]" />
              <Link
                href="https://www.google.com/maps?q=49.8397,24.0297"
                target="_blank"
                className="ml-[176px] uppercase text-[25px] tracking-[0.5em] leading-[20px] text-primary font-inria"
              >
                Lviv, Ukraine
              </Link>
            </div>
          </div>
        </div>

        <div className=" relative mt-[70px] pb-[138px] flex flex-row gap-[64px] overflow-hidden">
          <Link
            href="/privacy-policy"
            onClick={() => {
              toggleMenu();
            }}
            className="uppercase text-[36px] tracking-[0.5em] leading-[60px] font-inria text-primary"
          >
            Privacy Policy
          </Link>

          <hr className="relative rotate-90 top-[30px] bg-secondary w-[70px] border-none h-[1px]" />

          <Link
            href="/terms"
            onClick={() => {
              toggleMenu();
            }}
            className="uppercase text-[36px] tracking-[0.5em] leading-[60px] font-inria text-primary"
          >
            Terms
          </Link>

          <div className="absolute right-[180px] top-[20px] w-[100px] h-[100px] bg-primary rounded-full" />
          <div className="absolute right-[-60px] w-[300px] h-[300px] bg-tertiary rounded-full" />
          <div className="absolute right-[140px] top-[80px] w-[200px] h-[200px] bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Menu;
