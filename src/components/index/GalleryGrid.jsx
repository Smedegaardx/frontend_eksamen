"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-5 text-white text-3xl font-light leading-none hover:opacity-60 transition-opacity"
        aria-label="Luk"
      >
        ×
      </button>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 text-white text-4xl font-light px-3 py-2 hover:opacity-60 transition-opacity"
        aria-label="Forrige"
      >
        ‹
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="relative max-w-5xl max-h-[85vh] w-full mx-16"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={`http://localhost:4000${item.asset.url}`}
            alt={item.asset.alt}
            width={item.asset.width}
            height={item.asset.height ?? 800}
            className="object-contain max-h-[85vh] w-full"
          />
        </motion.div>
      </AnimatePresence>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 text-white text-4xl font-light px-3 py-2 hover:opacity-60 transition-opacity"
        aria-label="Næste"
      >
        ›
      </button>

      {/* Counter */}
      <p className="absolute bottom-4 text-white/50 text-sm">
        {activeIndex + 1} / {items.length}
      </p>
    </motion.div>
  );
}

function AnimatedGalleryItem({ item, index, style, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      ref={ref}
      style={style}
      className="relative overflow-hidden cursor-pointer"
      initial={{ opacity: 0, x: -64 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -64 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <Image
        src={`http://localhost:4000${item.asset.url}`}
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
      <div className="grid grid-cols-6 grid-rows-2 gap-2 mt-8 mb-8">
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
