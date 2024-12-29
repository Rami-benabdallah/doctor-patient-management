import React from 'react';

import { DocAvatar } from '../../DocAvatar/DocAvatar';
import { DocBadge } from '../../DocBadge/DocBadge';

export const DocTodayAppUser = ({ appointement, index }) => {
    const getAppointmentStatus = (appTime) => {
        const [hours, minutes] = appTime.split(':').map(Number);
        const appointmentDate = new Date();
        appointmentDate.setHours(hours, minutes, 0, 0);

        const currentDate = new Date();

        const halfHourLater = new Date(appointmentDate);
        halfHourLater.setMinutes(appointmentDate.getMinutes() + 30);

        const oneHourLater = new Date(appointmentDate);
        oneHourLater.setHours(appointmentDate.getHours() + 1);

        if (currentDate >= oneHourLater) {
            return 'Done';
        } else if (currentDate >= appointmentDate && currentDate < oneHourLater) {
            return 'Ongoing';
        } else {
            return appTime;
        }
    };

    const appointmentStatus = getAppointmentStatus(appointement.appointement.appTime);

    return (
        <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-8">
                <DocAvatar
                    src={appointement.avatar}
                    alt={appointement.name}
                    size="h-16 w-16"
                />
                <div className="flex flex-col">
                    <span className="text-lg">
                        {appointement.name}
                    </span>
                    <span>
                        {appointement.reason}
                    </span>
                </div>
            </div>
            {appointmentStatus === appointement.appointement.appTime ? (
                <span>
                    {appointement.appointement.appTime}
                </span>
            ) : (
                <DocBadge
                    label={appointmentStatus}
                    bg={appointmentStatus === 'Ongoing' ? 'bg-yellowLight' : 'bg-purpleLight'}
                    badgeColor={appointmentStatus === 'Ongoing' ? 'text-yellowInfo' : 'text-purpleInfo'}
                    rounded="rounded-md"
                    padding="px-4 py-1"
                />
            )}
        </div>
    );
};

DocTodayAppUser.propTypes = {
};

DocTodayAppUser.defaultProps = {
};