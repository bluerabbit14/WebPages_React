import React, { useState, useEffect, useRef, useCallback } from 'react';

const slides = [
    {
        id: 1,
        tag: 'Experiences',
        title: 'Transit exclusive - Discover Doha',
        description: 'Discover the unique heritage of Downtown Doha as you wander through the vibrant labyrinth of alleyways of Souq Waqif.',
        price: '3,711',
        currencySymbol: '₹',
        priceSuffix: 'per person',
        ctaText: 'Learn more',
        imageUrl: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 2,
        tag: 'Experiences',
        title: 'Desert Adventure - Dune Bashing',
        description: 'Experience the thrill of racing across golden sand dunes and enjoy a traditional sunset in the heart of the desert.',
        price: '4,500',
        currencySymbol: '₹',
        priceSuffix: 'per person',
        ctaText: 'Learn more',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    },
    {
        id: 3,
        tag: 'Experiences',
        title: 'City Highlights - Doha Night Tour',
        description: 'See the stunning skyline of Doha illuminated at night, visiting iconic landmarks and vibrant waterfront promenades.',
        price: '2,800',
        currencySymbol: '₹',
        priceSuffix: 'per person',
        ctaText: 'Learn more',
        imageUrl: 'https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?q=80&w=1974&auto=format&fit=crop',
    },
    {
        id: 4,
        tag: 'Experiences',
        title: 'Cultural Walk - Souq Waqif Experience',
        description: 'Immerse yourself in the local culture, spice markets, and traditional architecture of the most famous market in Doha.',
        price: '1,500',
        currencySymbol: '₹',
        priceSuffix: 'per person',
        ctaText: 'Learn more',
        imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea023?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 5,
        tag: 'Experiences',
        title: 'Luxury Escape - Pearl Qatar Cruise',
        description: 'Relax on a private yacht cruise around the luxurious Pearl Qatar island, enjoying the best views of the Arabian Gulf.',
        price: '8,900',
        currencySymbol: '₹',
        priceSuffix: 'per person',
        ctaText: 'Learn more',
        imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2015&auto=format&fit=crop',
    },
];

export default function PackageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const timerRef = useRef(null);

    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 4000);
    }, []);

    useEffect(() => {
        if (!isPaused) {
            startTimer();
        } else {
            if (timerRef.current) clearInterval(timerRef.current);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPaused, startTimer]);

    const handleManualNav = (index) => {
        setCurrentIndex(index);
        startTimer();
    };

    const nextSlide = () => {
        handleManualNav((currentIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        handleManualNav((currentIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const activeSlide = slides[currentIndex];

    return (
        <section className="w-full bg-gray-100 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main Carousel Card */}
                <div
                    className="relative overflow-hidden rounded-2xl shadow-2xl flex flex-col md:flex-row h-auto md:h-[500px] transition-all duration-500 ease-in-out"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Left Panel - Content */}
                    <div className="w-full md:w-[45%] bg-[#6b0026] text-white p-8 md:p-12 flex flex-col justify-between relative z-10">
                        <div>
                            <span className="inline-block bg-white/20 text-white text-xs px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
                                {activeSlide.tag}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight transition-opacity duration-300">
                                {activeSlide.title}
                            </h2>
                            <p className="text-sm md:text-base text-white/80 line-clamp-3 mb-8">
                                {activeSlide.description}
                            </p>
                        </div>

                        <div className="flex items-end justify-between">
                            <div>
                                <p className="text-xs uppercase opacity-70 mb-1">From</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl md:text-3xl font-bold">{activeSlide.currencySymbol}{activeSlide.price}</span>
                                    <span className="text-xs opacity-70">{activeSlide.priceSuffix}</span>
                                </div>
                            </div>
                            <button
                                className="px-6 py-2 border border-white rounded-full text-sm font-semibold hover:bg-white hover:text-[#6b0026] transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                                aria-label={`Learn more about ${activeSlide.title}`}
                            >
                                {activeSlide.ctaText}
                            </button>
                        </div>
                    </div>

                    {/* Right Panel - Image */}
                    <div className="w-full md:w-[55%] relative h-64 md:h-full overflow-hidden">
                        {slides.map((slide, idx) => (
                            <img
                                key={slide.id}
                                src={slide.imageUrl}
                                alt={slide.title}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Thumbnails Row */}
                <div className="mt-8 flex items-center justify-between gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    <div className="flex gap-4">
                        {slides.map((slide, idx) => (
                            <button
                                key={slide.id}
                                onClick={() => handleManualNav(idx)}
                                className={`relative w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#6b0026] ${idx === currentIndex
                                        ? 'ring-2 ring-[#6b0026] opacity-100 scale-105'
                                        : 'opacity-50 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={slide.imageUrl}
                                    alt={`Thumbnail ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-3">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full bg-[#6b0026] text-white flex items-center justify-center hover:bg-[#8c0026] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6b0026]/50"
                            aria-label="Previous slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full bg-[#6b0026] text-white flex items-center justify-center hover:bg-[#8c0026] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6b0026]/50"
                            aria-label="Next slide"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
