import { ComponentType } from "react";
import { RenderHeading } from "@/components/shared/heading";
interface CTAButton {
    name: string;
    link?: string;
    style?: string;
}

interface BeginBlock {
    heading: unknown;
    button?: CTAButton[];
}

interface CTASectionProps {
    data?: BeginBlock;
}

export default function Begin({
    data,
}: CTASectionProps) {
    if (!data) return null;

    return (
        <section id="cta">
            <RenderHeading heading={data.heading} />

            <div className="cta-btns">
                {data.button?.map((btn, index) => (
                    <a
                        key={index}
                        href={btn.link || "#"}
                        className={btn.style}
                    >
                        {btn.name}
                    </a>
                ))}
            </div>
        </section>
    );
}