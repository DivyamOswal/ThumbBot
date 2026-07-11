import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialsData } from "../data/testimonial";
import type { ITestimonial } from "../types";
import Marquee from "react-fast-marquee";

export default function TestimonialSection() {
    return (
        <div id="testimonials" className="px-4 md:px-16 lg:px-24 xl:px-32 relative">
            <div className="absolute -z-10 size-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[140px]"></div>

            <SectionTitle text1="Testimonials" text2="Don't just take our words" text3="Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review." />

            <div className="mt-11 space-y-2">
                <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} gradientColor="#000000">
                    <div className="flex items-center justify-center py-5 overflow-hidden">
                        {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                            <TestimonialCard key={index} index={index} testimonial={testimonial} />
                        ))}
                    </div>
                </Marquee>
                <Marquee className="max-w-5xl mx-auto" gradient={true} speed={25} direction="right" gradientColor="#000000">
                    <div className="flex items-center justify-center py-5 overflow-hidden">
                        {[...testimonialsData, ...testimonialsData].map((testimonial: ITestimonial, index: number) => (
                            <TestimonialCard key={index} index={index} testimonial={testimonial} />
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
}