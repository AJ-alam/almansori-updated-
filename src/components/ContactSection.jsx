import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaPhone, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { BrandText } from "./Brand";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://almansoori.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message || 'Message sent successfully!');
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-10 md:py-14 px-4 md:px-9 bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="font-primary text-4xl md:text-5xl lg:text-6xl text-heading leading-tight whitespace-normal md:whitespace-nowrap">
              get in touch
            </h2>

            {/* Description */}
            <p className="text-body text-base md:text-lg leading-relaxed max-w-md">
              Ready to schedule your appointment? Contact us today and take the
              first step towards your perfect smile.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+97317760666" className="flex items-center gap-3 text-heading hover:text-brand-primary transition-colors group">
                <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <FaPhone className="text-lg" />
                </div>
                <span className="font-secondary-600">+973 1776 0666</span>
              </a>
              
              <a href="https://wa.me/97332221676" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-heading hover:text-green-500 transition-colors group">
                <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-all">
                  <FaWhatsapp className="text-xl" />
                </div>
                <span className="font-secondary-600">+973 3222 1676</span>
              </a>

              <a href="https://www.bing.com/maps/search?q=Bldg+No+1267%2C+Road+1319%2C+Block+913+-+East+Riffa%2C+Kingdom+Of+Bahrain&cp=26.131527~50.550343&lvl=21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-heading hover:text-brand-primary transition-colors group">
                <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <span><BrandText>AlMansoori</BrandText> Medical W.L.L, Bldg 1267, Road 1319, Block 913 - East Riffa, Bahrain</span>
              </a>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-heading font-secondary-600 mb-4">
                Follow Our Socials
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/almansooridentalcentre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-heading rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/almansoorimedical/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-heading rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Support Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white shadow-md rounded-full flex-shrink-0 flex items-center justify-center text-heading text-xl">
                  <FaPhone />
                </div>
                <span className="font-secondary-600 text-heading">
                  Call Us Anytime
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white shadow-md rounded-full flex-shrink-0 flex items-center justify-center text-green-500 text-2xl">
                  <FaWhatsapp />
                </div>
                <span className="font-secondary-600 text-heading">
                  WhatsApp Us
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-heading rounded-3xl p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-2 border-white/30 rounded-full px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                required
              />

              {/* Phone and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border-2 border-white/30 rounded-full px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-2 border-white/30 rounded-full px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Enter Message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-transparent border-2 border-white/30 rounded-3xl px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-white text-heading px-6 py-2.5 rounded-full font-medium hover:bg-gray-100 transition-colors"
                disabled={isLoading}
              >
                <span>{isLoading ? 'Sending...' : 'Submit'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
