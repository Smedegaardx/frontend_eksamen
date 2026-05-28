"use client";

import Sectionheader from "./Sectionheader";
import { motion } from "framer-motion";
import { LuConciergeBell } from "react-icons/lu";
import { PiCheersFill } from "react-icons/pi";

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
    thumbnail:
      "/assets/content-img/reastaurant_1.jpg",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.",
    icon: <LuConciergeBell />,
  },
  {
    title: "Bar",
    thumbnail: "/assets/content-img/thumb2.jpg",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin.",
    icon: <PiCheersFill />,
  },
];

const Welcome = () => {
  return (
    <section className="bg-[url(/assets/bg/pattern_bg.jpg)] bg-cover bg-center py-20">
      <Sectionheader title="Welcome in nightclub" />
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="relative aspect-3/4 grid grid-cols-1 grid-rows-1"
            initial="rest"
            whileHover="hover"
          >
            <motion.img
              src={service.thumbnail}
              alt={service.title}
              className="w-full h-full object-cover col-start-1 row-start-1"
            />

            {/* Sort */}
            <motion.div
              className="col-start-1 row-start-1 w-full h-full bg-black flex flex-col items-center justify-center 
              
              border-t border-b border-(--color-brand)

              before:content-[''] before:absolute before:top-0 before:left-0
              before:w-20 before:h-20 before:bg-(--color-brand)
              before:[clip-path:polygon(0_0,100%_0,0_100%)]

              after:content-[''] after:absolute after:bottom-0 after:right-0
              after:w-20 after:h-20 after:bg-(--color-brand)
              after:[clip-path:polygon(100%_0,100%_100%,0_100%)]"
              variants={{
                rest: {
                  opacity: 0,
                },
                hover: {
                  opacity: 1,

                  transition: {
                    duration: 0.3,
                  },
                },
              }}
            >
              {/* Ikon */}
              <motion.div
                className="w-24 h-24 border-2 border-(--color-brand) flex items-center justify-center mb-4 text-2xl text-(--color-brand) rounded"
                variants={{
                  rest: {
                    opacity: 0,
                    scale: 0.2,
                  },
                  hover: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                {i === 0 ? (
                  <motion.img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 stroke-(--color-brand)"
                    variants={{
                      rest: { scale: 0.2 },
                      hover: {
                        scale: 1.05,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      },
                    }}
                  />
                ) : (
                  <motion.div
                    className="scale-180"
                    variants={{
                      rest: { scale: 0.2 },
                      hover: {
                        scale: 1.05,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                        },
                      },
                    }}
                  >
                    {service.icon}
                  </motion.div>
                )}
              </motion.div>

              {/* Title */}
              <motion.h3
                className="text-white text-lg font-bold tracking-widest uppercase mb-6"
                variants={{
                  rest: {
                    opacity: 0,
                    scale: 1,
                  },
                  hover: {
                    opacity: 1,
                    scale: 1.2,
                    transition: {
                      duration: 1,
                      ease: "easeOut",
                    },
                  },
                }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-md text-center leading-relaxed"
                variants={{
                  rest: { opacity: 0, x: 50 },
                  hover: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 1.5,
                      ease: "easeOut",
                    },
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
