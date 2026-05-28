import Button from "../Button";

const BookingForm = () => {
  return (
    <div>
      <h2 className="uppercase text-4xl">Book a Table</h2>
      <form className="grid grid-cols-2 gap-5 mt-10">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
        ></input>

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
        ></input>

        <input
          type="text"
          placeholder="Your Phone Number"
          className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
        ></input>

        <select className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3">
          <option value="">Choose Event</option>
          <option value="event1">Event 1</option>
          <option value="event2">Event 2</option>
        </select>

        <select className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3">
          <option value="">Choose Number of Guests</option>
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4 Guests</option>
          <option value="5">5 Guests</option>
          <option value="6">6 Guests</option>
          <option value="7">7 Guests</option>
          <option value="8">8 Guests</option>
        </select>

        <select className="w-full border border-white text-white placeholder:text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3">
          <option value="">Table Number</option>
          <option value="1">Table 1</option>
          <option value="2">Table 2</option>
          <option value="3">Table 3</option>
          <option value="4">Table 4</option>
        </select>

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
