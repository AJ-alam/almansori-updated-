import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * AnimatedSection - Wraps content with scroll-triggered animations
 * @param {string} animation - Type: "fadeUp", "fadeIn", "fadeLeft", "fadeRight", "scale"
 * @param {number} delay - Delay before animation starts (in seconds)
 * @param {number} duration - Animation duration (in seconds)
 * @param {string} className - Additional CSS classes
 */
const AnimatedSection = ({
    children,
    animation = "fadeUp",
    delay = 0,
    duration = 0.8,
    className = "",
    stagger = 0
}) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const element = sectionRef.current;
        if (!element) return;

        // Initial states based on animation type
        const animations = {
            fadeUp: { y: 60, opacity: 0 },
            fadeIn: { opacity: 0 },
            fadeLeft: { x: -60, opacity: 0 },
            fadeRight: { x: 60, opacity: 0 },
            scale: { scale: 0.9, opacity: 0 },
        };

        const initialState = animations[animation] || animations.fadeUp;

        // Set initial state
        gsap.set(element, initialState);

        // Create scroll trigger animation
        gsap.to(element, {
            y: 0,
            x: 0,
            opacity: 1,
            scale: 1,
            duration: duration,
            delay: delay,
            ease: "power3.out",
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === element) {
                    trigger.kill();
                }
            });
        };
    }, [animation, delay, duration]);

    return (
        <div ref={sectionRef} className={className}>
            {children}
        </div>
    );
};

export default AnimatedSection;
