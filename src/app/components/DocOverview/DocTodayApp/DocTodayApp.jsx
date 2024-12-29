import React from 'react';

import { DocButton } from '../../DocButton/DocButton';
import { DocCard } from '../../DocCard/DocCard';
import DocChevron from '@/app/assets/icons/DocChevron';
import { DocTodayAppUser } from '../DocTodayAppUser/DocTodayAppUser';

export const DocTodayApp = ({ appointements }) => {
    return (
        <div>
            <div className="w-full flex items-center justify-between mb-3">
                <h1>
                    Today's Appointements
                </h1>
                <div>
                    <DocButton
                        mode="transparent"
                        label="View All"
                        icon={DocChevron}
                        hasRightIcon={true}
                        padding="py-2 px-4"
                        type="button"
                        rounded="rounded-md"
                        size="h-6 w-6"
                    />
                </div>
            </div>
            <DocCard extaClass="flex flex-col bg-light gap-4" width="min-w-60 max-h-[600px] overflow-y-auto" height="min-h-40" padding="px-4 py-4" rounded="rounded-2xl">
                {appointements.map((appointement, index) => (
                    <DocTodayAppUser appointement={appointement} index={index} key={index} />
                ))}
            </DocCard>
        </div>
    );
};

DocTodayApp.propTypes = {
};

DocTodayApp.defaultProps = {
};