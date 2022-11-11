export const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/;
export const passwordRegex = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,20})"
);
