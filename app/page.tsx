import Image from "next/image";
import Animation from "@/components/Animation";
import { fetchAPI, dataHome, getStrapiMedia } from "@/lib/api";
import { dataPrograms } from "@/lib/program/api";
import { blockMap } from "@/components/BlocksHome";
import { renderRichText } from "@/lib/renderRichText";
import { RenderHeading } from "@/components/shared/heading";
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

export default async function Home() {
  const data = await fetchAPI(dataHome);
  const blocks = data?.home?.blocks || [];
  const bannerBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneBanner");
  const aboutBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneSsAbout");
  const programBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneSsProgram");

  const techniqueBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneTechnique");
  const teamBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneTeam");
  const questionBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneQuestion");
  const beginBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneBegin");
  const workBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneWork");
  const bookBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneBook");
  const communityBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneCommunity");
  const priceBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczonePrice");
  const getPrograms = await fetchAPI(dataPrograms);
  const programs = getPrograms?.programs || [];
  // const programs = await fetchAPI(dataPrograms);

  return (
    <>
      <Animation />
      <main className="pt-17 site-main">

        {blocks.map((block: any, index: number) => {
          const render = blockMap[block.__typename];

          if (!render) return null;

          return (
            <div key={`${block.__component}-${block.id}-${index}`}>
              {render(block, {
                programs,
                RenderHeading,
              })}
            </div>
          );
        })}

      </main>
    </>
  );
}
