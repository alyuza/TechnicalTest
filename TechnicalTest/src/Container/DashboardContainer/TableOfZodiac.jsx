export const getTZodiac = (dateOfBirth) => {
  const TZodiac = [
    { startDate: '12-22', endDate: '01-19', zodiac: 'Capricorn' },
    { startDate: '01-20', endDate: '02-18', zodiac: 'Aquarius' },
    { startDate: '02-19', endDate: '03-20', zodiac: 'Pisces' },
    { startDate: '03-21', endDate: '04-19', zodiac: 'Aries' },
    { startDate: '04-20', endDate: '05-20', zodiac: 'Taurus' },
    { startDate: '05-21', endDate: '06-20', zodiac: 'Gemini' },
    { startDate: '06-21', endDate: '07-22', zodiac: 'Cancer' },
    { startDate: '07-23', endDate: '08-22', zodiac: 'Leo' },
    { startDate: '08-23', endDate: '09-22', zodiac: 'Virgo' },
    { startDate: '09-23', endDate: '10-22', zodiac: 'Libra' },
    { startDate: '10-23', endDate: '11-21', zodiac: 'Scorpio' },
    { startDate: '11-22', endDate: '12-21', zodiac: 'Sagittarius' },
  ];

  const birthDate = new Date(dateOfBirth);
  const birthMonthDay = `${('0' + (birthDate.getMonth() + 1)).slice(-2)}-${('0' + birthDate.getDate()).slice(-2)}`;

  for (const sign of TZodiac) {
    if (
      (birthMonthDay >= sign.startDate && birthMonthDay <= '12-31') ||
      (birthMonthDay >= '01-01' && birthMonthDay <= sign.endDate)
    ) {
      return sign.zodiac;
    }
  }
  return 'Unknown';
};
