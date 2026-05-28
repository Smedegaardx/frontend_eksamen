import Button from "../Button";

const BookingForm = () => {
  return (
    <div>
      <h2 className="uppercase text-4xl">Book a Table</h2>
      <form className="grid grid-cols-2 gap-5 mt-10">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
        ></input>
        <input
          type="text"
          placeholder="Table Number"
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
        ></input>
        <input
          type="text"
          placeholder="Number of Guests"
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
        ></input>
        <input
          type="text"
          placeholder="Event"
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
        ></input>
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
        ></input>
        <textarea
          placeholder="Additional Notes"
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3 min-h-48 resize-y col-span-2"
        ></textarea>
      </form>
      <div className="flex justify-end mt-5">
        <Button buttonText="Book Now" />
      </div>
    </div>
  );
};

export default BookingForm;
