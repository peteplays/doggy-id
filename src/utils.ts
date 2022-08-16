export const buildExpiredDate = (customDate?: Date) => {
  const date = customDate ? new Date(customDate) : new Date();

  const monthCal = date.getUTCMonth() + 7 + 1;
  const month = monthCal > 12 ? monthCal - 12 : monthCal;

  return `${date.getFullYear() + 1}-${month > 9 ? month : `0${month}`}-07`;
};
