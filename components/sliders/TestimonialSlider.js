import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { testimonialData } from '@/data/TestimonialData';

const TestimonialSlider = () => {

    const testimonials = testimonialData;

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative">
            <motion.section mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="px-8 pb-12 mx-auto bg-white rounded-lg shadow-lg"
                >
                    <div className="mx-auto max-w-3xl">
                        <p className="mb-8 text-lg text-center text-gray-700 md:text-xl font-inter">
                            {testimonials[currentIndex].content}
                        </p>

                        <div className="flex gap-4 justify-center items-center">
                            <Image
                                src={testimonials[currentIndex].image}
                                alt={testimonials[currentIndex].author}
                                className="w-16 h-16 rounded-full"
                                width={64}
                                height={64}
                            />
                            <div>
                                <h3 className="text-lg font-semibold font-inter">
                                    {testimonials[currentIndex].author}
                                </h3>
                                <p className="text-gray-600 font-inter">
                                    {testimonials[currentIndex].position}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.section>

            <button
                onClick={handlePrevious}
                className="absolute left-10 top-1/2 p-2 bg-white rounded-full shadow-lg transition-colors -translate-x-4 -translate-y-1/2 md:-translate-x-8 hover:bg-gray-50"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-10 top-1/2 p-2 bg-white rounded-full shadow-lg transition-colors translate-x-4 -translate-y-1/2 md:translate-x-8 hover:bg-gray-50"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </div>
    );
};

export default TestimonialSlider;