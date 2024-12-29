import React from 'react';

import { DocCard } from '../DocCard/DocCard';
import { DocIconButton } from '../DocIconButton/DocIconButton';

import DocCalendar from '@/app/assets/icons/DocCalendar';

export const DocInformationCard = ({ information}) => {
    return (
        <DocCard extaClass="flex items-center justify-center" width="min-w-60" height="min-h-40" background={information.mode} padding="px-2 py-4" rounded="rounded-2xl">
            <div className="h-full w-full flex items-center justify-center gap-4 text-light">
                <div>
                    <DocIconButton
                        mode="blurry"
                        icon={DocCalendar}
                        rounded="rounded-full"
                        size="w-8 h-8"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold">{information.number}</h1>
                    <span className="text-sm">{information.title}</span>
                </div>
            </div>
        </DocCard>
    );
};

DocInformationCard.propTypes = {

};

DocInformationCard.defaultProps = {

};