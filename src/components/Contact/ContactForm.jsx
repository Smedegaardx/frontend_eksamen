import Button from "@/components/Button";

const ContactForm = () => {
  return (
    // TODO: tilføj pattern bg
    <section className="flex flex-col items-center py-16 px-4">
      <form className="flex flex-col items-center gap-4 w-full max-w-lg">
        <input
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
          type="text"
          placeholder="Your Name"
        />
        <input
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3"
          type="email"
          placeholder="Your Email"
        />
        <textarea
          className="w-full border border-white text-white placeholder:text-white/80 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand p-3 min-h-48 resize-y"
          placeholder="Your Comment"
        ></textarea>
        <div className="flex justify-end max-w-lg w-full mt-1">
          <Button buttonText="Send" />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
