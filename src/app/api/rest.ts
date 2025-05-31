import axios from "axios";

export interface IHandleRecruitmentForm {
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  birthDate: Date;
  socialMedia?: string;
  desiredPosition?: string;
  region: string;
  isMilitary: boolean;
  captcha: string;
}

export const REST = {
  handleForm: () => `/handleForm.php`,
};
export const handleForm = async (
  inputData: IHandleRecruitmentForm
): Promise<string> => {
  const result = await axios.post(REST.handleForm(), inputData);
  return result && "success";
};
