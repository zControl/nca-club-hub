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

export function calculateAgeGroup(birthdateStr: string): string {
  const birthdate = new Date(birthdateStr);
  const today = new Date();
  console.log(today);
  const cutoffDate = new Date(today.getFullYear(), 8, 1); // Month is 0-indexed, 8 = September
  console.log(cutoffDate);

  // Adjust the cutoff year if today's date is before the cutoff
  if (today < cutoffDate) {
    cutoffDate.setFullYear(cutoffDate.getFullYear() - 1);
  }

  // Calculate the age at the cutoff date
  let age = cutoffDate.getFullYear() - birthdate.getFullYear();
  console.log(age);

  // Subtract one year if the birthdate is after the cutoff date in the year
  if (birthdate > new Date(cutoffDate.getFullYear(), birthdate.getMonth(), birthdate.getDate())) {
    age--;
  }
  console.log(age);

  // Determine the age group based on the age
  const ageGroup = `U${age + 1}`;
  console.log(ageGroup);

  return ageGroup;
}

export const getSummerPlayerBirthYears = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  // Return the years for players who will be playing in the summer only
  return `${currentYear} - ${currentYear + 1}`
}

export const getLeaguePlayerBirthYears = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  // Return the years for players who will be playing in the league only
  return `${currentYear - 1} - ${currentYear}`
}