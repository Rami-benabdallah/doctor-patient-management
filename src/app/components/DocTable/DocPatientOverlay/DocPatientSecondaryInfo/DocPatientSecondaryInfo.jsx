import React from 'react';

export const DocPatientSecondaryInfo = ({ selectedPatient }) => {
    return (
        <div className='grid grid-cols-4  border border-gray-300 rounded-md p-4'>
            <div className='flex flex-col justify-center items-center'>
                <span className='text-xl'>
                    {selectedPatient.weight}
                </span>
                <span className='text-gray-500'>
                    Weight
                </span>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='text-xl'>
                    {selectedPatient.height}
                </span>
                <span className='text-gray-500'>
                    Height
                </span>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='text-xl'>
                    {selectedPatient.bloodPressure}
                </span>
                <span className='text-gray-500'>
                    Blood pressure
                </span>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <span className='text-xl'>
                    {selectedPatient.smoking}
                </span>
                <span className='text-gray-500'>
                    Cigarettes
                </span>
            </div>
        </div>
    );
};
