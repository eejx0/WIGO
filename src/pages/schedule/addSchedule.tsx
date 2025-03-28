import { Header } from "../../components/header"
import styled from "styled-components"
import { Color } from "../../styles/color"
import Line from "../../assets/line.svg";
import { useState, useEffect } from "react";
import { WaitingScheduleCard } from "../../components/schedule/waitingScheduleCard";
import PlusIcon from "../../assets/whitePlus.svg";
import React from "react";
import { SideBar } from "../../components/schedule/sideBar";


interface Schedule {
    id: number;
    date: string;
    items: { id: number; text: string }[];
}

export const AddSchedule = () => {
    const [arriveDate, setArriveDate] = useState("");
    const [departDate, setDepartDate] = useState("");

    const generateDateRange = (startDate: string, endDate: string) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const dateArray = [];
    
        while (start <= end) {
            dateArray.push({ id: dateArray.length + 1, date: start.toISOString(), items: [{ id: 1, text: "" }] });
            start.setDate(start.getDate() + 1);
        }
    
        return dateArray;
    };

    const [schedules, setSchedules] = useState<Schedule[]>([]);

    const addScheduleItem = (date: string) => {
        setSchedules((prevSchedules) =>
            prevSchedules.map((schedule) =>
                schedule.date === date
                ? {
                    ...schedule,
                    items: [
                        ...schedule.items,
                        { id: schedule.items.length + 1, text: "" },
                    ],
                    }
                : schedule
            )
        );
    };
    
    const handleInputChange = (date: string, id: number, value: string) => {
        setSchedules((prevSchedules) =>
          prevSchedules.map((schedule) =>
            schedule.date === date
              ? {
                  ...schedule,
                  items: schedule.items.map((item) =>
                    item.id === id ? { ...item, text: value } : item
                  ),
                }
              : schedule
          )
        );
    };

    const handleDate = (e: any, setDate: React.Dispatch<React.SetStateAction<string>>) => {
        let value = e.target.value || ""; 
        value = value.replace(/\D/g, "");

        let formattedDate = value;
        if (value.length > 4) {
            formattedDate = `${value.slice(0, 4)}년 ${value.slice(4)}`;
        }
        if (value.length > 6) {
            formattedDate = `${value.slice(0, 4)}년 ${value.slice(4, 6)}월 ${value.slice(6)}일`;
        }
        setDate(formattedDate)
    }

    useEffect(() => {
        if (arriveDate && departDate) {
            const formatDate = (date: string) => {
                const regex = /(\d{4})년 (\d{2})월 (\d{2})일/;
                const match = date.match(regex);
            
                if (match) {
                    const [, year, month, day] = match;
                    return `${year}-${month}-${day}`;
                }
                return '';
            };
            
            const startDate = formatDate(departDate);  
            const endDate = formatDate(arriveDate);   
    
            const generatedSchedules = generateDateRange(startDate, endDate);
            setSchedules(generatedSchedules); 
        }
    }, [arriveDate, departDate]);
    

    const isDatesEntered = departDate && arriveDate;

    return (
        <>
            <Header />
            <Wrapper>
                <LeftWrapper>
                    <InputWrapper>
                        <TextWrapper>
                            <h1>우리</h1>
                            <h1 style={{color: '#66D6FF'}}>여행은</h1>
                        </TextWrapper>
                        <TitleInput type="text" placeholder="여행 제목을 작성해주세요"/>
                    </InputWrapper>
                    <InputWrapper>
                        <TextWrapper>
                            <h1>우리</h1>
                            <h1 style={{color: '#66D6FF'}}>여행 기간은</h1>
                        </TextWrapper>
                        <DateInputWrapper>
                            <input value={departDate} onChange={(e) => handleDate(e, setDepartDate)} maxLength={13} type="" placeholder="여행 출발 날짜"/>
                            <img src={Line} alt="-" />
                            <input value={arriveDate} onChange={(e) => handleDate(e, setArriveDate)} maxLength={13} type="" placeholder="여행 도착 날짜"/>
                        </DateInputWrapper>
                    </InputWrapper>
                    <InputWrapper>
                        <TextWrapper>
                            <h1>우리</h1>
                            <h1 style={{color: '#66D6FF'}}>여행 일정은</h1>
                        </TextWrapper>
                        {isDatesEntered ? (
                            <ScheduleCard>
                                <table>
                                    <tbody>
                                        {schedules.map((schedule) => (
                                            <tr key={schedule.id}>
                                                <td className="date">
                                                    <span>{new Date(schedule.date).toLocaleDateString('ko-KR')}</span>
                                                </td>
                                                <td className="inputs">
                                                    {schedule.items.map((item, index) => (
                                                        <div key={item.id} className="input-container">
                                                            <input
                                                                type="text"
                                                                value={item.text}
                                                                onChange={(e) =>
                                                                    handleInputChange(schedule.date, item.id, e.target.value)
                                                                }
                                                                placeholder="일정을 작성해주세요"
                                                            />
                                                            {index === schedule.items.length - 1 && (
                                                                <div className="add-button" onClick={() => addScheduleItem(schedule.date)}>
                                                                    <img src={PlusIcon} alt="+" />
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </ScheduleCard>
                        ) : (
                            <WaitingScheduleCard />
                        )}
                    </InputWrapper>
                </LeftWrapper>
                <SideBarWrapper>
                    <SideBar />
                </SideBarWrapper>
            </Wrapper>
        </>
    )
}

const ScheduleCard = styled.div`
    width: 100%;
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.09);
    border: 1px solid rgba(0, 0, 0, 0.09);
    border-radius: 20px;
    padding: 20px;
    gap: 15px;
    display: block;

    table {
        width: 100%;
        border-collapse: collapse;
    }

    td {
        text-align: left;
        margin-top: 15px;
    }

    .date {
        font-size: 18px;
        font-weight: 600;
        width: 160px; 
        padding-right: 10px;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .input-container {
        display: flex;
        gap: 10px;
    }

    input {
        width: 100%;
        max-width: 400px; 
        height: 45px;      
        padding-left: 15px;
        padding-right: 15px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 50px;
        font-size: 15px;
        
        &:focus {
            border-color: ${Color.main};
            outline: none;
        }

        &::placeholder {
            color: rgba(0, 0, 0, 0.3);
        }
    }

    .add-button {
        min-height: 45px;
        min-width: 45px;
        background-color: ${Color.main};
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);

        &:hover {
            transform: scale(1.10);
            background-color: ${Color.darkBlue};
        }
    }
`;

const Wrapper = styled.div`
    display: flex;
    padding-left: 150px;
    padding-right: 150px;
    margin-top: 100px;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const LeftWrapper = styled.div`
    display: flex;
    width: 70%;
    flex-direction: column;
    gap: 50px;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const TitleInput = styled.input`
    width: 350px;
    height: 40px;
    font-size: 15px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.2);
    &:focus {
        border-color: ${Color.main};
        outline: none;
    }
    &::placeholder {
        color: rgba(0,0,0,0.3);
    }
`;

const DateInputWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    > input {
        height: 40px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 15px;
        border: none;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 5px;
        &:focus {
            border-color: ${Color.main};
            outline: none;
        }
        &::placeholder {
            color: rgba(0,0,0,0.3);
        }
    }
`;

const TextWrapper = styled.div`
    display: flex;
    gap: 7px;
    > h1 {
        font-size: 25px;
        font-weight: 700;
    }
`;

const SideBarWrapper = styled.div`
    width: 21%;
    position: fixed;
    top: 100px;
    right: 150px;
`;