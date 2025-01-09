import { Catalog } from "@/components/decorative-cosmetics/Catalog";
import { Footer } from "@/components/decorative-cosmetics/Footer";
import { Header } from "@/components/decorative-cosmetics/Header";
import { Menu } from "@/components/decorative-cosmetics/Menu";

const DecorativeCosmetics = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Catalog />
      <Footer />
    </div>
  )
}

export default DecorativeCosmetics;