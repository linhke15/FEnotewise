import Begin from "@/components/shared/Begin";
import BookSection from "@/components/shared/Form";
import TestimonialsSection from "@/components/home/Testimonials";
import ProcessSection from "@/components/home/ProcessSection";
import HeroSection from "@/components/shared/Banner";
import AboutSection from "@/components/home/StorySection";
import TechniqueSection from "@/components/home/TechniqueSection";
import TeamSection from "@/components/home/TeamSection";
import ProgramSection from "@/components/program/ProgramSection";
import FAQSection from "@/components/shared/FAQSection";
import ListPricing from "@/components/pricing/Listpricing";

type ExtraProps = {
    programs?: any[];
    RenderHeading?: any;
};

export const blockMap: Record<
    string,
    (block: any, extra?: ExtraProps) => JSX.Element | null
> = {
    ComponentDynamiczoneBanner: (block, extra) => (
        <HeroSection
            bannerBlock={block}
            programs={extra?.programs || []}
        />
    ),
    ComponentDynamiczoneSsAbout: (block) => {
        return <AboutSection aboutBlock={block} />;
    },

    ComponentDynamiczoneSsProgram: (block, extra) => {
        return (
            <ProgramSection
                heading={block.heading}
                programs={extra?.programs || []}
            />
        );
    },

    ComponentDynamiczoneTechnique: (block) => {
        return <TechniqueSection techniqueBlock={block} />;
    },

    ComponentDynamiczoneTeam: (block) => {
        return <TeamSection teamBlock={block} />;
    },

    ComponentDynamiczoneWork: (block) => {
        return (
            <ProcessSection
                heading={block.heading}
                timelines={block.timelines || []}
            />
        );
    },

    ComponentDynamiczoneCommunity: (block) => {
        return <TestimonialsSection data={block} />;
    },

    ComponentDynamiczonePrice: (block) => {
        return <ListPricing heading={block.heading} />;
    },

    ComponentDynamiczoneQuestion: (block) => {
        return <FAQSection data={block} />;
    },

    ComponentDynamiczoneBegin: (block) => {
        return <Begin data={block} />;
    },

    ComponentDynamiczoneBook: (block) => {
        return <BookSection data={block} />;
    },
};