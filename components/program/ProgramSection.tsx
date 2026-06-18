import { getStrapiMedia } from "@/lib/api";
import { RenderHeading } from "@/components/shared/heading";
export interface Heading {
    title: string;
    subTitle: string;
}
export interface ProgramImage {
    url: string;
    caption?: string;

}
export interface ProgramCategory {
    slug: string;
    title: string;
}
export interface Program {
    slug: string;
    title: string;
    text: string;
    thumb?: ProgramImage;
    category_program?: ProgramCategory;
}
export interface ProgramSectionProps {
    heading: Heading;
    programs: Program[];
}
export default function ProgramSection({
    heading,
    programs,
}: ProgramSectionProps) {
    return (
        <section id="programs">
            <div className="programs-header fade-in">
                <RenderHeading heading={heading} />
            </div>

            <div className="programs-grid">
                {programs.map((program) => (
                    <div
                        key={program.slug}
                        className="program-card fade-in"
                    >
                        <div className="thumb">
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
                                />
                            )}
                        </div>

                        <div className="program-name">
                            {program.title}
                        </div>

                        <p className="program-desc">
                            {program.text}
                        </p>

                        {program.category_program && (
                            <span className="program-ages">
                                {program.category_program.title}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
