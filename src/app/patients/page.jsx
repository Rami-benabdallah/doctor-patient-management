import React from 'react';

import { DocButton } from '../components/DocButton/DocButton';
import { DocTable } from '../components/DocTable/DocTable';

import DocPlus from '../assets/icons/DocPlus';

import { mockPatientsColumns } from '../utils/MockData';
import { mockPatients } from '../utils/MockData';

const PatientsPage = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl">
                    My Patients
                </h1>
                <DocButton
                    mode="main"
                    label="Add new patient"
                    icon={DocPlus}
                    hasLeftIcon={true}
                    padding="py-2 px-4"
                    type="button"
                    rounded="rounded-md"
                    size="h-6 w-6"
                />
            </div>
            <div>
                <DocTable data={mockPatients} columns={mockPatientsColumns} rowsPerPage={10} showButtons={true} showFilter={true} />
            </div>

        </div>
    );
};

export default PatientsPage;
