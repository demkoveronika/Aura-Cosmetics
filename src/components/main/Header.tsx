import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Menu from "./Menu";

import logo from "@/../../public/images/logoes/logo.svg";
import menu from "@/../../public/images/icons/menu.svg";
import cart from "@/../../public/images/icons/shopping-bag.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex justify-between items-center px-[68px] py-[16px]">
      <Image src={logo} alt="logo" width={106} height={106} />

      <nav>
        <ul className="flex justify-between items-center gap-[40px]">
          <li className="list-item">
            <Link href="#catalog">Catalog</Link>
          </li>
          <li className="list-item">
            <Link href="#new">New</Link>
          </li>
          <li className="list-item">
            <Link href="#reviews">Reviews</Link>
          </li>
          <li className="list-item">
            <Link href="#other">Other</Link>
          </li>
        </ul>
      </nav>

      <ul className="flex justify-between gap-[28px]">
        <li>
          <Link href="#cart">
            <Image src={cart} alt="cart" width={40} height={45} />
          </Link>
        </li>
        <li>
          <Link href="#menu" onClick={toggleMenu}>
            <Image src={menu} alt="menu" width={45} height={45} />
          </Link>
        </li>
      </ul>

      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};
