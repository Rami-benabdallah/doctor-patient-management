import React from 'react';

export const DocPatientVisitSteps = ({ selectedPatient }) => {
    return (
        <div>
            {selectedPatient.visits
                .slice()
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((visit, index) => (
                    <div key={visit.visitId} className="flex">
                        <div className="mr-4 flex flex-col items-center">
                            <span className="flex h-10 w-10 p-3 items-center justify-center rounded-full border-2 border-blue-900">
                                {selectedPatient.visits.length - index}
                            </span>
                            {index < selectedPatient.visits.length - 1 && (
                                <div className="h-full w-px bg-gray-300"></div>
                            )}
                        </div>

                        <div className="pt-1 pb-8">
                            <span className="mb-2 text-xl font-bold">
                                {new Date(visit.date).toLocaleDateString()}
                            </span>
                            <p className="text-gray-600">{visit.note}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};
