import { fetchAPI } from "@/lib/api";
import { dataPricing } from "@/lib/pricing/api";
import { RenderHeading } from "@/components/shared/heading";


type ItemTable = {
    text: string;
    statusTB: "text" | "check" | "none";
};

type Pricing = {
    title: string;
    itemTable: ItemTable[];
};

type PricingProps = {
    heading: unknown;
};

const renderCell = (item?: ItemTable) => {
    if (!item) return "-";

    switch (item.statusTB) {
        case "text":
            return item.text;

        case "check":
            return (
                <span className="material-symbols-outlined text-gold-light">
                    ✓
                </span>
            );

        case "none":
            return "-";

        default:
            return "-";
    }
};

export async function Table({
    heading,
}: PricingProps) {
    const data = await fetchAPI(dataPricing);
    const pricings: Pricing[] = data?.pricings ?? [];

    const features = [
        "Private Lesson Time",
        "Theory Workshops",
        "Masterclasses",
        "Recording Studio Access",
        "Performance Digital Audit",
    ];

    return (
        <section className="px-[5vw] mb-section-padding-v bg-gold-pale/30 py-24">
            <div className="max-w-5xl mx-auto overflow-x-auto">
                <div className="mb-12 text-center">
                    <RenderHeading heading={heading} />
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-cream-dark/50">
                            <th className="py-6 font-headline-md">Features</th>
                            {pricings.map((pricing) => (
                                <th
                                    key={pricing.title}
                                    className="py-6 text-center font-headline-md"
                                >
                                    {pricing.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-cream-dark/30">
                        {features.map((feature, rowIndex) => (
                            <tr key={feature}>
                                <td className="py-5 font-body-sm font-semibold">
                                    {feature}
                                </td>

                                {pricings.map((pricing) => (
                                    <td
                                        key={`${pricing.title}-${rowIndex}`}
                                        className="py-5 text-center"
                                    >
                                        {renderCell(
                                            pricing.itemTable?.[rowIndex]
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}