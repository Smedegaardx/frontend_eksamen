import CurrentTrack from "./CurrentTrack";
import Sectionheader from "./Sectionheader";
import TrackSelector from "./TrackSelector";

const TrackSection = () => {
  return (
    <section className="bg-black pt-10">
      <Sectionheader title="night club track"></Sectionheader>
      <CurrentTrack></CurrentTrack>
      <TrackSelector></TrackSelector>
    </section>
  );
};

export default TrackSection;
