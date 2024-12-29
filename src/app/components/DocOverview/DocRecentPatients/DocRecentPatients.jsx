import React from 'react';

import { DocButton } from '../../DocButton/DocButton';
import { DocTable } from '../../DocTable/DocTable';

import DocChevron from '@/app/assets/icons/DocChevron';

export const DocRecentPatients = ({ data, columns }) => {
    return (
        <div>
            <div className="w-full flex items-center justify-between mb-3">
                <h1>
                    Recent Appointements
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
            <div>
                <DocTable data={data} columns={columns} />
            </div>
        </div>
    );
};

DocRecentPatients.propTypes = {
};

DocRecentPatients.defaultProps = {
};