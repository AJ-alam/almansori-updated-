import { useParams, Link, useLocation } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import BulletText from "../components/BulletText";
import { BrandText } from "../components/Brand";
import { services } from "../data/services";
import { useEffect } from "react";

const ServiceDetail = () => {
    const { slug, subSlug } = useParams();
    const { hash } = useLocation();

    // Find the main service category
    const service = services.find(
        (s) => s.title.toLowerCase() === slug?.toLowerCase() || s.slug === slug
    );

    // If sub-service slug exists, find the sub-service info
    const subService = subSlug && service?.subServices?.find(
        (sub) => sub.slug === subSlug
    );

    // Handle anchor scrolling
    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 500); // Small delay to ensure content is fully rendered
            }
        }
    }, [hash, subService]);

    // If service not found, show a message
    if (!service) {
        return (
            <section className="w-full min-h-screen pt-28 lg:pt-24">
                <div className="section-padding text-center py-20">
                    <h2 className="text-2xl text-brand-primary-950 mb-4">
                        Service not found
                    </h2>
                    <Link to="/services/dental" className="primary-btn">
                        <span>View All Services</span>
                    </Link>
                </div>
            </section>
        );
    }

    const Icon = service.icon;
    const SubIcon = subService?.icon;

    // Display title - show sub-service name if on sub-service page
    const displayTitle = subService ? subService.name : service.title;
    const displayDescription = subService?.fullDescription || subService?.description || service.fullDescription || service.description;

    // Get treatments to display - sub-service specific or main service treatments
    const displayTreatments = subService ? subService.treatments : service.treatments;
    const displayFAQs = subService ? subService.faqs : service.faqs;

    return (
        <section className="w-full min-h-screen pt-28 lg:pt-24">
            {/* Main Content Section */}
            <div className="section-padding">
                <div className="max-w-6xl mx-auto">

                    {/* Service/Sub-Service Overview */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Left - Content */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
                                    {SubIcon ? (
                                        <SubIcon className="text-3xl text-heading" />
                                    ) : (
                                        <Icon className="text-3xl text-heading" />
                                    )}
                                </div>
                                <div>
                                    <h1 className="font-primary text-3xl md:text-4xl text-heading">
                                        {displayTitle}
                                    </h1>
                                </div>
                            </div>

                            <p className="text-gray-700 text-base leading-snug">
                                <BrandText>{displayDescription}</BrandText>
                            </p>

                            <Link to="/contact" className="primary-btn inline-block">
                                <span>Book Consultation</span>
                            </Link>
                        </div>

                        {/* Right - Image */}
                        <div className="relative">
                            <div className="bg-gray-100 rounded-3xl overflow-hidden h-[350px] md:h-[400px] border border-gray-200">
                                <img
                                    src={service.overviewImage || service.headerImage}
                                    alt={displayTitle}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Treatments Section (sub-service specific treatments) */}
                    {subService && displayTreatments && displayTreatments.length > 0 && (
                        <div className="mb-16">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center whitespace-normal md:whitespace-nowrap">
                                Treatments
                            </h2>
                            <div className={`grid gap-6 items-stretch ${displayTreatments.length === 2 ? 'grid-cols-1 sm:grid-cols-2' : displayTreatments.length === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'}`}>
                                {displayTreatments.map((treatment, index) => {
                                    const treatmentId = treatment.name.toLowerCase().includes("fed") 
                                        ? "fed" 
                                        : treatment.name.toLowerCase().split(' ').join('-');

                                    return (
                                        <div
                                            key={index}
                                            id={treatmentId}
                                            className={`bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full ${treatment.featured ? 'ring-2 ring-heading' : ''}`}
                                        >
                                            <div>
                                                {treatment.image && (
                                                    <div className="h-52 w-full overflow-hidden flex-shrink-0 bg-gray-100">
                                                        <img
                                                            src={treatment.image}
                                                            alt={treatment.name}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                )}
                                                <div className="p-6">
                                                    <h3 className="font-primary text-xl text-heading mb-3 font-bold min-h-[2.5rem]">
                                                        {treatment.name}
                                                    </h3>
                                                    {treatment.description && (
                                                        <div className="text-sm text-gray-600 leading-relaxed mb-4">
                                                            <BulletText text={treatment.description} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="p-6 pt-0 mt-auto">
                                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                                    {(treatment.price || treatment.price === 0) && (
                                                        <span className="bg-gray-100 text-heading px-4 py-1.5 rounded-full text-base font-extrabold">
                                                            {typeof treatment.price === 'number' ? `${treatment.price} BD` : treatment.price}
                                                        </span>
                                                    )}
                                                    {treatment.featured && (
                                                        <span className="text-xs bg-heading text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                                                            Popular
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* All Sub-Services Section - Compact Grid visible at a glance */}
                    {service.subServices && service.subServices.length > 0 && (
                        <div className="mb-16">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-6 text-center whitespace-normal md:whitespace-nowrap">
                                Treatments
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
                                {service.subServices.map((sub, index) => {
                                    const SubServiceIcon = sub.icon;
                                    const isCurrent = sub.slug === subSlug;
                                    return (
                                        <Link
                                            key={index}
                                            to={`/services/${service.slug}/${sub.slug}`}
                                            className={`bg-white border ${isCurrent ? 'border-heading ring-2 ring-heading shadow-md' : 'border-gray-200/80'} rounded-2xl p-4 hover:shadow-lg hover:border-heading transition-all duration-300 group flex flex-col justify-between h-full`}
                                        >
                                            <div>
                                                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-heading group-hover:text-white transition-colors duration-300">
                                                    <SubServiceIcon className="text-xl text-heading group-hover:text-white transition-colors" />
                                                </div>
                                                <h3 className="font-primary text-base font-bold text-heading leading-tight mb-1.5 group-hover:text-brand-primary transition-colors">
                                                    {sub.name}
                                                </h3>
                                            </div>
                                            {sub.description && (
                                                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mt-1">
                                                    {sub.description}
                                                </p>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* FAQ Section */}
                    {displayFAQs && displayFAQs.length > 0 && (
                        <div className="mb-16">
                            <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center whitespace-normal md:whitespace-nowrap">
                                Frequently Asked Questions
                            </h2>
                            <div className="max-w-3xl mx-auto space-y-4">
                                {displayFAQs.map((faq, index) => (
                                    <div key={index} className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-sm">
                                        <h3 className="font-secondary-700 text-lg text-heading mb-2 font-bold">
                                            {faq.q}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Section */}
                    <div className="bg-heading rounded-3xl p-8 md:p-12 text-center">
                        <h2 className="font-primary text-2xl md:text-3xl text-white mb-4 whitespace-normal md:whitespace-nowrap">
                            Ready to Get Started?
                        </h2>
                        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                            Take the first step towards a healthier, more beautiful smile.
                            Book your consultation with <BrandText>Dr. Aysha AlMansoori</BrandText> today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="primary-btn">
                                <span>Book Appointment</span>
                            </Link>
                            <a href="tel:+97317760666" className="outline-btn">
                                <span>Call 17760666</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Services */}
            <div className="py-12 px-4 md:px-8 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="font-primary text-2xl md:text-3xl text-heading mb-8 text-center whitespace-normal md:whitespace-nowrap">
                        Explore Our Other Services
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                        {services.filter(s => s.slug !== service.slug).slice(0, 3).map((otherService, index) => {
                            const OtherIcon = otherService.icon;
                            return (
                                <Link
                                    key={index}
                                    to={`/services/${otherService.slug}`}
                                    className="bg-white border border-gray-200/80 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full"
                                >
                                    <div>
                                        <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-heading group-hover:text-white transition-colors duration-300">
                                            <OtherIcon className="text-2xl text-heading group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="font-primary text-xl text-heading mb-2 font-bold">
                                            {otherService.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm line-clamp-3">
                                            {otherService.description}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceDetail;
