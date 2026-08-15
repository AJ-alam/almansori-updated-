import React from "react";
import TextMarquee from "../components/TextMarquee";
import ContactSection from "../components/ContactSection";
import TestimonialsSection from "../components/TestimonialSection";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen pt-28 lg:pt-24">
      {/* <TextMarquee text="Your smile deserves the best" /> */}
      <ContactSection />
      <TestimonialsSection />
    </section>
  );
};

export default ContactPage;
