export const getSeasonYear = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  // If the current month is April (4) or later, return the current year and the next year
  // Otherwise, return the previous year and the current year
  if (currentDate.getMonth() >= 3) { // Month is 0-indexed, 3 represents April
    return `${currentYear} - ${currentYear + 1}`;
  } else {
    return `${currentYear - 1} - ${currentYear}`;
  }
};