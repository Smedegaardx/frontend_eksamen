"use client";

import Button from "../Button";
import { z } from "zod";
import { useState, useEffect } from "react";

const bookingSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must be less than 30 characters"),
  email: z.email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 characters")
    .max(15, "Phone number must be less than 15 characters"),
  date: z.string().min(1, "Please select an event"),
  eventId: z.string().min(1, "Please select an event"),
  guests: z.string().min(1, "Please select the number of guests"),
  table: z.string().min(1, "Please select a table"),
  notes: z
    .string()
    .max(500, "Additional notes must be less than 500 characters")
    .optional(),
});

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

const GUEST_OPTIONS = {
  table_1: [1, 2, 3, 4],
  table_2: [5, 6],
  table_3: [7, 8],
};

const BookingForm = ({
  selectedTable,
  onTableSelect,
  onBookedTablesChange,
  eventID,
  eventsAPI,
  reservationsAPI,
}) => {
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [events, setEvents] = useState([]);
  const [bookedTables, setBookedTables] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    table: "",
    guests: "",
    date: eventID ? eventID.date : "",
    phone: "",
    eventId: eventID ? String(eventID.id) : "",
    notes: "",
  });

  useEffect(() => {
    setEvents(eventsAPI);
  }, [eventsAPI]);

  useEffect(() => {
    if (!formData.eventId || !reservationsAPI) {
      setBookedTables([]);
      onBookedTablesChange?.([]);
      return;
    }
    const tables = reservationsAPI
      .filter((r) => String(r.eventId) === formData.eventId)
      .map((r) => String(r.table));
    setBookedTables(tables);
    onBookedTablesChange?.(tables);
  }, [formData.eventId]);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, table: selectedTable }));
  }, [selectedTable]);

  const tableType = TABLES.find((t) => String(t.id) === formData.table)?.svg;
  const allowedGuests = tableType
    ? GUEST_OPTIONS[tableType]
    : [1, 2, 3, 4, 5, 6, 7, 8];

  const guestCount = formData.guests ? Number(formData.guests) : null;
  const allowedTableType = guestCount
    ? Object.entries(GUEST_OPTIONS).find(([, guests]) =>
        guests.includes(guestCount),
      )?.[0]
    : null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = bookingSchema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    const response = await fetch("http://localhost:4000/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: result.data.name,
        email: result.data.email,
        table: result.data.table,
        guests: result.data.guests,
        date: result.data.date,
        phone: result.data.phone,
        eventId: result.data.eventId,
        ...(result.data.notes ? { notes: result.data.notes } : {}),
      }),
    });

    if (response.ok) {
      setSuccess(true);
      const newBooked = [...bookedTables, result.data.table];
      setBookedTables(newBooked);
      onBookedTablesChange?.(newBooked);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventId: "",
        date: "",
        guests: "",
        table: "",
        notes: "",
      });
      onTableSelect("");
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  return (
    <div>
      <h2 className="hidden md:block uppercase text-4xl">Book a Table</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 mx-10"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
          />
          <div className="self-start min-h-5">
            {errors.name?.[0] && (
              <p className="text-red-400 text-sm">{errors.name[0]}</p>
            )}
          </div>
        </div>

        <div className="w-full">
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
          />
          <div className="self-start min-h-5">
            {errors.email?.[0] && (
              <p className="text-red-400 text-sm">{errors.email[0]}</p>
            )}
          </div>
        </div>

        <div className="w-full">
          <input
            type="tel"
            placeholder="Your Phone Number"
            maxLength={15}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
          />
          <div className="self-start min-h-5">
            {errors.phone?.[0] && (
              <p className="text-red-400 text-sm">{errors.phone[0]}</p>
            )}
          </div>
        </div>

        <div className="w-full">
          <select
            value={formData.eventId}
            onChange={(e) => {
              const selectedEvent = events.find(
                (ev) => String(ev.id) === e.target.value,
              );
              setFormData({
                ...formData,
                eventId: e.target.value,
                date: selectedEvent ? selectedEvent.date : "",
                table: "",
                guests: "",
              });
            }}
            className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
          >
            <option value="">Choose Event</option>
            {events.map((event) => (
              <option key={event.id} value={String(event.id)}>
                {event.title}
              </option>
            ))}
          </select>
          <div className="self-start min-h-5">
            {errors.eventId?.[0] && (
              <p className="text-red-400 text-sm">{errors.eventId[0]}</p>
            )}
          </div>
        </div>

        <div className="w-full">
          <select
            value={formData.guests}
            onChange={(e) =>
              setFormData({ ...formData, guests: e.target.value })
            }
            className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
          >
            <option value="">Choose Number of Guests</option>
            {allowedGuests.map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </option>
            ))}
          </select>
          <div className="self-start min-h-5">
            {errors.guests?.[0] && (
              <p className="text-red-400 text-sm">{errors.guests[0]}</p>
            )}
          </div>
        </div>

        <div className="w-full">
          <select
            value={formData.table}
            onChange={(e) => {
              setFormData({ ...formData, table: e.target.value });
              onTableSelect(e.target.value);
            }}
            className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
          >
            <option value="">Table Number</option>
            {TABLES.filter((table) => {
              const isBooked = bookedTables.includes(String(table.id));
              const isWrongType = allowedTableType
                ? table.svg !== allowedTableType
                : false;
              return !isBooked && !isWrongType;
            }).map((table) => (
              <option key={table.id} value={String(table.id)}>
                Table {table.id}
              </option>
            ))}
          </select>
          <div className="self-start min-h-5">
            {errors.table?.[0] && (
              <p className="text-red-400 text-sm">{errors.table[0]}</p>
            )}
          </div>
        </div>

        <div className="w-full col-span-1 md:col-span-2">
          <textarea
            placeholder="Your Comment"
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3 min-h-48 resize-y"
          />
          <div className="self-start min-h-5">
            {errors.notes?.[0] && (
              <p className="text-red-400 text-sm">{errors.notes[0]}</p>
            )}
            {success && (
              <p className="text-green-400 text-sm self-start">
                Your table has been booked successfully!
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-center md:justify-end mt-5 md:col-start-2">
          <Button buttonText="Book Now" />
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
