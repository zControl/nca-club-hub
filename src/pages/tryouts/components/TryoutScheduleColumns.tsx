import { Button } from "@/components/ui/button";
import { formatDateTime } from "@/utils/formatDateTime";
import type { ColumnDef } from "@tanstack/react-table";

export interface TryoutScheduleTableColumns {
  ageGroup: string;
  firstSession: Date;
  secondSession: Date;
  registration: string;
}

const headerStyle = "text-left text-lg md:text-xl font-bold";
const cellStyle = "text-left";

export const scheduleColumns: ColumnDef<TryoutScheduleTableColumns>[] = [
  {
    accessorKey: "age",
    header: () => <div className={headerStyle}>Age</div>,
    cell: ({ row }) => {
      return <div className={cellStyle}>{row.original.ageGroup}</div>;
    },
  },
  {
    id: "registration",
    cell: ({ row }) => {
      return (
        <Button
          variant="highlight"
          onClick={() => window.open(row.original.registration, "_blank")}
        >
          Register
        </Button>
      );
    },
  },
  {
    accessorKey: "firstSession",
    header: () => <div className={headerStyle}>First Session</div>,
    cell: ({ row }) => {
      return (
        <div className={cellStyle}>
          {formatDateTime(row.original.firstSession)}
        </div>
      );
    },
  },
  {
    accessorKey: "secondSession",
    header: () => <div className={headerStyle}>Second Session</div>,
    cell: ({ row }) => {
      return (
        <div className={cellStyle}>
          {formatDateTime(row.original.secondSession)}
        </div>
      );
    },
  },
];
