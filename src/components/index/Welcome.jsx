import Sectionheader from "./Sectionheader";
import { motion } from "framer-motion";

const services = [
  {
    title: "Night Club",
    thumbnail: "/assets/content-img/thumb1.jpg",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    icon: "/assets/icon/favicon.png",
  },
  {
    title: "Restaurant",
    thumbnail: "/assets/content-img/reastaurant_1.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
    icon: "/assets/icon/favicon.png",
  },
  {
    title: "Bar",
    thumbnail: "/assets/content-img/thumb2.jpg",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.",
    icon: "/assets/icon/favicon.png",
  },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
};

const Welcome = () => {
  return (
    <section className="bg-[url(/assets/bg/pattern_bg.jpg)] bg-cover bg-center mb-8">
      <Sectionheader title="Welcome in nightclub" />
      <div className="grid grid-cols-3 max-w-4xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden aspect-3/4 cursor-pointer"
            whileHover="visible"
            initial="hidden"
          >
            <motion.img
              src={service.thumbnail}
              alt={service.title}
              className="w-full h-full object-cover"
              variants={{
                hidden: { scale: 1 },
                visible: {
                  scale: 1.05,
                  transition: { duration: 1.5, ease: "easeInOut" },
                },
              }}
            />

            {/* Sort */}
            <motion.div
              className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center p-6"
              variants={overlayVariants}
            >
              <motion.span
                className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-pink-600"
                variants={{
                  hidden: { opacity: 0, x: -10, y: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 1.5, ease: "easeOut" },
                  },
                }}
              />

              {/* Hjørner */}
              <motion.span
                className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-pink-600"
                variants={{
                  hidden: { opacity: 0, x: 10, y: 10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 1.5, ease: "easeOut" },
                  },
                }}
              />

              {/* Ikon */}
              <motion.div
                className="w-16 h-16 border-2 border-pink-600 flex items-center justify-center mb-4 text-2xl text-pink-500"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 1.5, ease: "easeOut" },
                  },
                }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-white text-xs font-bold tracking-widest uppercase mb-3"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.5, ease: "easeOut" },
                  },
                }}
              >
                {service.title}
              </motion.h3>

              {/* Divider */}
              <motion.div
                className="h-0.5 bg-pink-600 mb-3"
                variants={{
                  hidden: { width: 0, opacity: 0 },
                  visible: {
                    width: 40,
                    opacity: 1,
                    transition: { duration: 1.5, ease: "easeOut" },
                  },
                }}
              />

              {/* Description */}
              <motion.p
                className="text-gray-300 text-xs text-center leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1.5, ease: "easeOut" },
                  },
                }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Welcome;
