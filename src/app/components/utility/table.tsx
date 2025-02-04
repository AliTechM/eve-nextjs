import React from "react";

type ComparisonRow = {
  label: string;
  with: string | number|null;
  without: string | number|null;
};

type ComparisonTableProps = {
  data: ComparisonRow[];
  isAmount?:boolean;
};

const ComparisonTable = ({isAmount, data }: ComparisonTableProps) => {
  return (
    <div className='w-full mx-auto md:p-6 p-2 rounded-lg '>
      <div className='space-y-4'>
        {data.map((row, index) => (
          <div
            key={index}
            className='grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b border-slate-700'>
            <div
              className={`${
                isAmount && row.label.toLowerCase().includes("total")
                  ? "table-label !text-left"
                  : "table-data !text-left"
              }`}>
              {row.label}
            </div>
            <div className='table-data'>
              {row.with === "N/A" ? "N/A" : row.with}
            </div>
            <div className='table-data'>
              {row.without === "N/A" ? "N/A" : row.without}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;