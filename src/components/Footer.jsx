import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaGoogle, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import Brand, { BrandText } from './Brand';
import { services } from '../data/services';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  const handleServiceClick = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.dispatchEvent(new CustomEvent('openServicesDropdown', { detail: { index } }));
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openServicesDropdown', { detail: { index } }));
    }, 150);
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Packages', path: '/offers' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/almansooridentalcentre/', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/almansoorimedical/?hl=en', label: 'Instagram' },
    { icon: FaGoogle, href: 'https://www.google.com/search?q=AlMansoori+Medical+Bahrain', label: 'Google' },
  ];

  const mapUrl = 'https://www.google.com/maps/place/Almansoori+Dental+and+Medical/@26.1300673,50.5574876,17z/data=!3m1!4b1!4m6!3m5!1s0x3e49ac4a1e62d0b1:0x22920f5d00f2ccb!8m2!3d26.1300625!4d50.5600625!16s%2Fg%2F11cmqnxkp_?entry=ttu&g_ep=EgoyMDI2MDkyMi4wIKXMDSoASAFQAw%3D%3D';

  return (
    <footer className="bg-heading text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      {/* Main Footer Content */}
      <div className="py-10 md:py-14 px-4 md:px-9 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-6 group">
                <img src="/images/logo_gradient.svg" alt="AlMansoori" className="h-12" />
                <span className="font-primary text-2xl group-hover:opacity-80 transition-opacity"><Brand /></span>
              </Link>
              <p className="text-white/70 leading-relaxed mb-6">
                Your trusted partner in comprehensive medical and dental care. Creating confident smiles since 1997.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 bg-white/10 hover:bg-white rounded-xl flex items-center justify-center transition-all duration-300 group"
                    >
                      <Icon className="text-white group-hover:text-heading transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-primary text-lg md:text-xl text-white mb-4 font-bold">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors block group"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-primary text-lg md:text-xl text-white mb-4 font-bold">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      data-services-trigger="true"
                      onClick={(e) => handleServiceClick(e, index)}
                      className="text-white/70 hover:text-white transition-colors block text-left cursor-pointer group"
                    >
                      <span className="group-hover:translate-x-1 inline-block transition-transform">{service.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-primary text-lg md:text-xl text-white mb-4 font-bold">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+97317760666" className="flex items-start gap-4 text-white/70 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <FaPhone className="text-white group-hover:text-heading transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Call Us</p>
                      <p className="font-medium">+973 1776 0666</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/97332221676" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-white/70 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <FaWhatsapp className="text-white group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">WhatsApp Us</p>
                      <p className="font-medium">+973 3222 1676</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 text-white/70 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <FaMapMarkerAlt className="text-white group-hover:text-heading transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Visit Us</p>
                      <p className="font-medium">Bldg 1267, Road 1319, Block 913 - East Riffa, Kingdom Of Bahrain</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@almansoorimedical.bh" className="flex items-start gap-4 text-white/70 hover:text-white transition-colors group">
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <FaEnvelope className="text-white group-hover:text-heading transition-colors" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Email Us</p>
                      <p className="font-medium">info@almansoorimedical.bh</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-4 text-white/70">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Working Hours</p>
                      <p className="font-medium">9AM - 7PM</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/50 text-sm text-center md:text-left">
                © 2025 <BrandText>AlMansoori</BrandText> Medical. All Rights Reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-white/50 hover:text-white text-sm transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
