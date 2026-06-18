import { fetchAPI } from "@/lib/api";
import { dataPricing } from "@/lib/pricing/api";
import { RenderHeading } from "@/components/shared/heading";

type Feature = {
    title: string;
    icon?: {
        caption?: string;
        url: string;
    };
};

type ItemTable = {
    text: string;
    statusTB: boolean;
};

type Pricing = {
    title: string;
    text: string;
    price: string;
    slug: string;
    statusPr: boolean;
    lists_info?: Feature[];
    itemTable?: ItemTable[];
};

type PricingProps = {
    heading: unknown;
};

export default async function ListPricing({
    heading,
}: PricingProps) {
    const data = await fetchAPI(dataPricing);

    const pricings: Pricing[] = data?.pricings ?? [];

    const featured = pricings.find(
        (pricing) => pricing.statusPr
    );

    const normal = pricings.filter(
        (pricing) => !pricing.statusPr
    );

    const orderedPlans: Pricing[] = featured
        ? [normal[0], featured, ...normal.slice(1)].filter(
            Boolean
        ) as Pricing[]
        : pricings;

    return (
        <section id="pricing">
            <div className="pricing-header fade-in">
                <RenderHeading heading={heading} />
            </div>

            <div className="pricing-grid">
                {orderedPlans.map((plan, index) => (
                    <div
                        key={plan.slug || `${plan.title}-${index}`}
                        className={`pricing-card fade-in ${plan.statusPr ? "featured" : ""
                            }`}
                    >
                        {plan.statusPr && (
                            <div className="popular-badge">
                                Most Popular
                            </div>
                        )}

                        <div className="pricing-plan">
                            {plan.title}
                        </div>

                        <div className="pricing-price">
                            {plan.price}
                        </div>

                        <div className="pricing-period">
                            {plan.text}
                        </div>

                        <ul className="pricing-features">
                            {plan.lists_info?.map(
                                (feature, featureIndex) => (
                                    <li
                                        key={`${feature.title}-${featureIndex}`}
                                    >
                                        {feature.title}
                                    </li>
                                )
                            )}
                        </ul>

                        <a
                            href={plan.slug}
                            className="btn-plan"
                        >
                            {plan.statusPr
                                ? "Book free trial"
                                : "Get started"}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}