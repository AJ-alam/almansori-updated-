import React from 'react';
import { BrandText } from './Brand';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'What a FANTASTIC dental practice! All the staff were super polite and friendly and the work that Dr Ayesha performed was such high quality.',
      name: 'Gordon Donaldson (Local Guide)',
      role: 'Dental Patient',
      image: '/clients/bc1.jpg'
    },
    {
      id: 2,
      quote: "Dr Aysha is perfectly professional, friendly and a straight talker. She took time to explain what she was going to do, and why. Her staff are friendly, professional, and helpful. I can't believe I'm saying this, but I'm looking forward to my next visit.",
      name: 'Patricia Gammeter',
      role: 'Dental Patient',
      image: '/clients/gc1.jpg'
    },
    {
      id: 3,
      quote: "I really recommend Almansoori clinic to everyone. It's a very good clinic, cooperative doctor — all of my family had a very nice experience and received the perfect treatment.",
      name: 'Shouq Almuhanadi',
      role: 'Family Patient',
      image: '/clients/gc2.jpg'
    },
    {
      id: 4,
      quote: "The dentist had a soft touch, there wasn't any pain when she did my teeth. Such good atmosphere and hospitality. The facials are so relaxing and the results were amazing.",
      name: 'Sara Ansari',
      role: 'Dental & Skincare Patient',
      image: '/clients/gc3.jpg'
    },
    {
      id: 5,
      quote: 'Excellent staff all over, from the doctors to the receptionist — very polite and friendly. Over 10 years following up with them.',
      name: 'Abdulrahman Masood',
      role: 'Long-Term Patient',
      image: '/clients/bc2.jpg'
    },
    {
      id: 6,
      quote: 'One of the top-tier dental clinics in Bahrain, boasting highly skilled and qualified doctors and staff.',
      name: 'Sattam Al-Malood (Local Guide)',
      role: 'Dental Patient',
      image: '/clients/bc3.jpg'
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="mx-auto">

        {/* Section Header */}
        <h2 className="section-heading text-center mt-8 mb-16">
          What Our Patients<br />Say About Us
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="text-heading"
                >
                  <path
                    d="M12 28C12 24.6863 14.6863 22 18 22C21.3137 22 24 24.6863 24 28C24 31.3137 21.3137 34 18 34C14.6863 34 12 31.3137 12 28ZM18 22C18 17 21 14 26 14V18C23 18 22 19 22 22H18Z"
                    fill="currentColor"
                  />
                  <path
                    d="M26 28C26 24.6863 28.6863 22 32 22C35.3137 22 38 24.6863 38 28C38 31.3137 35.3137 34 32 34C28.6863 34 26 31.3137 26 28ZM32 22C32 17 35 14 40 14V18C37 18 36 19 36 22H32Z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              {/* Testimonial Text */}
              <p className="text-body text-sm md:text-base leading-relaxed mb-8">
                <BrandText>{testimonial.quote}</BrandText>
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-secondary-700 text-heading text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-body-light text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
