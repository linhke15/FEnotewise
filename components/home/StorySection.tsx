import Image from "next/image";
import { RenderHeading } from "@/components/shared/heading";
import { getStrapiMedia } from "@/lib/api";

interface Heading {
    title: string;
    subtitle?: string;
}

interface Media {
    url: string;
    caption?: string;
}

interface AboutItem {
    title: string;
    description: string;
    icon?: Media;
}

export interface AboutBlock {
    heading: Heading;
    image?: Media;
    title_r?: string;
    text_r?: string;
    lists_item?: AboutItem[];
}

interface AboutSectionProps {
    aboutBlock: AboutBlock;
}

export default function AboutSection({
    aboutBlock,
}: AboutSectionProps) {
    if (!aboutBlock) return null;

    return (
        <section id="about">
            <div className="about-visual fade-in">
                <div className="about-img-frame">
                    {aboutBlock.image?.url ? (
                        <Image
                            src={
                                getStrapiMedia(
                                    aboutBlock.image.url
                                ) || ""
                            }
                            alt={
                                aboutBlock.image.caption ||
                                "About Image"
                            }
                            fill
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    ) : (
                        <div className="music-illustration">
                            <span className="big-clef">
                                𝄢
                            </span>
                        </div>
                    )}
                </div>

                <div className="about-badge">
                    <strong>
                        {aboutBlock.title_r || "ABRSM"}
                    </strong>

                    {aboutBlock.text_r ||
                        "Registered Exam Centre"}
                </div>
            </div>

            <div className="about-content fade-in">
                <RenderHeading
                    heading={aboutBlock.heading}
                />

                <div className="about-values">
                    {aboutBlock.lists_item?.map(
                        (item, index) => (
                            <div
                                key={`${item.title}-${index}`}
                                className="value-item"
                            >
                                <div className="value-icon">
                                    {item.icon?.url ? (
                                        <Image
                                            src={
                                                getStrapiMedia(
                                                    item.icon.url
                                                ) || ""
                                            }
                                            alt={
                                                item.icon
                                                    .caption ||
                                                item.title
                                            }
                                            width={24}
                                            height={24}
                                        />
                                    ) : (
                                        "🎯"
                                    )}
                                </div>

                                <div className="value-text">
                                    <strong>
                                        {item.title}
                                    </strong>

                                    <span>
                                        {
                                            item.description
                                        }
                                    </span>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}