// HolidayReminder.js
import React, { useState, useEffect } from 'react';
import Countdown from './Countdown'; // Assuming you have Countdown component

const HolidayReminder = () => {
  const [upcomingHoliday, setUpcomingHoliday] = useState(null);
  const YEAR = new Date().getFullYear();
  const COUNTRY_CODE = 'US';

  useEffect(() => {
    fetch(`https://date.nager.at/Api/v2/PublicHolidays/${YEAR}/${COUNTRY_CODE}`)
      .then(response => response.json())
      .then(data => {
        // Filter out past holidays and sort by date
        const futureHolidays = data.filter(holiday => new Date(holiday.date) > new Date())
                                    .sort((a, b) => new Date(a.date) - new Date(b.date));
        setUpcomingHoliday(futureHolidays[0]);
      })
      .catch(error => console.error('Error fetching holiday data:', error));
  }, [YEAR, COUNTRY_CODE]);

  return (
    <div className="holiday-reminder">
      {upcomingHoliday ? (
        <>
          <div>Next Holiday: {upcomingHoliday.localName} - {upcomingHoliday.date}</div>
          <Countdown targetDate={upcomingHoliday.date} />
        </>
      ) : (
        <div>Loading holidays...</div>
      )}
    </div>
  );
};

export default HolidayReminder;


