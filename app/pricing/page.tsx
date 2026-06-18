import Image from "next/image";
import HomePage from "@/components/Animation";
import { fetchAPI, getStrapiMedia } from "@/lib/api";
import { pagePricing } from "@/lib/pricing/api";
import { renderRichText } from "@/lib/renderRichText";
import { RenderHeading } from "@/components/shared/heading";
import { Faq } from "@/components/Faq";
import ListPricing from "@/components/pricing/Listpricing";
import { BeginBooking } from "@/components/pricing/BeginBook";
import { Table } from "@/components/pricing/table";
import Animation from "@/components/Animation";

export default async function PricingPage() {
    const dataPage = await fetchAPI(pagePricing);

    const blocks = dataPage?.pricingPage || [];
    const headingPricing = blocks?.heading;
    const headingTable = blocks?.boxCompare;
    const BeginBlock = blocks?.sectionBooking;
    const faq = blocks?.sectionFAQ;
    const itemfaq = blocks?.sectionFAQ?.faq;

    console.log('hihih', blocks);
    return (
        <>
            <Animation />
            <main className="pt-17 site-pricing">
                {/* <!-- Pricing Cards --> */}
                <ListPricing heading={headingPricing} />
                {/* <!-- Detailed Comparison Table --> */}
                <Table heading={headingTable} />
                {/* <!-- CTA Banner --> */}
                <BeginBooking heading={BeginBlock?.heading} button={BeginBlock?.button} />
                {/* <!-- FAQ Section --> */}
                <section className="px-[5vw] mb-section-padding-v">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-4 mb-12">
                            <RenderHeading heading={faq.heading} />
                        </div>
                        <div className="space-y-6">
                            <Faq faq={itemfaq} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );


}