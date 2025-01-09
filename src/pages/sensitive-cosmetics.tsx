import { Footer } from "@/components/care-cosmetics/Footer";
import { Catalog } from "@/components/sensitive-cosmetics/Catalog";
import { Header } from "@/components/sensitive-cosmetics/Header";
import { Menu } from "@/components/sensitive-cosmetics/Menu";

const SensitiveCosmetics = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Catalog />
      <Footer />
    </div>
  )
}

export default SensitiveCosmetics;