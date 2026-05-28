import FeaturedEvent from "./FeaturedEvent";
import Sectionheader from "./Sectionheader";

const FeaturedEventsSection = ({ events }) => {
  const featuredEvents = events.filter((event) => event.isFeatured);

  return (
    <div className="bg-[url(/assets/bg/slider_bg_overlay.png)] pt-10 pb-30 bg-cover ">
      <div className="max-w-350 mx-5 md:mx-20 lg:mx-50 xl:mx-30 2xl:mx-auto">
        <Sectionheader title="featured events"></Sectionheader>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
          {featuredEvents.map((event) => (
            <FeaturedEvent event={event} key={event.id}></FeaturedEvent>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedEventsSection;
