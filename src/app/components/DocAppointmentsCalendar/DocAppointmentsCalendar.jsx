import React, { useState } from 'react';
import { format, startOfWeek, addDays, addWeeks, subWeeks, getHours } from "date-fns";

import { DocAppointmentsCalendarHeader } from './DocAppointmentsCalendarHeader/DocAppointmentsCalendarHeader';
import { DocAppointmentsCalendarTimeColumn } from './DocAppointmentsCalendarTimeColumn/DocAppointmentsCalendarTimeColumn';
import { DocAppointmentsCalendarSlots } from './DocAppointmentsCalendarSlots/DocAppointmentsCalendarSlots';

export const DocAppointmentsCalendar = ({ }) => {
    const [currentWeek, setCurrentWeek] = useState(new Date());

    const startDate = startOfWeek(currentWeek, { weekStartsOn: 1 });
    const hours = Array.from({ length: 12 }, (_, i) => 8 + i);
    const days = Array.from({ length: 7 }, (_, i) => addDays(startDate, i));

    const appointments = [
        { date: "2024-12-30", time: "10:00", endTime: "12:00", details: "Meeting with Dr. Smith" },
        { date: "2024-12-31", time: "15:00", endTime: "16:30", details: "Follow-up with patient John" },
    ];

    const handleNextWeek = () => setCurrentWeek(addWeeks(currentWeek, 1));
    const handlePrevWeek = () => setCurrentWeek(subWeeks(currentWeek, 1));

    const getAppointmentsForSlot = (day, hour) => {
        return appointments.filter((appt) => {
            const apptDate = new Date(appt.date);
            const apptHour = getHours(new Date(`${appt.date}T${appt.time}`));
            return format(apptDate, "yyyy-MM-dd") === format(day, "yyyy-MM-dd") && apptHour === hour;
        });
    };
    return (
        <div className="h-full flex flex-col">
            {/* Header */}
            <DocAppointmentsCalendarHeader handleNextWeek={handleNextWeek} handlePrevWeek={handlePrevWeek} startDate={startDate}  />

            {/* Calendar Grid */}
            <div className="flex-1 grid grid-cols-8 border-t">
                {/* Time Column */}
                <DocAppointmentsCalendarTimeColumn hours={hours} />

                {/* Days Columns */}
                {days.map((day, dayIndex) => (
                    <DocAppointmentsCalendarSlots day={day} hours={hours} dayIndex={dayIndex} key={dayIndex} getAppointmentsForSlot={getAppointmentsForSlot}  />
                ))}
            </div>
        </div>
    );
};

