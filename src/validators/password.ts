import { passwordRegex } from "../utils/regex";

export function validatePassword(password: string) {
  if (!password) {
    return "Password is required.";
  }

  if (!passwordRegex.test(password)) {
    return "Password has to be at least 7 characters long, one uppercase letter, one lowercase letter, one number and one special character.";
  }
}
