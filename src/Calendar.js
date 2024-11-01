// src/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'; // Custom styles for the calendar

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
    console.log(date); // Log selected date
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 p-8">
      <h1 className="text-6xl font-bold text-white mb-6 shadow-lg">
        My Calendar
      </h1>
      <div className="bg-white rounded-2xl shadow-xl p-6 transition-transform transform hover:scale-105 duration-300">
        <Calendar
          onChange={onChange}
          value={date}
          className="rounded-lg"
        />
      </div>
      <p className="mt-4 text-xl text-white font-semibold">
        Selected Date: <span className="font-bold text-yellow-300">{date.toDateString()}</span>
      </p>
    </div>
  );
};

export default MyCalendar;
