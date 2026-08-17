import React, { useState } from "react";
import { headerMenu } from "../data/menu";
import { services } from "../data/services";
import { Link, useLocation } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import Brand from "./Brand";

const Header = () => {
  const location = useLocation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  const activeService = services[activeServiceIndex];

  return (
    <header className="w-full absolute top-0 left-0 z-50 px-4 md:px-6 pt-2 md:pt-3">
      {/* Floating rounded container - Clean white with subtle shadow */}
      <div className="bg-white backdrop-blur-sm rounded-2xl md:rounded-full shadow-xl border border-gray-200/50">
        {/* Main header row */}
        <div className="flex items-center px-4 md:px-6 py-3 justify-between lg:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-1">
            <img src="/images/logo_gradient.svg" alt="Almansoori Logo" className="h-8 md:h-10" />
            <span className="font-primary text-base sm:text-lg leading-5 mt-1">
              <Brand />
            </span>
          </div>

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
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
                  >
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden" style={{ width: '980px', minHeight: '570px' }}>
                      <div className="flex min-h-[570px]">
                        {/* Left Column - Main Services (Dark Accent Styling for contrast) */}
                        <div className="w-[280px] bg-heading p-5 flex flex-col justify-between flex-shrink-0">
                          <div>
                            <div className="flex items-center gap-2 mb-4 px-2">
                              <span className="w-2 h-2 rounded-full bg-[#F9B70A]"></span>
                              <p className="text-xs font-bold text-white/70 uppercase tracking-widest">Our Services</p>
                            </div>
                            <div className="flex flex-col gap-2">
                              {services.map((service, idx) => {
                                const Icon = service.icon;
                                const isActive = activeServiceIndex === idx;
                                return (
                                  <Link
                                    key={idx}
                                    to={`/services/${service.slug}`}
                                    onMouseEnter={() => setActiveServiceIndex(idx)}
                                    className={`flex items-center justify-between gap-3 p-3.5 rounded-2xl cursor-pointer transition-all duration-300 ${isActive
                                      ? 'bg-white text-heading shadow-lg font-bold translate-x-1'
                                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                                      }`}
                                  >
                                    <div className="flex items-center gap-3">
                                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-heading text-white' : 'bg-white/10 text-white'}`}>
                                        <Icon className="text-xl" />
                                      </div>
                                      <span className="font-primary text-base">{service.title}</span>
                                    </div>
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
                            <div className="flex items-center justify-between pb-3 mb-4 border-b border-gray-200">
                              <div>
                                <span className="text-xs font-semibold text-brand-primary uppercase tracking-wider block mb-0.5">Specialized Care</span>
                                <h3 className="font-primary text-xl text-heading uppercase font-bold tracking-wide">
                                  {activeService?.title} Treatments
                                </h3>
                              </div>
                              <Link
                                to={`/services/${activeService?.slug}`}
                                className="px-4 py-2 bg-heading text-white rounded-full text-xs font-semibold hover:opacity-90 transition-opacity"
                              >
                                View All →
                              </Link>
                            </div>

                            <div className="grid grid-cols-2 gap-2.5 max-h-[470px] overflow-y-auto pr-1">
                              {activeService?.subServices?.map((subService, subIdx) => {
                                const SubIcon = subService.icon;
                                return (
                                  <Link
                                    key={subIdx}
                                    to={`/services/${activeService.slug}/${subService.slug}`}
                                    className="flex items-center gap-3 p-2.5 bg-white rounded-2xl border border-gray-200/70 hover:border-heading hover:shadow-md transition-all duration-300 group"
                                  >
                                    <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-heading group-hover:text-white transition-colors duration-300 flex-shrink-0">
                                      {SubIcon ? (
                                        <SubIcon className="text-lg text-heading group-hover:text-white transition-colors" />
                                      ) : (
                                        <div className="w-2 h-2 bg-heading rounded-full" />
                                      )}
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <span className="font-primary text-xs font-medium text-heading block group-hover:text-brand-primary transition-colors leading-tight">{subService.name}</span>
                                    </div>
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
              className="bg-heading text-white px-5 md:px-6 py-2.5 rounded-full font-medium text-sm md:text-base hover:opacity-90 transition-opacity shadow-md"
            >
              Book Appointment
            </Link>

            <div className="hidden md:flex w-10 h-10 rounded-full bg-heading items-center justify-center hover:opacity-90 transition-opacity shadow-md">
              <Link to="/contact">
                <IoArrowForwardOutline className="text-lg text-white -rotate-45" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - visible only on mobile */}
        <div className="flex lg:hidden items-center gap-2 justify-between px-4 pb-3">
          {headerMenu.map((item, index) => {
            const to = item.name === "Services" ? `/services/${services[0].slug}` : item.link;
            const active = item.name === "Services"
              ? location.pathname.startsWith("/services")
              : item.link === location.pathname;
            return (
              <Link
                key={index}
                to={to}
                className={`flex-1 text-center px-2 py-2 text-sm rounded-full font-medium transition-all duration-300 ${active
                  ? "bg-heading text-white"
                  : "text-body hover:bg-gray-100 hover:text-heading"
                  }`}
              >
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
