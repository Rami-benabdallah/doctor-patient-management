import React from 'react';
import { format, addDays } from 'date-fns';

import { DocButton } from '../../DocButton/DocButton';

export const DocAppointmentsCalendarHeader = ({ handlePrevWeek, handleNextWeek, startDate }) => {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className="flex items-center gap-10 mb-10">
                <DocButton
                    mode="main"
                    label="Previous Week"
                    padding="py-2 px-4"
                    type="button"
                    rounded="rounded-md"
                    size="h-6 w-6"
                    onClick={handlePrevWeek}
                />
                <h2 className="text-xl font-bold">
                    {format(startDate, "MMM dd")} - {format(addDays(startDate, 6), "MMM dd")}
                </h2>
                <DocButton
                    mode="main"
                    label="Next Week"
                    padding="py-2 px-4"
                    type="button"
                    rounded="rounded-md"
                    size="h-6 w-6"
                    onClick={handleNextWeek}
                />
            </div>
        </div>
    );
};
