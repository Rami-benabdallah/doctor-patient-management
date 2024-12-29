"use client"
import React, { useState } from 'react';

import { DocTableRow } from './DocTableRow/DocTableRow';
import { DocTableHeader } from './DocTableHeader/DocTableHeader';
import { DocPatientOverlay } from './DocPatientOverlay/DocPatientOverlay';

export const DocTable = ({ data, columns, rowsPerPage = 5, showButtons, showFilter }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");
    const [filterText, setFilterText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
        } else {
            setSortColumn(column);
            setSortOrder("asc");
        }
    };

    const filteredData = data.filter((row) =>
        columns.some((column) =>
            String(row[column.key] || "")
                .toLowerCase()
                .includes(filterText.toLowerCase())
        )
    );

    const sortedData = filteredData.sort((a, b) => {
        if (!sortColumn) return 0;

        const aValue = a[sortColumn];
        const bValue = b[sortColumn];

        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    const paginatedData = sortedData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handleOpenPatient = (patient) => {
        setSelectedPatient(patient);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedPatient(null);
    };

    return (
        <div className="p-4">
            {showFilter && (
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Filter table..."
                        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={filterText}
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                </div>
            )}
            <table className="min-w-full border-collapse">
                <thead>
                    <DocTableHeader columns={columns} handleSort={handleSort} sortColumn={sortColumn} sortOrder={sortOrder} />
                </thead>
                <tbody>
                    {paginatedData.map((row, index) => (
                        <DocTableRow row={row} columns={columns} index={index} key={index} handleOpenPatient={handleOpenPatient} />
                    ))}
                </tbody>
            </table>
            {showButtons && (
                <div className="flex justify-between items-center mt-4">
                    <button
                        className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        className="px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </div>
            )}
            {isModalOpen && (
                <DocPatientOverlay isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} selectedPatient={selectedPatient} />
            )}
        </div>
    );
};

DocTable.propTypes = {
};

DocTable.defaultProps = {
};