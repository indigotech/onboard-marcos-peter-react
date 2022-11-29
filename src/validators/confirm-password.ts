export function validateConfirmPassword(
  password: string,
  confirmPassword: string
) {
  if (!confirmPassword) {
    return "Password confirmation is required.";
  }

  if (password !== confirmPassword) {
    return "Passwords do not match.";
  }
}
