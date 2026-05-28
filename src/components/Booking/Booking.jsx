import BookingForm from "./BookingForm";
import TableBooking from "./TableBooking";

const Booking = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col gap-20">
      <TableBooking />
      <BookingForm />
    </section>
  );
};

export default Booking;
