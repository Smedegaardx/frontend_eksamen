"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Iconbtn from "../Iconbtn";
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

function Lightbox({ items, activeIndex, onClose, onNext, onPrev }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onNext, onPrev]);

  const item = items[activeIndex];

  return (
    <motion.div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/90 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="cursor-pointer absolute top-4 right-5 z-20 text-white text-4xl font-light leading-none hover:opacity-60 transition-opacity"
        aria-label="Luk"
      >
        ×
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="hidden lg:block cursor-pointer absolute left-4 text-white text-4xl font-light px-3 py-2 hover:opacity-60 transition-opacity"
        aria-label="Forrige"
      >
        <Iconbtn icon={GoTriangleLeft} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="
        relative w-full max-w-5xl max-h-[75vh] lg:max-h-[85vh]

        before:content-[''] before:absolute before:top-0 before:left-0
        before:w-10 before:h-10 md:before:w-16 md:before:h-16 lg:before:w-20 lg:before:h-20
        before:bg-(--color-brand)
        before:[clip-path:polygon(0_0,100%_0,0_100%)]

        after:content-[''] after:absolute after:bottom-0 after:right-0
        after:w-10 after:h-10 md:after:w-16 md:after:h-16 lg:after:w-20 lg:after:h-20
        after:bg-(--color-brand)
        after:[clip-path:polygon(100%_0,100%_100%,0_100%)]
      "
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={`https://night-club-api-2026-u759.onrender.com/${item.asset.url}`}
            alt={item.asset.alt}
            width={item.asset.width}
            height={item.asset.height ?? 800}
            className="object-contain max-h-[75vh] lg:max-h-[85vh] w-full"
          />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="hidden lg:block cursor-pointer absolute right-4 text-white text-4xl font-light px-3 py-2 hover:opacity-60 transition-opacity"
        aria-label="Næste"
      >
        <Iconbtn icon={GoTriangleRight} />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-8 rounded-full bg-black/60 px-5 py-3 backdrop-blur-md lg:hidden">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="cursor-pointer text-white text-3xl hover:opacity-60 transition-opacity"
          aria-label="Forrige"
        >
          <Iconbtn icon={GoTriangleLeft} />
        </button>

        <p className="text-white/60 text-sm whitespace-nowrap">
          {activeIndex + 1} / {items.length}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="cursor-pointer text-white text-3xl hover:opacity-60 transition-opacity"
          aria-label="Næste"
        >
          <Iconbtn icon={GoTriangleRight} />
        </button>
      </div>

      <p className="hidden lg:block absolute bottom-4 text-white/50 text-sm">
        {activeIndex + 1} / {items.length}
      </p>
    </motion.div>
  );
}

function AnimatedGalleryItem({ item, index, style, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      style={style}
      className="relative overflow-hidden cursor-pointer"
      initial="rest"
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -64 }}
      whileHover="hover"
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      onClick={onClick}
    >
      <motion.div
        className="absolute top-0 left-0 z-10 w-10 h-10 md:w-20 md:h-20 bg-(--color-brand) [clip-path:polygon(0_0,100%_0,0_100%)]"
        variants={{
          rest: {
            opacity: 0,
            scale: 0.5,
          },
          hover: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="absolute bottom-0 right-0 z-10 w-10 h-10 md:w-20 md:h-20 bg-(--color-brand) [clip-path:polygon(100%_0,100%_100%,0_100%)]"
        variants={{
          rest: {
            opacity: 0,
            scale: 0.5,
          },
          hover: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{ duration: 0.2 }}
      />

      <Image
        src={`https://night-club-api-2026-u759.onrender.com/${item.asset.url}`}
        alt={item.asset.alt}
        width={item.asset.width}
        height={328}
        className="h-full object-cover"
      />
    </motion.div>
  );
}

const GalleryGrid = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClose = useCallback(() => setActiveIndex(null), []);
  const handleNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % items.length),
    [items.length],
  );
  const handlePrev = useCallback(
    () => setActiveIndex((i) => (i - 1 + items.length) % items.length),
    [items.length],
  );

  return (
    <>
      <div className="flex flex-col lg:grid grid-cols-6 grid-rows-2 mt-8 mb-8">
        {items.map((item, index) => (
          <AnimatedGalleryItem
            key={item.id}
            item={item}
            index={index}
            onClick={() => setActiveIndex(index)}
            style={{
              gridColumn:
                index === 0 || index === 2
                  ? "span 2"
                  : index > 3
                    ? "span 2"
                    : undefined,
              gridRow: index > 3 ? "span 1" : undefined,
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <Lightbox
            items={items}
            activeIndex={activeIndex}
            onClose={handleClose}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid;
