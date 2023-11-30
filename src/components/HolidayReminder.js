// HolidayReminder.js
import React, { useState, useEffect } from 'react';

const HolidayReminder = () => {
  const [holidays, setHolidays] = useState([]);
  const YEAR = '2023'; // 可以根据需要更改年份
  const COUNTRY_CODE = 'US'; // 美国的国家代码

  useEffect(() => {
    fetch(`https://date.nager.at/Api/v2/PublicHolidays/${YEAR}/${COUNTRY_CODE}`)
      .then(response => response.json())
      .then(data => {
        setHolidays(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <div className="holiday-reminder">
      <h2>美国公共假日</h2>
      {holidays.map(holiday => (
        <div key={holiday.date}>{holiday.localName} - {holiday.date}</div>
      ))}
    </div>
  );
};

export default HolidayReminder;
