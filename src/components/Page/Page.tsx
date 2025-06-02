import { FC } from "react";
import { Header } from "../../features/Header";
import { Footer } from "../../features/Footer";
import "./styles.scss";
import { RecruitmentSection } from "../../features/RecruitmentSection";
export const Page: FC = () => {
  return (
    <>
      <Header />
      <main>
        <RecruitmentSection />
      </main>
      <Footer />
    </>
  );
};
