import { FC } from "react";
import { Header } from "../../features/Header";
import { Footer } from "../../features/Footer";
import "./styles.scss";
export const Page: FC = () => {
  return (
    <main>
      <Header />
      <Footer />
    </main>
  );
};
