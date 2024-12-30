"use client"
import React from 'react';
import { useModal } from '@/app/hooks/useModal';

import { DocButton } from '../components/DocButton/DocButton';
import { DocAppointmentsCalendar } from '../components/DocAppointmentsCalendar/DocAppointmentsCalendar';
import { DocModal } from '../components/DocModal/DocModal';

import DocPlus from '../assets/icons/DocPlus';

const AppointmentsPage = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

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
                xxxx
            </DocModal>
        </div>
    );
};

export default AppointmentsPage;
