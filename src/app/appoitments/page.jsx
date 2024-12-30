"use client"
import React from 'react';
import { useModal } from '@/app/hooks/useModal';

import { DocButton } from '../components/DocButton/DocButton';
import { DocAppointmentsCalendar } from '../components/DocAppointmentsCalendar/DocAppointmentsCalendar';
import { DocModal } from '../components/DocModal/DocModal';
import { DocForm } from '../components/DocForm/DocForm';

import DocPlus from '../assets/icons/DocPlus';

const dailyAddTaskFields = [
    {
        type: 'text',
        id: 'task-title',
        name: 'task-title',
        label: 'Title',
        placeholder: 'Enter the title',
        validation: {
            required: true,
            minLength: 3,
            maxLength: 50,
        },
    },
    {
        type: 'text',
        id: 'task-description',
        name: 'task-description',
        label: 'Description',
        placeholder: 'Enter the description',
        validation: {
            required: true,
        },
    },
    {
        type: 'labels',
        id: 'task-labels',
        name: 'task-labels',
        label: 'Labels',
        placeholder: 'Enter the labels',
        validation: {
            required: true,
            minValues: 2,
        },

    },
];


const AppointmentsPage = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

    const handleFormSubmit = (data) => {
        console.log('Form Submitted', data);
    };

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
                    onClick={() => openModal('add-new-appointment')}
                />
            </div>
            <DocAppointmentsCalendar />
            <DocModal
                name="add-new-appointment"
                title="Add New Appointment"
                isOpen={isModalOpen('add-new-appointment')}
                closeModal={() => closeModal('add-new-appointment')}
                showMainButton={false}
                mainButtonLabel='Save'
                showSecondaryButton={false}
                secondaryButtonLabel='Cancel'
            >
                <DocForm fields={dailyAddTaskFields} onSubmit={handleFormSubmit} onCancel={() => closeModal('add-new-appointment')} />
            </DocModal>
        </div>
    );
};

export default AppointmentsPage;
