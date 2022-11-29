export const formatPhone = (phone: string) => {
  const phoneRegex = /(\d{2})(\d{4,5})(\d{4})/;
  return phone.replace(phoneRegex, "($1) $2-$3");
};
