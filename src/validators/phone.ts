interface ValidatePhoneOptions {
  minLength?: number;
  maxLength?: number;
}

export function validatePhone(
  phone: string,
  { minLength = 10, maxLength = 15 }: ValidatePhoneOptions
) {
  if (!phone) {
    return "Phone is required.";
  }

  if (phone.length < minLength) {
    return "Phone must be at least 10 characters long.";
  }

  if (phone.length > maxLength) {
    return "Phone must be at most 15 characters long.";
  }
}
