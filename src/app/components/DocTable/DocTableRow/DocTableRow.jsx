"use client"
import React from 'react';

import { DocBadge } from '../../DocBadge/DocBadge';
import { DocIconButton } from '../../DocIconButton/DocIconButton';
import DocEye from '@/app/assets/icons/DocEye';
import DocDelete from '@/app/assets/icons/DocDelete';

export const DocTableRow = ({ row, columns, index, handleOpenPatient }) => {

    const getStatusBgColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'bg-purpleLight';
            case 'Cancelled':
                return 'bg-redlight';
            case 'In Progress':
                return 'bg-yellowLight';
            default:
                return '';
        }
    };
    const getStatusTextColor = (status) => {
        switch (status) {
            case 'Completed':
                return 'text-purpleInfo';
            case 'Cancelled':
                return 'text-redInfo';
            case 'In Progress':
                return 'text-yellowInfo';
            default:
                return '';
        }
    };
    return (
        <tr key={index} className="hover:bg-gray-50 bg-light h-20 cursor-pointer">
            {columns.map((column, colIndex) => (
                <td
                    key={column.key}
                    className={`px-4 py-2 border-y-8 border-bodyBg ${colIndex === 0 ? "rounded-l-2xl" : ""
                        } ${colIndex === columns.length - 1 ? "rounded-r-2xl" : ""}`}
                >
                    {column.key === 'status' ? (
                        <DocBadge
                            label={row[column.key]}
                            bg={getStatusBgColor(row[column.key])}
                            badgeColor={getStatusTextColor(row[column.key])}
                            rounded="rounded-md"
                            padding="px-4 py-1"
                        />
                    ) : column.key === 'actions' ? (
                        <div>
                            <DocIconButton
                                mode="transparent"
                                icon={DocEye}
                                rounded="rounded-full"
                                size="w-8 h-8"
                                onClick={() => handleOpenPatient(row)} 
                            />
                            <DocIconButton
                                mode="transparent"
                                icon={DocDelete}
                                rounded="rounded-full"
                                size="w-8 h-8"
                            />
                        </div>
                    ) : (
                        row[column.key]
                    )}
                </td>
            ))}
        </tr>
    );
};