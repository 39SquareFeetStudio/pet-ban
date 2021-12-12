//至少八個字符，至少一個字母和一個數字
export const validatePassword = () => {
  return "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$";
};
