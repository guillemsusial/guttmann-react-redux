import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Introduction } from "../../components/home/introduction";
import { Categories } from "../../components/home/categories";

export const Home = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Categories />
      <Footer />
    </div>
  );
};