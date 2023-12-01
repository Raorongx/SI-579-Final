// HolidayReminder.js
import React, { useState, useEffect } from 'react';

const HolidayReminder = () => {
  const [nearestHoliday, setNearestHoliday] = useState(null);
  const YEAR = new Date().getFullYear(); // 获取当前年份
  const COUNTRY_CODE = 'US'; // 美国的国家代码

  useEffect(() => {
    fetch(`https://date.nager.at/Api/v2/PublicHolidays/${YEAR}/${COUNTRY_CODE}`)
      .then(response => response.json())
      .then(data => {
        // 假设返回的数据已经按日期排序
        const today = new Date();
        const upcomingHolidays = data.filter(holiday => new Date(holiday.date) >= today);
        setNearestHoliday(upcomingHolidays[0]); // 设置最近的节日
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [YEAR, COUNTRY_CODE]);

  return (
    <div className="holiday-reminder">
      {nearestHoliday && (
        <div>
          <div>下一个节日：{nearestHoliday.localName} - {nearestHoliday.date}</div>
          {/* 在这里添加倒计时逻辑 */}
        </div>
      )}
    </div>
  );
};

export default HolidayReminder;

