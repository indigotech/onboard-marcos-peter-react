import { emailRegex } from "../utils/regex";

export function validateEmail(email: string) {
  if (!email) {
    return { message: "Email is required.", field: "email" };
  }

  if (!emailRegex.test(email)) {
    return { message: "Invalid email format.", field: "email" };
  }
}
