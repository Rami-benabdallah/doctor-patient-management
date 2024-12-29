"use client"
import React from 'react';

import { DocButton } from '../components/DocButton/DocButton';
import { DocAppointmentsCalendar } from '../components/DocAppointmentsCalendar/DocAppointmentsCalendar';

import DocPlus from '../assets/icons/DocPlus';

const AppointmentsPage = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl">
                    My Appointments
                </h1>
                <DocButton
                    mode="main"
                    label="Add new appointment"
                    icon={DocPlus}
                    hasLeftIcon={true}
                    padding="py-2 px-4"
                    type="button"
                    rounded="rounded-md"
                    size="h-6 w-6"
                />
            </div>
            <DocAppointmentsCalendar />
        </div>
    );
};

export default AppointmentsPage;
