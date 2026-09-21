import React from "react";
import AboutSection from "../components/AboutSection";
import CommunityServiceSection from "../components/CommunityServiceSection";
import VMVSection from "../components/VMVSection";
import ExtraAboutSections from "../components/ExtraAboutSections";
import TeamSection from "../components/TeamSection";
import AnimatedSection from "../components/AnimatedSection";
import TextMarquee from "../components/TextMarquee";

const About = () => {
    return (
        <section className="w-full min-h-screen pt-36 sm:pt-40 lg:pt-28">
            {/* 2.1 Dr. Aysha Section */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
                <AboutSection />
            </AnimatedSection>

            {/* 2.1 Continued: Community Service */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
                <CommunityServiceSection />
            </AnimatedSection>

            {/* 2.2 & 2.3: Vision, Mission, Values */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
                <VMVSection />
            </AnimatedSection>

            {/* Meet Our Team */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
                <TeamSection />
            </AnimatedSection>

            {/* 2.4: Text Marquee & Our Insurance Partners */}
            <AnimatedSection animation="fadeUp" delay={0.1}>
                <TextMarquee />
                <ExtraAboutSections />
            </AnimatedSection>
        </section>
    );
};

export default About;
