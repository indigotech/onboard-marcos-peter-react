export const birthDateFormatter = (date: string) => {
  const dateArray = date.split("-");
  const year = dateArray[0];
  const month = dateArray[1];
  const day = dateArray[2];

  return `${day}/${month}/${year}`;
};
