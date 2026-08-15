import React from "react";
import HeaderMarquee from "./HeaderMarquee";
import { avatars } from "../data/hero";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="w-full h-screen lg:max-h-[720px] relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Marquee Text */}
      <div className="w-full h-full flex items-center relative justify-center z-10">
        <HeaderMarquee />
      </div>

      {/* Desktop Bottom Content */}
      <div className="absolute w-full bottom-20 z-20 hidden lg:flex px-8 items-center justify-between">
        <div>
          <div className="avatars flex items-center relative">
            {avatars.map((a, index) => (
              <div
                key={index}
                className={`w-16 h-16 rounded-full border-2 border-white overflow-hidden ${a.styles}`}
              >
                <img
                  src={a.url}
                  className={`w-full h-full object-cover object-center`}
                  alt="Happy patient"
                />
              </div>
            ))}
          </div>

          <h4 className="text-7xl font-bold text-white mt-2">
            15K+
          </h4>
          <p className="w-[300px] text-white/90">
            Over 30 years of transforming smiles. Join our family of
            satisfied patients at Bahrain's first dental clinic in Riffa.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="w-[300px] text-white/90">
            Comprehensive care for the whole family. From dental and
            dermatology to aesthetic treatments and mental health.
          </p>

          <div className="flex items-center">
            <Link to="/contact" className="primary-btn md:px-8! py-3!">
              <span className="font-medium!">Book Appointment</span>
            </Link>

            <div className="hidden md:flex w-11 h-11 rounded-full primary-overlay items-center justify-center">
              <Link to="/contact">
                <IoArrowForwardOutline className="text-lg text-white -rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 lg:hidden p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
        <div className="flex flex-col items-center text-center">
          {/* Stats */}
          <div className="flex items-center gap-4 mb-6">
            <div className="avatars flex items-center relative">
              {avatars.slice(0, 3).map((a, index) => (
                <div
                  key={index}
                  className={`w-14 h-14 rounded-full border-2 border-white overflow-hidden ${index > 0 ? '-ml-4' : ''}`}
                >
                  <img
                    src={a.url}
                    className="w-full h-full object-cover object-center"
                    alt="Happy patient"
                  />
                </div>
              ))}
            </div>
            <div>
              <span className="text-4xl font-bold text-white">15K+</span>
              <p className="text-white/80 text-base">Happy Patients</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base mb-6 max-w-sm leading-relaxed">
            Comprehensive care for the whole family. From dental to aesthetic treatments.
          </p>

          {/* CTA Button */}
          <Link to="/contact" className="primary-btn px-10 py-4">
            <span className="font-semibold text-lg">Book Appointment</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
