import { passwordRegex } from "../utils/regex";

export function validatePassword(password: string) {
  if (!password) {
    return { message: "Password is required.", field: "password" };
  }

  if (!passwordRegex.test(password)) {
    return {
      message:
        "Password has to be at least 7 characters long, one uppercase letter, one lowercase letter, one number and one special character.",
      field: "password",
    };
  }
}
