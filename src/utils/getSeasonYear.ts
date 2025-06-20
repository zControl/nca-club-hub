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
  // Age Determination:
  // A player's age group will be determined by their age on August 1st of the seasonal year.
  // Example:
  // If the season runs from August 1, 2026 to July 31, 2027, a player's age on August 1, 2026 will determine their age group for that season.

  // Convert inputs to numbers
  const birthDay = parseInt(day);
  const birthMonth = parseInt(month);
  const birthYear = parseInt(year);


  // Create a Date object for the birthday
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  console.log(`Birthday: ${birthDate}`);

  // Get current date
  const currentDate = new Date();

  // Determine the seasonal year
  let seasonStartYear = currentDate.getFullYear();
  if (currentDate.getMonth() < 4) { // 0=Jan, 1=Feb, 2=Mar, 3=Apr, 4=May
    seasonStartYear = seasonStartYear - 1;
  }

  // Calculate age cutoff date (August 1st of the seasonal year)
  const cutoffDate = new Date(seasonStartYear, 6, 31);
  console.log(`Cutoff date: ${cutoffDate}`);

  // Calculate years since birth on the cutoff date
  let yearsSinceBirth = cutoffDate.getFullYear() - birthDate.getFullYear();
  console.log(`Years since birth: ${yearsSinceBirth}`);

  // Adjust if birthday hasn't occurred yet in the cutoff year
  const birthDateThisYear = new Date(cutoffDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (birthDateThisYear > cutoffDate) {
    yearsSinceBirth--;
    console.log(`Adjusted years since birth: ${yearsSinceBirth}`);
  }

  return `U${yearsSinceBirth + 1}`;
}