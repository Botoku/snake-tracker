import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});
dayjs.extend(relativeTime);
export const daysAgo = (date: string) => {
  return dayjs(date).fromNow();
};
export const age = (birthDate: string) => {
  const totalMonths = dayjs().diff(dayjs(birthDate), "month");
  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  if (years === 0) return `${remainingMonths} months`;
  if (remainingMonths > 0) return `${years} years, ${remainingMonths} months  `;
  return `${years} ${years > 1 ? 'years' : ' year'} `;
};
