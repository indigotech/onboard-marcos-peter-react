export function validateName(name: string) {
  if (!name) {
    return "Name is required.";
  }

  if (name.length < 3) {
    return "Name must be at least 3 characters long.";
  }

  if (name.length > 75) {
    return "Name must be at most 75 characters long.";
  }
}
