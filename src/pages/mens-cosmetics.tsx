import { Catalog } from "@/components/mens-cosmetics/Catalog";
import { Footer } from "@/components/mens-cosmetics/Footer";
import { Header } from "@/components/mens-cosmetics/Header";
import { Menu } from "@/components/mens-cosmetics/Menu";

const MensCosmetics = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Catalog />
      <Footer />
    </div>
  )
}

export default MensCosmetics;