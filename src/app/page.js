import { DocInformationCard } from "./components/DocInformationCard/DocInformationCard";
import { DocAppRequest } from "./components/DocOverview/DocAppRequest/DocAppRequest";
import { DocTodayApp } from "./components/DocOverview/DocTodayApp/DocTodayApp";
import { DocRecentPatients } from "./components/DocOverview/DocRecentPatients/DocRecentPatients";

import { mockDocInformation } from "./utils/MockData";
import { mockAppointementRequest } from '@/app/utils/MockData';
import { mockTodayAppointement } from "./utils/MockData";
import { mockRecentAppointements } from "./utils/MockData";
import { mockColumns } from "./utils/MockData";



export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">
          Welcome, Dr. Imen
        </h1>
        <p className="text-gray-500 text-sm">
          Have a nice day at work
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 w-full">
        {mockDocInformation.map((information) => (
          <DocInformationCard
            key={information.id}
            id={information.id}
            information={information}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-6 w-full">
        <DocAppRequest appointements={mockAppointementRequest} />
        <div>
        </div>
        <DocTodayApp appointements={mockTodayAppointement} />
      </div>
      <div className="w-full">
        <DocRecentPatients data={mockRecentAppointements} columns={mockColumns} />
      </div>
    </div>
  );
}
