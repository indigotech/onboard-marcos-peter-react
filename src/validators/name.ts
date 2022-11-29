interface ValidateNameOptions {
  allowEmpty?: boolean;
  minLength?: number;
  maxLength?: number;
}

export function validateName(
  name: string,
  { allowEmpty = false, minLength = 1, maxLength = 50 }: ValidateNameOptions
) {
  if (allowEmpty && !name) {
    return "Name is required.";
  }

  if (name.length < minLength) {
    return "Name must be at least 3 characters long.";
  }

  if (name.length > maxLength) {
    return "Name must be at most 75 characters long.";
  }
}
