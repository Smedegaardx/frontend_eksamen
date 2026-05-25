import Sectionheader from "./index/Sectionheader";

const Siteheader = ({ title }) => {
  return (
    <div className="bg-[image:linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)),url(/assets/bg/footerbg.jpg)] bg-cover bg-center px-20 py-10">
      <Sectionheader title={title}></Sectionheader>
    </div>
  );
};

export default Siteheader;
