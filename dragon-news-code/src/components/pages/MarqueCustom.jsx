// MarqueeWithControls.jsx
import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const items = [
  "🔥 React Developer Needed",
  "🎉 Big Sale on Electronics!",
  "📢 New Feature Released!",
  "🚀 Join Our Beta Program",
  "📰 Latest Blog Post: React Tips",
];

const MarqueCustom = () => {
  const [play, setPlay] = useState(true);
  const [index, setIndex] = useState(0);

  const nextItem = () => setIndex((prev) => (prev + 1) % items.length);
  const prevItem = () =>
    setIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="w-full p-4">
      <div className="mb-2 flex gap-2">
        <button
          onClick={() => setPlay(!play)}
          className="px-4 py-1 bg-blue-500 text-white rounded"
        >
          {play ? "Pause" : "Play"}
        </button>
        <button
          onClick={prevItem}
          className="px-4 py-1 bg-gray-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={nextItem}
          className="px-4 py-1 bg-gray-500 text-white rounded"
        >
          Next
        </button>
      </div>
      <div className="w-full h-[60px] flex items-center">
        <Marquee
          play={play}
          pauseOnHover={true}
          speed={50}
          gradient={false}
          className="overflow-hidden"
        >
          <div className="w-full min-w-[400px] max-w-full text-xl text-center font-semibold px-4">
            {items[index]}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueCustom;
