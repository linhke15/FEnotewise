import { RenderHeading } from "@/components/shared/heading";

interface Heading {
    title: string;
    subtitle?: string;
    text?: string;
}

interface TeamMember {
    id?: number;
    name: string;
    initials?: string;
    level?: string;
    description?: string;
    position?: string;
}

export interface TeamBlock {
    heading: Heading;
    list_team?: TeamMember[];
}

interface TeamSectionProps {
    teamBlock: TeamBlock;
}

export default function TeamSection({
    teamBlock,
}: TeamSectionProps) {
    if (!teamBlock) return null;

    return (
        <section id="instructors">
            <RenderHeading
                heading={teamBlock.heading}
            />

            <div className="instructors-grid">
                {teamBlock.list_team?.map(
                    (member, index) => (
                        <div
                            key={
                                member.id ||
                                `${member.name}-${index}`
                            }
                            className="instructor-card fade-in"
                        >
                            <div className="instructor-avatar">
                                {member.initials}
                            </div>

                            <div className="instructor-name">
                                {member.name}
                            </div>

                            <div className="instructor-role">
                                {member.level}
                            </div>

                            <p className="instructor-bio">
                                {
                                    member.description
                                }
                            </p>

                            <span className="instructor-cred">
                                {
                                    member.position
                                }
                            </span>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}