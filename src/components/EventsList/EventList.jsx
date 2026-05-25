"use client";

import { useState } from "react";
import EventSimple from "@/components/EventsList/EventSimple";

const EventList = ({ API }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const eventsPerPage = 3;
  const totalPages = Math.ceil(API.length / eventsPerPage);

  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = API.slice(startIndex, startIndex + eventsPerPage);

  return (
    <div className="bg-[url(/assets/bg/pattern_bg.jpg)] py-20 flex flex-col">
      {currentEvents?.length ? (
        currentEvents.map((event, index) => (
          <EventSimple
            event={event}
            key={event.id}
            imagelast={index % 2 !== 0}
          />
        ))
      ) : (
        <p>No events found</p>
      )}

      <div className="self-center my-20 flex gap-4 text-2xl">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="cursor-pointer"
          >
            &lt; prev
          </button>
        )}

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={
              currentPage === index + 1
                ? "text-(--color-brand) underline cursor-pointer"
                : "cursor-pointer"
            }
          >
            {index + 1}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="cursor-pointer"
          >
            next &gt;
          </button>
        )}
      </div>
    </div>
  );
};

export default EventList;
