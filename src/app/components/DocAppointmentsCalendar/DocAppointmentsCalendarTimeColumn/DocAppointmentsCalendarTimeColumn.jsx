import React from 'react';

export const DocAppointmentsCalendarTimeColumn = ({ hours }) => {
    return (
        <div className="col-span-1 border-r bg-gray-200">
            {/* Empty space for alignment with day headers */}
            <div className="h-12 bg-gray-300"></div>
            {hours.map((hour) => (
                <div key={hour} className="h-24  flex items-center justify-center border-b">
                    {hour}:00
                </div>
            ))}
        </div>
    );
};
