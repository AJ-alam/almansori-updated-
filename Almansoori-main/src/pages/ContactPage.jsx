import React from "react";
import TextMarquee from "../components/TextMarquee";
import ContactSection from "../components/ContactSection";
import TestimonialsSection from "../components/TestimonialSection";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen pt-36 sm:pt-40 lg:pt-28">
      {/* <TextMarquee text="Your smile deserves the best" /> */}
      <ContactSection />
      <TestimonialsSection />
    </section>
  );
};

export default ContactPage;
