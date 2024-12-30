"use client"
import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';

import { DocAppointmentsCalendarSlotsInfo } from './DocAppointmentsCalendarSlotsInfo/DocAppointmentsCalendarSlotsInfo';

export const DocAppointmentsCalendarSlots = ({ day, hours, dayIndex, getAppointmentsForSlot, }) => {
    const [modal, setModal] = useState({ isVisible: false, details: null, position: { top: 0, left: 0 } });
    const modalRef = useRef(null);

    const handleAppointmentClick = (e, details) => {
        const rect = e.target.getBoundingClientRect();
        setModal({
            isVisible: true,
            details,
            position: {
                top: rect.top + window.scrollY + rect.height / 2,
                left: rect.left + window.scrollX + rect.width + 10,
            },
        });
    };

    const closeModal = () => {
        setModal({ isVisible: false, details: null, position: { top: 0, left: 0 } });
    };

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            closeModal();
        }
    };

    useEffect(() => {
        if (modal.isVisible) {
            document.addEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [modal.isVisible]);

    return (
        <div key={dayIndex} className="col-span-1 border-r">
            {/* Day Header */}
            <div className="h-12 flex items-center justify-center bg-gray-200 font-bold border-b">
                {format(day, "EEE")}
            </div>

            {/* Hourly Slots */}
            {hours.map((hour) => (
                <div key={hour} className="border-b relative h-20">
                    {/* Appointments */}
                    {getAppointmentsForSlot(day, hour).map((appt, apptIndex) => {
                        // Calculate the duration and style accordingly
                        const startTime = new Date(`${appt.date}T${appt.time}`);
                        const endTime = new Date(`${appt.date}T${appt.endTime || appt.time}`);
                        const durationHours = (endTime - startTime) / (1000 * 60 * 60);

                        return (
                            <div
                                key={apptIndex}
                                className="absolute inset-x-1 bg-purpleMedium rounded text-purpleInfo p-2 cursor-pointer"
                                style={{
                                    height: `${durationHours * 5}rem`, // Adjust height based on duration
                                    top: `${(startTime.getMinutes() / 60) * 5}rem`, // Adjust start position for minutes
                                    zIndex: 10 + apptIndex, // Ensure stacking order for overlapping appointments
                                }}
                                onClick={(e) => handleAppointmentClick(e, appt.details)}
                            >
                                {appt.details}
                            </div>
                        );
                    })}
                </div>
            ))}

            <DocAppointmentsCalendarSlotsInfo modal={modal} closeModal={closeModal} modalRef={modalRef} />
        </div>
    );
};
