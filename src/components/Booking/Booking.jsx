"use client";

import { useState } from "react";
import BookingForm from "./BookingForm";
import TableBooking from "./TableBooking";

const Booking = ({ eventID, eventsAPI, reservationsAPI }) => {
  const [selectedTable, setSelectedTable] = useState("");
  const [bookedTables, setBookedTables] = useState([]);

  return (
    <section className="container mx-auto py-10 flex flex-col gap-20">
      <TableBooking
        selectedTable={selectedTable}
        onTableSelect={setSelectedTable}
        bookedTables={bookedTables}
      />
      <BookingForm
        eventsAPI={eventsAPI}
        reservationsAPI={reservationsAPI}
        eventID={eventID}
        selectedTable={selectedTable}
        onTableSelect={setSelectedTable}
        onBookedTablesChange={setBookedTables}
      />
    </section>
  );
};

export default Booking;
