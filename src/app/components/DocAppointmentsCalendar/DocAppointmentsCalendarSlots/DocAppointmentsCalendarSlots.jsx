import React from 'react';
import { format } from 'date-fns';

export const DocAppointmentsCalendarSlots = ({ day, hours, dayIndex, getAppointmentsForSlot, }) => {
    return (
        <div key={dayIndex} className="col-span-1 border-r">
            {/* Day Header */}
            <div className="h-12 flex items-center justify-center bg-gray-200 font-bold border-b">
                {format(day, "EEE")}
            </div>

            {/* Hourly Slots */}
            {hours.map((hour) => (
                <div key={hour} className="border-b relative h-24">
                    {/* Appointments */}
                    {getAppointmentsForSlot(day, hour).map((appt, apptIndex) => {
                        // Calculate the duration and style accordingly
                        const startTime = new Date(`${appt.date}T${appt.time}`);
                        const endTime = new Date(`${appt.date}T${appt.endTime || appt.time}`);
                        const durationHours = (endTime - startTime) / (1000 * 60 * 60);

                        return (
                            <div
                                key={apptIndex}
                                className="absolute inset-x-1 bg-purpleMedium rounded text-purpleInfo p-2 cursor-pointer"
                                style={{
                                    height: `${durationHours * 5}rem`, // Adjust height based on duration
                                    top: `${(startTime.getMinutes() / 60) * 5}rem`, // Adjust start position for minutes
                                    zIndex: 10 + apptIndex, // Ensure stacking order for overlapping appointments
                                }}
                                onClick={() => console.log(`Clicked on appointment: ${appt.details}`)} // Example onClick handler
                            >
                                {appt.details}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};
