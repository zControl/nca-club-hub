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

// Function to determine team based on birthday
export function determineTeamFromBirthday(day: string, month: string, year: string): string {
  // Convert inputs to numbers
  const birthDay = parseInt(day);
  const birthMonth = parseInt(month);
  const birthYear = parseInt(year);

  // Create a Date object for the birthday
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay); // month is 0-indexed in JS Date

  // Get current year
  const currentYear = new Date().getFullYear();

  // Calculate age as of September 1st of current year
  const cutoffDate = new Date(currentYear, 8, 1); // September 1st (month is 0-indexed)

  // Calculate years since birth on the cutoff date
  let yearsSinceBirth = cutoffDate.getFullYear() - birthDate.getFullYear();

  // Adjust if birthday hasn't occurred yet in the cutoff year
  const birthDateThisYear = new Date(cutoffDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (birthDateThisYear > cutoffDate) {
    yearsSinceBirth--;
  }

  // Determine team based on age
  // U10 means "under 10", so ages 8-9
  // U11 means "under 11", so ages 9-10
  // and so on
  return `U${yearsSinceBirth + 1}`;
}