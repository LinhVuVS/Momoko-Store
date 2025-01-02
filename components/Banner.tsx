"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    { id: 1, imageUrl: "banner/banner1.jpg", altText: "Banner 1" },
    { id: 2, imageUrl: "banner/banner2.jpg", altText: "Banner 2" },
    { id: 3, imageUrl: "banner/banner3.jpg", altText: "Banner 3" },
    { id: 4, imageUrl: "banner/banner4.jpg", altText: "Banner 4" },
    { id: 5, imageUrl: "banner/banner5.jpg", altText: "Banner 5" },
    { id: 6, imageUrl: "banner/banner6.jpg", altText: "Banner 6" },
];

const autoSlide = true;
const autoSlideInterval = 3000;

const BannerSlider: React.FC = () => {
    const [curr, setCurr] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const startX = useRef<number | null>(null);
    const translateX = useRef<number | null>(null);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    // Auto slide
    useEffect(() => {
        if (!autoSlide || isDragging) return;

        const slideInterval = setInterval(() => {
            next();
        }, autoSlideInterval);

        return () => clearInterval(slideInterval);
    }, [curr, isDragging]);

    // Drag/Swipe Handlers
    const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        startX.current = clientX;
        translateX.current = 0;
        setIsDragging(true);
    };

    const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (!isDragging || startX.current === null) return;

        const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
        translateX.current = clientX - startX.current;
    };

    const handleTouchEnd = () => {
        if (!isDragging || translateX.current === null) return;

        if (translateX.current > 50) {
            prev();
        } else if (translateX.current < -50) {
            next();
        }

        startX.current = null;
        translateX.current = null;
        setIsDragging(false);
    };

    return (
        <div
            className="relative max-w-[1400px] flex m-auto overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={(e) => isDragging && handleTouchMove(e)}
            onMouseUp={handleTouchEnd}
            onMouseLeave={handleTouchEnd}
        >
            {/* Slides */}
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((slide) => (
                    <img key={slide.id} src={slide.imageUrl} alt={slide.altText} className="w-full object-cover" />
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between">
                <button
                    onClick={prev}
                    className="p-2 rounded-full bg-transparent border border-solid border-white shadow-md hover:bg-[#2f6950] transition-all duration-300 hidden sm:block"
                >
                    <ChevronLeft size={40} color="white" />
                </button>
                <button
                    onClick={next}
                    className="p-2 rounded-full bg-transparent border border-solid border-white shadow-md hover:bg-[#2f6950] transition-all duration-300 hidden sm:block"
                >
                    <ChevronRight size={40} color="white" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setCurr(i)}
                        className={`cursor-pointer w-3 h-3 rounded-full transition-all duration-500 ${
                            curr === i ? "bg-gray-800 scale-125" : "bg-gray-400"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default BannerSlider;
