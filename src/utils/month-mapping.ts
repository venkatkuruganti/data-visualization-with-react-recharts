const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const getMonthNameByOrder = (label: string | number): string | undefined =>
  MONTHS[Number(label) - 1];
