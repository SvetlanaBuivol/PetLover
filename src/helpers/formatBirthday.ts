export const formatBirthday = (dateString: string): string => {
  console.log("formatBirthday  dateString", dateString)
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
};