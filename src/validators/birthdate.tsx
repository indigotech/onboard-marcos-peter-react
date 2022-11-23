export function validateBirthDate(birthDate: string) {
  const date = new Date(birthDate);
  const today = new Date();
  const age = Math.floor((today.getTime() - date.getTime()) / 31536000000);

  if (!birthDate) {
    return "Birth date is required.";
  }

  if (age < 18) {
    return "Must be at least 18 years old.";
  }

  if (!new Date(birthDate).getTime()) {
    return "Birth date must be a valid date.";
  }
}
