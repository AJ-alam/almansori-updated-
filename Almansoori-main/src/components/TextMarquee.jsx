import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const TextMarquee = ({ className = "" }) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);

  useGSAP(() => {
    const track = marqueeRef.current;
    if (!track) return;

    const items = track.querySelectorAll(".mq-item");
    items.forEach((item) => {
      track.appendChild(item.cloneNode(true));
    });

    const totalWidth = track.scrollWidth / 2;

    animationRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: 80,
      ease: "none",
      repeat: -1,
    });

    return () => animationRef.current?.kill();
  }, []);

  return (
    <div
      className={`w-full overflow-hidden border-y border-gray-100 py-3.5 relative ${className}`}
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap w-max"
        onMouseEnter={() => animationRef.current?.pause()}
        onMouseLeave={() => animationRef.current?.resume()}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="mq-item inline-flex items-center">
            <span
              className="font-primary italic uppercase tracking-[0.18em] text-heading opacity-60 hover:opacity-100 transition-opacity duration-500"
              style={{ fontSize: "15px", fontWeight: 300 }}
            >
              Your smile deserves the best
            </span>
            <span
              className="inline-block mx-9 flex-shrink-0 rounded-full"
              style={{
                width: "4px",
                height: "4px",
                background: "linear-gradient(135deg, #F3D255 0%, #F6A51C 100%)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextMarquee;