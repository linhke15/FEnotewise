import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/api";
interface HeroHeading {
    title: string;
    subtitle?: string;
    text?: string;
}

interface HeroButton {
    name: string;
    link: string;
    style?: string;
}
export interface ProgramImage {
    url: string;
    caption?: string;

}
interface HeroStat {
    title: string;
    description: string;
}

export interface BannerBlock {
    heading: HeroHeading;
    button?: HeroButton[];
    list_item?: HeroStat[];
}
export interface Program {
    slug: string;
    title: string;
    thumb?: ProgramImage;
}
interface HeroSectionProps {
    bannerBlock: BannerBlock;
    programs: Program[];
}

export default function HeroSection({
    bannerBlock,
    programs,
}: HeroSectionProps) {
    if (!bannerBlock) return null;

    return (
        <section id="hero">
            <div className="hero-content">
                <div className="hero-tag">
                    {bannerBlock.heading?.subtitle}

                </div>

                <h1
                    className="hero-title hightline"
                    dangerouslySetInnerHTML={{
                        __html:
                            bannerBlock.heading?.title

                    }}
                />

                <p className="hero-sub">
                    {bannerBlock.heading?.text}
                </p>

                <div className="hero-ctas">
                    {bannerBlock.button?.map(
                        (btn, index) => (
                            <Link
                                key={`${btn.name}-${index}`}
                                href={btn.link || "#"}
                                className={btn.style}
                            >
                                {btn.name}
                            </Link>
                        )
                    )}
                </div>
            </div>

            <div className="hero-visual">
                <div className="hero-card">
                    <span className="hero-card-note">
                        𝄞
                    </span>

                    <div className="hero-stats">
                        {bannerBlock.list_item?.map(
                            (item, index) => (
                                <div
                                    className="stat"
                                    key={`${item.title}-${index}`}
                                >
                                    <span className="stat-num">
                                        {item.title}
                                    </span>

                                    <span className="stat-label">
                                        {item.description}
                                    </span>
                                </div>
                            )
                        )}
                    </div>

                    <div className="hero-instruments">
                        {programs.map((program) => (
                            <div
                                key={program.slug}
                                className="instrument-tag"
                            >
                                {program.thumb?.url && (
                                    <img
                                        src={
                                            getStrapiMedia(
                                                program.thumb.url
                                            ) || ""
                                        }
                                        alt={
                                            program.thumb.caption ||
                                            program.title
                                        }
                                        className="program-icon"
                                    />)}

                                <span>{program.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}