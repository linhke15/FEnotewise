import { RenderHeading } from "@/components/shared/heading";

interface TimelineItem {
    title: string;
    description: string;
}

interface Heading {
    title?: string;
    subtitle?: string;
    [key: string]: any;
}

interface ProcessSectionProps {
    heading: Heading;
    timelines: TimelineItem[];
}

export default function ProcessSection({
    heading,
    timelines,
}: ProcessSectionProps) {
    return (
        <section id="process">
            <RenderHeading heading={heading} />

            <div className="process-steps">
                {timelines?.map((item, index) => (
                    <div key={index} className="process-step fade-in">
                        <div className="step-num">{index + 1}</div>

                        <div className="step-title">
                            {item.title}
                        </div>

                        <p className="step-desc">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}