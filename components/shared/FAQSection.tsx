import { ComponentType } from "react";
import { Faq } from "@/components/Faq";
import { RenderHeading } from "@/components/shared/heading";

interface FAQItem {
    title: string;
    content: any;
}

interface QuestionBlock {
    heading: unknown;
    faq?: FAQItem[];
}

interface FAQSectionProps {
    data: QuestionBlock;
}

export default function FAQSection({
    data,

}: FAQSectionProps) {
    if (!data) return null;

    return (
        <section
            id="faq"
            style={{ maxWidth: "100%" }}
        >
            <div
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                }}
            >
                <div className="faq-header fade-in">
                    <RenderHeading
                        heading={data.heading}
                    />
                </div>

                <Faq faq={data.faq} />
            </div>
        </section>
    );
}