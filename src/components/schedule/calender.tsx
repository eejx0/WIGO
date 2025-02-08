import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import { Color } from '../../styles/color';

const highlightedDates = [
    new Date(2025, 1, 9), // 2월 7일 (월은 0이 1임)
    new Date(2025, 1, 10), 
    new Date(2025, 1, 11), 
    new Date(2025, 1, 12),
];

const StyledCalendar = styled(Calendar)`
  font-size: 20px;
  width: 100%;
  border: none;
  height: 100% !important;
  overflow: hidden ;
  max-height: 500px;
  font-family: pretendard;

  .highlight {
    background-color: ${Color.lightBlue} !important;
    color: black !important;
    min-height: 30px !important;
  }

  .highlight.start {
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
  }

  .highlight.end {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  }

  .react-calendar__viewContainer {
    height: 100% !important;
  }

  .react-calendar__month-view__days__day--weekend {
    color: black;
  }

  .react-calendar__navigation {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 220px;
    padding-right: 220px;

    .react-calendar__navigation__label {
      background-color: transparent !important;
      font-size: 26px;
      font-weight: 700;
      text-align: center;
      font-family: pretendard;
      flex-grow: 0.2;
      opacity: 1;
    }

    .react-calendar__navigation__label:hover {
        background-color: transparent;
    }

    .react-calendar__navigation__prev-button,
    .react-calendar__navigation__next-button {
      background-color: transparent;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      font-family: pretendard;
      opacity: 1;
    }

    .react-calendar__navigation__prev-button:hover,
    .react-calendar__navigation__next-button:hover,
    .react-calendar__navigation__prev-button:focus,
    .react-calendar__navigation__next-button:focus {
      background-color: transparent;
      opacity: 1; 
    }
  }

  .react-calendar__navigation {
    margin-bottom: 52px;
  }

  .react-calendar__tile {
      padding: 0 !important;
      width: auto !important; 
      height: auto !important;
      margin-top: 45px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: pretendard !important;
  }

  .react-calendar__tile > abbr {
      pointer-events: auto;
  }

  /* 오늘 날짜 */
  .react-calendar__tile--now {
    color: ${Color.main} !important;
    background-color: transparent; 
  }

  .react-calendar__tile--active {
    background-color: transparent;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: transparent;
    font-size: 20px;
    font-weight: 500;
  }
`;

const getTileClassName = ({ date, view }: { date: Date, view: string }) => {
    if (view !== 'month') return '';
  
    const isHighlighted = highlightedDates.some((highlightedDate) =>
      date.getFullYear() === highlightedDate.getFullYear() &&
      date.getMonth() === highlightedDate.getMonth() &&
      date.getDate() === highlightedDate.getDate()
    );
  
    if (!isHighlighted) return '';
  
    const isStart = !highlightedDates.some((highlightedDate) =>
      new Date(highlightedDate).setDate(highlightedDate.getDate() + 1) === date.setDate(date.getDate())
    );
  
    const isEnd = !highlightedDates.some((highlightedDate) =>
      new Date(highlightedDate).setDate(highlightedDate.getDate() - 1) === date.setDate(date.getDate())
    );
  
    return `highlight ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''}`.trim();
  };

export const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <StyledCalendar
        value={selectedDate}
        calendarType="gregory" // 월요일 시작
        view="month"
        prev2Label={null} // 버튼 제거
        next2Label={null} 
        showNeighboringMonth={false}
        formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
        tileClassName={getTileClassName}
      />
    </div>
  );
};
