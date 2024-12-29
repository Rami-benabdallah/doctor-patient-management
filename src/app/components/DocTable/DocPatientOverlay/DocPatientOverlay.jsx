import React from 'react';

import { DocPatientInfo } from './DocPatientInfo/DocPatientInfo';
import { DocPatientSecondaryInfo } from './DocPatientSecondaryInfo/DocPatientSecondaryInfo';
import { DocPatientVisitSteps } from './DocPatientVisitSteps/DocPatientVisitSteps';

export const DocPatientOverlay = ({ isModalOpen, handleCloseModal, selectedPatient }) => {
    return (
        <div>
            <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                onClick={handleCloseModal}
            ></div>
            <div className={`fixed right-0 top-0 h-full w-1/3 bg-white shadow-lg z-50 p-6 overflow-y-auto transition-transform transform ${isModalOpen ? "translate-x-0" : "translate-x-full"
                }`}>
                <div className='flex flex-col gap-10'>
                    <h1 className="text-2xl">
                        Overview
                    </h1>
                    <DocPatientInfo selectedPatient={selectedPatient} />
                    <DocPatientSecondaryInfo selectedPatient={selectedPatient} />
                    <h1 className="text-2xl">
                        History
                    </h1>
                    <DocPatientVisitSteps selectedPatient={selectedPatient} />
                    <h1 className="text-2xl">
                        Additional Notes
                    </h1>
                </div>
            </div>
        </div>
    );
};

