import { RenderHeading } from "@/components/shared/heading";

type HeadingData = {
    subtitle: string | null;
    text: string;
    title: string;
    Style: string | null;
};

type ButtonData = {
    name: string;
    link: string;
};

type BeginProps = {
    heading: HeadingData;
    button: ButtonData[];
};

export function BeginBooking({
    heading,
    button,
}: BeginProps) {
    const primaryButton = button?.[0];

    return (
        <section className="Begin-pricing">
            <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-xl p-12 text-center">
                <img
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJsif_UVpfXKVubIWW6k16BpMnos391lv-bEu8_1bdFqs0lf_o6NRHhIkPsDz6os6-kE5hK3l26CTB2CKSE8T4dvRyLhwbrVmfG3TEruV_eizfW7KpVljiuJG1IvispvFGkk-Muzg5IzKoOKZG5nk5qSHAQrxujA3YMDlzqMYEYh3YDjbLRNwAR-9-2243M2Z1_aKjAZwhLmlK-3Rt69fnEc3bH8H9Hom4ct_kxxuisoHajoDyMp-EpzTEmR0kA0VvScgwBv6KTz0"
                    alt={heading.title}
                />

                <div className="absolute inset-0 -z-10 bg-navy-deep/80" />

                <div className="max-w-2xl text-white">
                    <RenderHeading heading={heading} />

                    {primaryButton && (
                        <a
                            href={primaryButton.link}
                            className="inline-block bg-gold-light px-10 py-4 font-label-md uppercase tracking-[0.2em] text-navy-deep shadow-lg shadow-gold-light/20 transition-transform hover:scale-105"
                        >
                            {primaryButton.name}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}