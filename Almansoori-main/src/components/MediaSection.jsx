import React, { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const MediaSection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    // Gallery images - Using JPG and PNG formats
    const mediaItems = [
        { src: "/gallery/IMG_0546.JPG", title: "Achievement" },
        { src: "/gallery/IMG_0951.JPG", title: "Media Feature" },
        { src: "/gallery/IMG_3831.JPG", title: "Recognition" },
        { src: "/gallery/IMG_3836.PNG", title: "Award Ceremony" },
        { src: "/gallery/IMG_5013.PNG", title: "Press Coverage" },
        { src: "/gallery/IMG_5794.png", title: "Achievement" },
        { src: "/gallery/IMG_6401.PNG", title: "Media Appearance" },
        { src: "/gallery/IMG_6454.PNG", title: "Recognition" },
        { src: "/gallery/IMG_7490.PNG", title: "Press Feature" },
    ];

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setSelectedImage(mediaItems[index]);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % mediaItems.length;
        setCurrentIndex(newIndex);
        setSelectedImage(mediaItems[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
        setCurrentIndex(newIndex);
        setSelectedImage(mediaItems[newIndex]);
    };

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 350;
            carouselRef.current.scrollBy({
                left: direction === 'next' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-10 md:py-14 px-4 md:px-9 bg-brand-primary-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-primary-300 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="text-center md:text-left">
                        <h2 className="font-primary text-3xl md:text-5xl text-white whitespace-normal md:whitespace-nowrap">In Media</h2>
                    </div>

                    {/* Carousel Navigation */}
                    <div className="flex items-center gap-3 mt-4 md:mt-0 justify-center md:justify-end">
                        <button
                            onClick={() => scrollCarousel('prev')}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-brand-primary-300 text-white hover:text-brand-primary-950 flex items-center justify-center transition-all duration-300"
                        >
                            <FaChevronLeft className="text-lg" />
                        </button>
                        <button
                            onClick={() => scrollCarousel('next')}
                            className="w-12 h-12 rounded-full bg-white/10 hover:bg-brand-primary-300 text-white hover:text-brand-primary-950 flex items-center justify-center transition-all duration-300"
                        >
                            <FaChevronRight className="text-lg" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={carouselRef}
                    className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {mediaItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="flex-shrink-0 w-[300px] md:w-[350px] group cursor-pointer"
                        >
                            <div className="relative h-[380px] md:h-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-950/90 via-brand-primary-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h4 className="text-white font-primary text-xl mb-2">{item.title}</h4>
                                        <span className="text-brand-primary-300 text-sm font-medium">Click to View</span>
                                    </div>
                                </div>

                                {/* Gold Corner Accent */}
                                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-brand-primary-300/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100">
                                    <span className="text-brand-primary-950 font-bold text-sm">{index + 1}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 text-white hover:text-brand-primary-300 transition-colors z-50"
                    >
                        <MdClose className="text-4xl" />
                    </button>

                    {/* Navigation */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 md:left-8 text-white hover:text-brand-primary-300 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20"
                    >
                        <FaChevronLeft className="text-2xl" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 md:right-8 text-white hover:text-brand-primary-300 transition-colors p-3 bg-white/10 rounded-full hover:bg-white/20"
                    >
                        <FaChevronRight className="text-2xl" />
                    </button>

                    {/* Image */}
                    <img
                        src={selectedImage.src}
                        alt={selectedImage.title}
                        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Info Bar */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-4">
                        <span className="text-white font-medium">{selectedImage.title}</span>
                        <span className="text-white/50">|</span>
                        <span className="text-white/70 text-sm">{currentIndex + 1} / {mediaItems.length}</span>
                    </div>
                </div>
            )}
        </section>
    );
};

export default MediaSection;
