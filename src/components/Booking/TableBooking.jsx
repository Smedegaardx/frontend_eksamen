"use client";

const TABLES = [
  { id: 1, svg: "table_1" },
  { id: 2, svg: "table_1" },
  { id: 3, svg: "table_2" },
  { id: 4, svg: "table_1" },
  { id: 5, svg: "table_3" },
  { id: 6, svg: "table_1" },
  { id: 7, svg: "table_1" },
  { id: 8, svg: "table_2" },
  { id: 9, svg: "table_1" },
  { id: 10, svg: "table_3" },
  { id: 11, svg: "table_1" },
  { id: 12, svg: "table_1" },
  { id: 13, svg: "table_2" },
  { id: 14, svg: "table_1" },
  { id: 15, svg: "table_3" },
];

const TableBooking = ({ selectedTable, onTableSelect, bookedTables = [] }) => {
  return (
    <article>
      <div className="hidden w-full md:grid md:grid-cols-5 gap-y-10 items-center justify-items-center">
        {TABLES.map((table) => {
          const isBooked = bookedTables.includes(String(table.id));
          const isSelected = selectedTable === String(table.id);

          const svgName = isBooked
            ? `${table.svg}_booked`
            : isSelected
              ? `${table.svg}_selected`
              : table.svg;

          return (
            <button
              key={table.id}
              type="button"
              onClick={() => {
                if (isBooked) return;
                onTableSelect(isSelected ? "" : String(table.id));
              }}
              disabled={isBooked}
              className={`relative flex flex-col items-center group ${
                isBooked ? "cursor-not-allowed opacity-75" : "cursor-pointer"
              }`}
              aria-label={`Vælg bord ${table.id}${isBooked ? " (reserveret)" : ""}`}
            >
              <img
                src={`/assets/table/${svgName}.svg`}
                alt={`Bord ${table.id}`}
                className={`transition-transform ${!isBooked ? "group-hover:scale-110" : ""}`}
              />
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm pointer-events-none">
                {table.id}
              </span>
            </button>
          );
        })}
      </div>

      <div className="hidden md:flex gap-15 mt-15 justify-center">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/table/table_1.svg"
            alt="Ledigt bord"
            className="h-16 w-16"
          />
          <p>Available</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/table/table_1_booked.svg"
            alt="Reserveret bord"
            className="h-16 w-16"
          />
          <p>Reserved</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/table/table_1_selected.svg"
            alt="Valgt bord"
            className="h-16 w-16"
          />
          <p>Selected</p>
        </div>
      </div>
    </article>
  );
};

export default TableBooking;
