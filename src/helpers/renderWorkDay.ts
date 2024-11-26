import { IWorkDays } from "../models/response/FriendsResponse";

export const renderWorkDay = (workDays: IWorkDays[]) => {
  const todayIndex = new Date().getDay() - 1;
  const today = todayIndex < 0 ? 6 : todayIndex;
  const workDay = workDays?.[today];

  if (!workDay) {
    return "Day and Night";
  }

  if (!workDay.isOpen) {
    return "Closed";
  }

  return `${workDay.from} - ${workDay.to}`;
};
