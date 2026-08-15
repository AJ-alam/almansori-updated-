import React from "react";
import Hero from "../components/Hero";
import Discover from "../components/Discover";
import HomeServices from "../components/HomeServices";
import ProcessSection from "../components/ProcessSection";
import HeroSection from "../components/HeroSection";
import TimelineSection from "../components/TimelineSection";
import MediaSection from "../components/MediaSection";
import AnimatedSection from "../components/AnimatedSection";
import OffersSection from "../components/OffersSection";
import VMVSection from "../components/VMVSection";
import ExtraAboutSections from "../components/ExtraAboutSections";
import CommunityServiceSection from "../components/CommunityServiceSection";
import TextMarquee from "../components/TextMarquee";

const LandingPage = () => {
  return (
    <main>
      <Hero />

      <AnimatedSection animation="fadeUp" delay={0.1}>
        <Discover />
      </AnimatedSection>

      <AnimatedSection animation="fadeUp" delay={0.1}>
        <HomeServices />
      </AnimatedSection>

      <AnimatedSection animation="fadeUp" delay={0.1}>
        <TimelineSection />
      </AnimatedSection>

      <AnimatedSection animation="fadeUp" delay={0.1}>
        <MediaSection />
      </AnimatedSection>

     

      {/* <AnimatedSection animation="fadeUp" delay={0.1}>
        <VMVSection />
      </AnimatedSection>

      <AnimatedSection animation="fadeUp" delay={0.1}>
        <HeroSection />
      </AnimatedSection> */}

      
    </main>
  );
};

export default LandingPage;

