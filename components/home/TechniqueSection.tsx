import Link from "next/link";
import { RenderHeading } from "@/components/shared/heading";

interface Heading {
    title: string;
    subtitle?: string;
    text?: string;
}

interface ButtonSingle {
    name: string;
    link: string;
    style?: string;
}

interface TechniqueBox {
    title: string;
    description: string;
}

export interface TechniqueBlock {
    heading: Heading;
    bgSection?: string;
    buttonSingle?: ButtonSingle;
    boxs?: TechniqueBox[];
}

interface TechniqueSectionProps {
    techniqueBlock: TechniqueBlock;
}

export default function TechniqueSection({
    techniqueBlock,
}: TechniqueSectionProps) {
    if (!techniqueBlock) return null;

    return (
        <section
            id="why"
            className={techniqueBlock.bgSection}
        >
            <div className="why-grid">
                <div className="fade-in heading-dark">
                    <RenderHeading
                        heading={techniqueBlock.heading}
                    />

                    {techniqueBlock.buttonSingle && (
                        <Link
                            href={
                                techniqueBlock
                                    .buttonSingle.link || "#"
                            }
                            className={
                                techniqueBlock
                                    .buttonSingle.style
                            }
                            style={{
                                display: "inline-flex",
                                marginTop: "2rem",
                            }}
                        >
                            {
                                techniqueBlock
                                    .buttonSingle.name
                            }

                            <span
                                style={{
                                    marginLeft: "8px",
                                }}
                            >
                                →
                            </span>
                        </Link>
                    )}
                </div>

                <div className="why-features fade-in">
                    {techniqueBlock.boxs?.map(
                        (item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                className="why-feature"
                            >
                                <span className="why-num">
                                    {String(
                                        index + 1
                                    ).padStart(
                                        2,
                                        "0"
                                    )}
                                </span>

                                <h4>
                                    {item.title}
                                </h4>

                                <p>
                                    {
                                        item.description
                                    }
                                </p>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}