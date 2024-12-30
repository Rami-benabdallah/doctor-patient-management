import React from 'react';

export const DocAppointmentsCalendarSlotsInfo = ({ modal, closeModal, modalRef }) => {
    return (
        <>
            {modal.isVisible && (
                <div
                    ref={modalRef}
                    className="bg-white rounded-lg p-6 w-96 min-h-96 transform transition-transform duration-300 ease-in-out flex flex-col justify-between"
                    style={{
                        position: 'absolute',
                        top: modal.position.top,
                        left: modal.position.left,
                        zIndex: 100,
                    }}
                >
                    <div>{modal.details}</div>
                    <button
                        className="mt-2 text-sm text-blue-500 underline"
                        onClick={closeModal}
                    >
                        Close
                    </button>
                </div>
            )}
        </>
    );
};
