import { FC } from "react";
import "./styles.scss";
import RecruitmentForm from "./RecruitmentForm/RecruitmentForm";
export const RecruitmentSection: FC = () => {
  return (
    <section className="recruitment-section">
      <RecruitmentForm />
    </section>
  );
};
