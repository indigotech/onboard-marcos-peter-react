import { emailRegex } from "../utils/regex";

export function validateEmail(email: string) {
  if (!email) {
    return "Email is required.";
  }

  if (!emailRegex.test(email)) {
    return "Invalid email format.";
  }
}
