import axios from "axios";

export interface IHandleRecruitmentForm {
  firstLastName: string;
  phone: string;
  birthDate?: Date | null;
  socialMedia?: string;
  desiredPosition?: string;
  additionalInfo?: string;
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
