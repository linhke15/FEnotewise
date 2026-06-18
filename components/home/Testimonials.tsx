import { ReactNode } from "react";
import { RenderHeading } from "@/components/shared/heading";
interface TestimonialItem {
    description: string;
    initials: string;
    name: string;
    position: string;
}

interface CommunityBlock {
    heading: {
        title?: string;
        subtitle?: string;
        text?: string;
    }
    list?: TestimonialItem[];
}

interface TestimonialsSectionProps {
    data: CommunityBlock;
}

export default function TestimonialsSection({
    data,
}: TestimonialsSectionProps) {
    if (!data) return null;

    return (
        <section id="testimonials">
            <RenderHeading heading={data.heading} />

            <div className="testimonials-grid">
                {data.list?.map((testimonial, index) => (
                    <div
                        className="testimonial-card fade-in"
                        key={index}
                    >
                        <span className="stars">
                            ★★★★★
                        </span>

                        <span className="quote-mark">
                            "
                        </span>

                        <p className="testimonial-text">
                            {testimonial.description}
                        </p>

                        <div className="testimonial-author">
                            <div className="author-avatar">
                                {testimonial.initials}
                            </div>

                            <div>
                                <div className="author-name">
                                    {testimonial.name}
                                </div>

                                <div className="author-role">
                                    {testimonial.position}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}