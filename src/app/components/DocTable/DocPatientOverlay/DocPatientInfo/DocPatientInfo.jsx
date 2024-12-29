import React from 'react';

import { DocButton } from '@/app/components/DocButton/DocButton';
import { DocAvatar } from '@/app/components/DocAvatar/DocAvatar';

import DocEdit from '@/app/assets/icons/DocEdit';
import DocDelete from '@/app/assets/icons/DocDelete';

export const DocPatientInfo = ({ selectedPatient }) => {

    return (
        <div className='flex justify-between items-center border border-gray-300 rounded-md p-4'>
            <div className='flex items-center gap-4'>
                <DocAvatar
                    src={selectedPatient.avatar}
                    alt={selectedPatient.name}
                    size="h-24 w-24"
                />
                <div className='flex flex-col gap-2'>
                    <span className='text-2xl'>
                        {selectedPatient.patientName}
                    </span>
                    <span>
                        {selectedPatient.gender}, {selectedPatient.age}, {selectedPatient.phoneNumber}
                    </span>
                    <span>
                        {selectedPatient.adresse}
                    </span>
                    <span>
                        {selectedPatient.email}
                    </span>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <DocButton
                    mode="main"
                    label="Edit"
                    icon={DocEdit}
                    hasLeftIcon={true}
                    padding="py-2 px-4"
                    type="button"
                    rounded="rounded-md"
                    size="h-6 w-6"
                />
                <DocButton
                    mode="error"
                    label="Delete"
                    icon={DocDelete}
                    hasLeftIcon={true}
                    padding="py-2 px-4"
                    type="button"
                    rounded="rounded-md"
                    size="h-6 w-6"
                />
            </div>
        </div>
    );
};
