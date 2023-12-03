import React, { useState, useEffect } from 'react';
import Countdown from './Countdown'; 
// import Confetti from 'react-confetti'; // 可选：注释掉这个导入

const HolidayCountdown = () => {
  const [upcomingHoliday, setUpcomingHoliday] = useState(null);
  // const [showConfetti, setShowConfetti] = useState(false); // 不再需要这个状态
  const [holidayStyle, setHolidayStyle] = useState({});
  const YEAR = new Date().getFullYear();
  const COUNTRY_CODE = 'US';

  useEffect(() => {
    fetch(`https://date.nager.at/Api/v2/PublicHolidays/${YEAR}/${COUNTRY_CODE}`)
      .then(response => response.json())
      .then(data => {
        const futureHolidays = data.filter(holiday => new Date(holiday.date) > new Date())
                                    .sort((a, b) => new Date(a.date) - new Date(b.date));
        if (futureHolidays.length > 0) {
          setUpcomingHoliday(futureHolidays[0]);
          setHolidayStyle(getHolidayStyle(futureHolidays[0].localName));
          // setShowConfetti(true); // 不再触发动态效果
          // setTimeout(() => setShowConfetti(false), 10000); // 因此，这行也不再需要
        }
      })
      .catch(error => console.error('Error fetching holiday data:', error));
  }, [YEAR, COUNTRY_CODE]);

  const getHolidayStyle = (holidayName) => {
    switch (holidayName) {
      case 'Christmas Day':
        return { backgroundColor: 'red', color: 'white' };
      // Add more cases for other holidays
      default:
        return {}; // Default style
    }
  };

  return (
    <div className="holiday-countdown">
      {/* {showConfetti && <Confetti />} */} {/* 注释掉或删除这一行来去除动态效果 */}
      {upcomingHoliday ? (
        <div>
          <h2>Next Holiday</h2>
          <h3>{upcomingHoliday.localName}</h3>
          <h2>Countdown</h2>
          <h3>{upcomingHoliday.date}</h3>
          <Countdown targetDate={upcomingHoliday.date} />
        </div>
      ) : (
        <div>Loading holidays...</div>
      )}
    </div>
  );
}

export default HolidayCountdown;
