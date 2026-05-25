import AddComment from "@/components/EventPage/AddComment";
import Comments from "@/components/EventPage/Comments";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";

const EventPage = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch("http://localhost:4000/events");
  const events = await res.json();

  const event = events.find((event) => event.slug === slug);

  if (!event) {
    return <p>Event not found</p>;
  }

  const commentsRes = await fetch(
    `http://localhost:4000/comments?eventId=${event.id}`,
  );

  const comments = await commentsRes.json();

  return (
    <main>
      <Header></Header>
      <Comments API={comments}></Comments>
      <AddComment></AddComment>
      <Footer></Footer>
    </main>
  );
};

export default EventPage;
