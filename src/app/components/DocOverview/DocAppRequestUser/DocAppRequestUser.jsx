import React from 'react';

import { DocAvatar } from '../../DocAvatar/DocAvatar';
import { DocBadge } from '../../DocBadge/DocBadge';
import { DocIconButton } from '../../DocIconButton/DocIconButton';

import DocClose from '@/app/assets/icons/DocClose';
import DocCheckNoBg from '@/app/assets/icons/DocCheckNoBg';

export const DocAppRequestUser = ({ appointement, index }) => {
    const isDone = appointement.request.status === 'Declined' || appointement.request.status === 'Accepted'
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
                        {appointement.age} , {appointement.request.reqTime}
                    </span>
                </div>
            </div>
            {isDone ? (
                <DocBadge
                    label={appointement.request.status}
                    bg={appointement.request.status === 'Declined' ? 'bg-redlight' : 'bg-blueLight'}
                    badgeColor={appointement.request.status === 'Declined' ? 'text-redInfo' : 'text-blueInfo'}
                    rounded="rounded-md"
                    padding="px-4 py-1"
                />
            ) : (
                <div className="flex items-center gap-3">
                    <DocIconButton
                        mode="error"
                        icon={DocClose}
                        rounded="rounded-md"
                        customPadding="p-1"
                        customWidth="w-fit"
                        size="w-5 h-5"
                    />
                    <DocIconButton
                        mode="main"
                        icon={DocCheckNoBg}
                        rounded="rounded-md"
                        customPadding="p-1"
                        customWidth="w-fit"
                        size="w-5 h-5"
                    />
                </div>
            )}

        </div>
    );
};

DocAppRequestUser.propTypes = {
};

DocAppRequestUser.defaultProps = {
};