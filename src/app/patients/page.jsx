"use client"
import React from 'react';
import { useModal } from '../hooks/useModal';

import { DocButton } from '../components/DocButton/DocButton';
import { DocTable } from '../components/DocTable/DocTable';
import { DocModal } from '../components/DocModal/DocModal';
import { DocForm } from '../components/DocForm/DocForm';

import DocPlus from '../assets/icons/DocPlus';

import { mockPatientsColumns } from '../utils/MockData';
import { mockPatients } from '../utils/MockData';

const docAddPatientFields = [
    {
        type: 'text',
        id: 'patient-name',
        name: 'patient-name',
        label: 'Patient name',
        placeholder: 'Enter the Patient name',
        validation: {
            required: true,
            minLength: 3,
            maxLength: 50,
        },
    },
    {
        type: 'checkbox',
        id: 'patient-male',
        name: 'patient-male',
        label: 'Male',
        validation: {
            required: true,
        },
    },
    {
        type: 'checkbox',
        id: 'patient-female',
        name: 'patient-female',
        label: 'Female',
        validation: {
            required: true,
        },
    },
    {
        type: 'text',
        id: 'patient-age',
        name: 'patient-age',
        label: 'Patient age',
        validation: {
            required: true,
        },
    },
    {
        type: 'text',
        id: 'patient-adresse',
        name: 'patient-adresse',
        label: 'Patient adresse',
        validation: {
            required: true,
        },
    },
    {
        type: 'text',
        id: 'patient-email',
        name: 'patient-email',
        label: 'Patient email',
        validation: {
            required: true,
        },
    },
    {
        type: 'text',
        id: 'patient-phoneNumber',
        name: 'patient-phoneNumber',
        label: 'Patient phoneNumber',
        validation: {
            required: true,
        },
    },
];

const PatientsPage = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

    const handleFormSubmit = (data) => {
        console.log('Form Submitted', data);
    };

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
                    onClick={() => openModal('add-new-patient')}
                />
            </div>
            <div>
                <DocTable data={mockPatients} columns={mockPatientsColumns} rowsPerPage={10} showButtons={true} showFilter={true} />
            </div>
            <DocModal
                name="add-new-patient"
                title="Add New Patient"
                isOpen={isModalOpen('add-new-patient')}
                closeModal={() => closeModal('add-new-patient')}
                showMainButton={false}
                mainButtonLabel='Save'
                showSecondaryButton={false}
                secondaryButtonLabel='Cancel'
            >
                <DocForm fields={docAddPatientFields} onSubmit={handleFormSubmit} onCancel={() => closeModal('add-new-patient')} />
            </DocModal>
        </div>
    );
};

export default PatientsPage;
