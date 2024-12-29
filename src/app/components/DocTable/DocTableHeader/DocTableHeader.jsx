"use client"
import React from 'react';

export const DocTableHeader = ({ columns, handleSort, sortColumn, sortOrder }) => {
    return (
        <tr>
            {columns.map((column) => (
                <th
                    key={column.key}
                    className="px-4 py-2 text-left cursor-pointer bg-gray-300 "
                    onClick={() => handleSort(column.key)}
                >
                    {column.label}
                    {sortColumn === column.key && (
                        <span className="ml-2">
                            {sortOrder === "asc" ? "▲" : "▼"}
                        </span>
                    )}
                </th>
            ))}
        </tr>
    );
};