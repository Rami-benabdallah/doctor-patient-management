import { fn } from '@storybook/test';

import { DocTable } from './DocTable';

const data = [
  {
    patientName: "Lila Ben Mahmoud",
    visitId: "VIS1250",
    gender: "Female",
    date: "2024-12-27",
    nextVisit: "2025-01-10",
    reason: "Acne Treatment",
    status: "Completed",
  },
  {
    patientName: "Mohamed El Ayadi",
    visitId: "VIS1251",
    gender: "Male",
    date: "2024-12-26",
    nextVisit: "2025-01-15",
    reason: "Scar Removal",
    status: "In Progress",
  },
  {
    patientName: "Khadija Ettounsi",
    visitId: "VIS1252",
    gender: "Female",
    date: "2024-12-25",
    nextVisit: "2025-01-05",
    reason: "Chemical Peel",
    status: "Cancelled",
  },
  {
    patientName: "Ahmed Essghir",
    visitId: "VIS1253",
    gender: "Male",
    date: "2024-12-24",
    nextVisit: "2025-01-12",
    reason: "Tattoo Removal",
    status: "Completed",
  },
  {
    patientName: "Asma Charef",
    visitId: "VIS1254",
    gender: "Female",
    date: "2024-12-23",
    nextVisit: "2025-01-18",
    reason: "Anti-Aging Treatment",
    status: "Pending",
  },
  {
    patientName: "Yassine Ben Ali",
    visitId: "VIS1255",
    gender: "Male",
    date: "2024-12-22",
    nextVisit: "2025-01-14",
    reason: "Microdermabrasion",
    status: "Completed",
  },
  {
    patientName: "Sofia Khemiri",
    visitId: "VIS1256",
    gender: "Female",
    date: "2024-12-21",
    nextVisit: "2025-01-20",
    reason: "Facial Treatment",
    status: "In Progress",
  },
  {
    patientName: "Ali Boussayen",
    visitId: "VIS1257",
    gender: "Male",
    date: "2024-12-20",
    nextVisit: "2025-01-25",
    reason: "Tattoo Removal",
    status: "Cancelled",
  },
];

const columns = [
  { key: "patientName", label: "Name" },
  { key: "visitId", label: "Visit Id" },
  { key: "gender", label: "Gender" },
  { key: "date", label: "Date" },
  { key: "nextVisit", label: "Next Visit" },
  { key: "reason", label: "Reason" },
  { key: "status", label: "Status" },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'doc/DocTable',
  component: DocTable,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Simple = {
  args: {
    data: data,
    columns: columns,
  },
};
