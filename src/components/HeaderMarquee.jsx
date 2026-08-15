import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const HeaderMarquee = () => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useGSAP(() => {
    const marqueeContent = marqueeRef.current;
    if (!marqueeContent) return;

    // Clone the content for seamless loop
    const items = marqueeContent.querySelectorAll(".marquee-item");
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      marqueeContent.appendChild(clone);
    });

    // Calculate total width
    const totalWidth = marqueeContent.scrollWidth / 2;

    // Create infinite animation
    animationRef.current = gsap.to(marqueeContent, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const marqueeItems = [
    "Where",
    "Dental",
    "and",
    "Facial",
    "wellbeing",
    "meets",
  ];

  return (
    <div className="w-full overflow-hidden py-4 absolute  top-47">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className="marquee-item inline-flex items-center px-8 text-white/70 text-9xl font-bold"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderMarquee;
