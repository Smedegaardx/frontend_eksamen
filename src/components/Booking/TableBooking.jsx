import Image from "next/image";

const TableBooking = () => {
  return (
    <article>
      <div className="hidden w-full md:grid md:grid-cols-5 gap-y-10 items-center justify-items-center">
        <img src="/assets/table/table_1.svg" alt="Small table" className="" />
        <img src="/assets/table/table_1.svg" alt="Small table" className="" />
        <img src="/assets/table/table_2.svg" alt="Small table" className="" />
        <img src="/assets/table/table_1.svg" alt="Small table" className="" />
        <img src="/assets/table/table_3.svg" alt="Small table" className="" />

        <img src="/assets/table/table_1.svg" alt="Small table" className="" />
        <img src="/assets/table/table_1.svg" alt="Small table" className="" />
        <img src="/assets/table/table_2.svg" alt="Small table" className="" />
        <img src="/assets/table/table_1.svg" alt="Small table" className="" />
        <img src="/assets/table/table_3.svg" alt="Small table" className="" />

        <img src="/assets/table/table_1.svg" alt="Small table" className="" />
        <img src="/assets/table/table_1.svg" alt="Small table" className="" />
        <img src="/assets/table/table_2.svg" alt="Small table" className="" />
        <img src="/assets/table/table_1.svg" alt="Small table" className="" />
        <img src="/assets/table/table_3.svg" alt="Small table" className="" />
      </div>

      <div className="flex gap-15 mt-15 justify-center">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/table/table_1.svg"
            alt="Small table"
            className="h-16 w-16"
          />
          <p>Available</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/table/table_1_booked.svg"
            alt="Small table"
            className="h-16 w-16"
          />
          <p>Reserved</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            src="/assets/table/table_1_selected.svg"
            alt="Small table"
            className="h-16 w-16"
          />
          <p>Selected</p>
        </div>
      </div>
    </article>
  );
};

export default TableBooking;
