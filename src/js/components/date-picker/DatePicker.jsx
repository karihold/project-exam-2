import React, { useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import dayjs from 'dayjs';

const DatePicker = ({ name, register, divider = 'arrow' }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dates, setDates] = useState({ from: dayjs().$d, to: dayjs().add(1, 'day').$d });

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  const onDayClick = (date) => {
    const datesRange = DateUtils.addDayToRange(date, dates);
    setDates(datesRange);
  };

  return (
    <div className="date-picker">
      <button className="date-picker__button" name={name} type="button" onClick={toggleCalendar} value={JSON.stringify(dates)} ref={register}>
        <time className="date-picker__date-label" dateTime={dayjs(dates.from).format('YYYY-MM-DD')}>
          {dayjs(dates.from).format('DD/MM/YYYY')}
        </time>
        <span className="date-picker__divider"></span>
        <time className="date-picker__date-label" dateTime={dayjs(dates.to).format('YYYY-MM-DD')}>
          {dayjs(dates.to).format('DD/MM/YYYY')}
        </time>
      </button>
      {showCalendar && (
        <DayPicker
          fromMonth={dates.from}
          firstDayOfWeek={1}
          selectedDays={[dates.to, dates.from]}
          onDayClick={onDayClick}
          numberOfMonths={2}
          disabledDays={{ before: new Date() }}
        />
      )}
    </div>
  );
};

export default DatePicker;
