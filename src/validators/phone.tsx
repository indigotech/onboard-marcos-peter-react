export function validatePhone(phone: string) {
  if (!phone) {
    return "Phone is required.";
  }

  if (phone.length < 10) {
    return "Phone must be at least 10 characters long.";
  }

  if (phone.length > 15) {
    return "Phone must be at most 15 characters long.";
  }
}
