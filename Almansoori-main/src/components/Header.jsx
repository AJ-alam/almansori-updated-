import React, { useState, useEffect, useRef } from "react";
import { headerMenu } from "../data/menu";
import { services } from "../data/services";
import { Link, useLocation } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import Brand from "./Brand";

const Header = () => {
  const location = useLocation();
  const headerRef = useRef(null);

  // Desktop dropdown state
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Mobile dropdown state
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeMobileServiceIndex, setActiveMobileServiceIndex] = useState(0);

  const activeService = services[activeServiceIndex];
  const activeMobileService = services[activeMobileServiceIndex];

  const closeServices = () => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Close all dropdowns when route changes
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname, location.key]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header ref={headerRef} className="w-full absolute top-0 left-0 z-50 px-3 sm:px-4 md:px-6 pt-2 md:pt-3">
      {/* Floating rounded container - Clean white with subtle shadow */}
      <div className="bg-white backdrop-blur-sm rounded-2xl md:rounded-full shadow-xl border border-gray-200/50 transition-all duration-300">
        {/* Main header row */}
        <div className="flex items-center px-4 md:px-6 py-3 justify-between lg:gap-4">
          {/* Logo */}
          <Link to="/" onClick={closeServices} className="flex items-center gap-2 flex-1 cursor-pointer">
            <img src="/images/logo_gradient.svg" alt="Almansoori Logo" className="h-8 md:h-10" />
            <span className="font-primary text-base sm:text-lg leading-5 mt-1">
              <Brand />
            </span>
          </Link>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="flex-1 items-center gap-1 justify-center hidden lg:flex">
            {headerMenu.map((item, index) => (
              item.name === "Services" ? (
                // Services with mega dropdown
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => {
                    setIsServicesOpen(false);
                    setActiveServiceIndex(0);
                  }}
                >
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-1 cursor-pointer ${location.pathname.startsWith("/services")
                      ? "bg-heading text-white"
                      : "text-body hover:bg-gray-100 hover:text-heading"
                      }`}
                  >
                    <span>{item.name}</span>
                    <FaChevronDown className={`text-xs transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  {/* Mega Dropdown */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${isServicesOpen ? "opacity-100 visible translate-y-0 pointer-events-auto" : "opacity-0 invisible -translate-y-2 pointer-events-none"}`}
                  >
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden" style={{ width: '980px', minHeight: '570px' }}>
                      <div className="flex min-h-[570px]">
                        {/* Left Column - Main Services (Dark Accent Styling for contrast) */}
                        <div className="w-[280px] bg-heading p-5 flex flex-col justify-between flex-shrink-0">
                          <div>
                            <div className="flex flex-col gap-2">
                              {services.map((service, idx) => {
                                const isActive = activeServiceIndex === idx;
                                return (
                                  <Link
                                    key={idx}
                                    to={`/services/${service.slug}`}
                                    onClick={closeServices}
                                    onMouseEnter={() => setActiveServiceIndex(idx)}
                                    className={`flex items-center justify-between gap-3 px-4 py-3 rounded-2xl cursor-pointer transition-all duration-300 ${isActive
                                      ? 'bg-white text-heading shadow-lg font-bold translate-x-1'
                                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                                      }`}
                                  >
                                    <span className="font-primary text-base capitalize">{service.title}</span>
                                    <FaChevronRight className={`text-xs transition-transform ${isActive ? 'text-heading translate-x-0.5' : 'text-white/40'}`} />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t border-white/10 px-2">
                            <span className="text-xs text-white/50 block">Comprehensive Medical &amp; Dental Care</span>
                          </div>
                        </div>

                        {/* Right Column - Sub Services (Clean Light Background) */}
                        <div className="flex-1 p-6 bg-gray-50 flex flex-col justify-between">
                          <div>
                            <div className="pb-3 mb-4 border-b border-gray-200">
                              <h3 className="font-primary text-xl text-heading uppercase font-bold tracking-wide">
                                {activeService?.title} Treatments
                              </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-2.5 max-h-[470px] overflow-y-auto pr-1">
                              {activeService?.subServices?.map((subService, subIdx) => {
                                return (
                                  <Link
                                    key={subIdx}
                                    to={`/services/${activeService.slug}/${subService.slug}`}
                                    onClick={closeServices}
                                    className="flex items-center px-4 py-3 bg-white hover:bg-gray-200/80 rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xs transition-all duration-200 group"
                                  >
                                    <span className="font-primary text-xs sm:text-sm font-medium text-heading block group-hover:text-black transition-colors leading-tight">
                                      {subService.name}
                                    </span>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.link}
                  onClick={closeServices}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${item.link === location.pathname
                    ? "bg-heading text-white"
                    : "text-body hover:bg-gray-100 hover:text-heading"
                    }`}
                >
                  <span>{item.name}</span>
                </Link>
              )
            ))}
          </div>

          {/* Book Appointment button - Using the dark grey color */}
          <div className="flex items-center flex-1 justify-end gap-2">
            <Link
              to="/contact"
              onClick={closeServices}
              className="bg-heading text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm md:text-base hover:opacity-90 transition-opacity shadow-md flex-shrink-0"
            >
              Book Appointment
            </Link>

            <div className="hidden md:flex w-10 h-10 rounded-full bg-heading items-center justify-center hover:opacity-90 transition-opacity shadow-md flex-shrink-0">
              <Link to="/contact" onClick={closeServices}>
                <IoArrowForwardOutline className="text-lg text-white -rotate-45" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - visible only on mobile */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-2 justify-between px-2.5 sm:px-4 pb-3">
          {headerMenu.map((item, index) => {
            if (item.name === "Services") {
              const active = location.pathname.startsWith("/services");
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => setIsMobileServicesOpen(prev => !prev)}
                  className={`flex-1 text-center px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer ${
                    active || isMobileServicesOpen
                      ? "bg-heading text-white shadow-sm"
                      : "text-body hover:bg-gray-100 hover:text-heading"
                  }`}
                  aria-expanded={isMobileServicesOpen}
                  aria-label="Toggle Services Menu"
                >
                  <span>{item.name}</span>
                  <FaChevronDown
                    className={`text-[9px] sm:text-[10px] transition-transform duration-300 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              );
            }

            const active = item.link === location.pathname;
            return (
              <Link
                key={index}
                to={item.link}
                onClick={() => setIsMobileServicesOpen(false)}
                className={`flex-1 text-center px-1.5 sm:px-2 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full font-medium transition-all duration-300 ${
                  active
                    ? "bg-heading text-white shadow-sm"
                    : "text-body hover:bg-gray-100 hover:text-heading"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Services Dropdown Expansion */}
        {isMobileServicesOpen && (
          <div className="lg:hidden px-3 sm:px-4 pb-4 pt-1 border-t border-gray-100">
            {/* 1. Category Switcher (Dark Accent container matching desktop left column) */}
            <div className="bg-heading p-2 sm:p-2.5 rounded-2xl mb-2.5 shadow-md">
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-white/60 font-semibold px-2 pb-1.5 flex items-center justify-between">
                <span>Select Department</span>
                <Link
                  to={`/services/${activeMobileService?.slug}`}
                  onClick={() => setIsMobileServicesOpen(false)}
                  className="text-white hover:text-white/80 underline font-normal normal-case text-xs flex items-center gap-1"
                >
                  <span>Explore {activeMobileService?.title}</span>
                  <FaChevronRight className="text-[9px]" />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {services.map((service, idx) => {
                  const isActive = activeMobileServiceIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveMobileServiceIndex(idx)}
                      className={`flex items-center justify-center p-2.5 rounded-xl text-center transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-white text-heading shadow-md font-bold"
                          : "text-white/85 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span className="font-primary text-xs sm:text-sm truncate">
                        {service.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Sub-Services / Treatments Container (Clean light styling matching desktop right column) */}
            <div className="bg-gray-50 rounded-2xl p-3 border border-gray-200/80 shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-200">
                <h4 className="font-primary text-xs sm:text-sm text-heading uppercase font-bold tracking-wide">
                  {activeMobileService?.title} Treatments
                </h4>
                <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium">
                  {activeMobileService?.subServices?.length || 0} Treatments
                </span>
              </div>

              {/* Scrollable list/grid of treatments */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 max-h-[260px] overflow-y-auto pr-1">
                {activeMobileService?.subServices?.map((subService, subIdx) => {
                  return (
                    <Link
                      key={subIdx}
                      to={`/services/${activeMobileService.slug}/${subService.slug}`}
                      onClick={() => setIsMobileServicesOpen(false)}
                      className="flex items-center px-3.5 py-2.5 bg-white hover:bg-gray-200/80 active:bg-gray-200 rounded-xl border border-gray-200/70 hover:border-gray-300 transition-all duration-200 group"
                    >
                      <span className="font-primary text-xs font-medium text-heading block group-hover:text-black transition-colors leading-snug">
                        {subService.name}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

