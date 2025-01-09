import { Menu } from "@/components/care-cosmetics/Menu";
import { Header } from "@/components/care-cosmetics/Header";
import { Catalog } from "@/components/care-cosmetics/Catalog";
import { Footer } from "@/components/care-cosmetics/Footer";

const CareCosmetics = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Catalog />
      <Footer />
    </div>
  )
}

export default CareCosmetics;