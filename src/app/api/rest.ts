import axios from "axios";

export const REST = {
  createTask: () => `/api/task`,
};
export const sendForm = async (inputData: any): Promise<string> => {
  const result = await axios.post(REST.createTask(), inputData);
  return result && "success";
};
