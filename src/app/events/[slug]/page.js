import CommentSection from "@/components/EventPage/CommentSection";
import EventInfo from "@/components/EventPage/EventInfo";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Siteheader from "@/components/Siteheader";

const EventPage = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch("http://localhost:4000/events");
  const events = await res.json();

  const event = events.find((event) => event.slug === slug);

  if (!event) {
    return (
      <p className="mx-auto mt-20 text-6xl">
        <span className="text-(--color-brand)">Error 404: </span>Event not
        found!
      </p>
    );
  }

  const commentsRes = await fetch(
    `http://localhost:4000/comments?eventId=${event.id}`,
  );

  const comments = await commentsRes.json();

  return (
    <main>
      <Header></Header>
      <Siteheader title={event.title}></Siteheader>
      <EventInfo event={event}></EventInfo>
      <CommentSection
        eventId={event.id}
        initialComments={comments}
      ></CommentSection>
      <Footer></Footer>
    </main>
  );
};

export default EventPage;
