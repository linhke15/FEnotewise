import { fetchAPI, getStrapiMedia, pageAbout } from "@/lib/api";
import { RenderHeading } from "@/components/shared/heading";

export default async function AboutPage() {
    const data = await fetchAPI(pageAbout);

    const bannerBlock = data?.about?.blocks?.find(
        (block: any) => block.__typename === "ComponentDynamiczoneBanner"
    );
    const techniqueBlock = data?.about?.blocks?.find(
        (block: any) => block.__typename === "ComponentDynamiczoneTechnique"
    );
    const defaultBlock = data?.about?.blocks?.find(
        (block: any) => block.__typename === "ComponentBlockShareDefaulBlock"
    );
    const aboutBlock = data?.about?.blocks?.find(
        (block: any) => block.__typename === "ComponentDynamiczoneSsAbout"
    );

    return (
        <main className="site-about bg-background text-on-background selection:bg-gold-light selection:text-navy-deep overflow-x-hidden pt-17">
            {bannerBlock && (
                <section className="relative py-section-padding-v overflow-hidden staff-lines">
                    <div className="px-[5vw] max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-grid items-center">
                        <div className="md:col-span-7">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="font-label-md text-label-md uppercase tracking-[0.3em] text-gold-light">  {bannerBlock.heading.subtitle}</span>
                                <div className="h-[1px] w-24 bg-gold-light/30"></div>
                            </div>
                            <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero mb-8 text-primary">
                                {bannerBlock.heading.title}
                            </h1>
                            <p className="font-body-lg text-body-lg text-text-mid max-w-2xl mb-10">
                                {bannerBlock.heading.text}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                {bannerBlock?.buttonRepeater?.map((button: any, index: number) => (
                                    <a key={index} href={button.link} className={`px-8 py-4 ${button.style}`}>
                                        {button.name}
                                    </a>
                                ))}

                            </div>
                        </div>
                        <div className="md:col-span-5 relative">
                            <div className="aspect-[4/5] bg-cream-dark rounded-sm overflow-hidden shadow-2xl relative z-10">
                                <img className="w-full h-full object-cover" data-alt="A cinematic" src={getStrapiMedia(bannerBlock?.img_banner?.url) || ""} alt={
                                    bannerBlock?.img_banner?.caption ||
                                    bannerBlock?.heading?.title
                                } />
                            </div>
                            <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-sm text-gold-pale z-20 hidden md:block border border-gold-light/20 glass-card">
                                <span className="block font-stat-display text-stat-display mb-1 text-gold-light">{bannerBlock?.title}</span>
                                <span className="font-label-md text-label-md uppercase tracking-widest opacity-80">{bannerBlock?.text}</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* <!-- History & Timeline --> */}
            <section className="py-section-padding-v bg-surface-container-low border-y border-cream-dark/30">
                <div className="px-[5vw] max-w-screen-2xl mx-auto">
                    <div className="max-w-3xl mb-16">
                        <RenderHeading heading={techniqueBlock.heading} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-card">
                        {techniqueBlock?.boxs?.map(
                            (item: any, index: number) => (
                                <div className="p-10 bg-white border border-cream-dark rounded-sm group hover:border-gold-light transition-colors duration-500" key={index}>
                                    <span className="text-gold-light font-stat-display text-stat-display block mb-6">{String(index + 1).padStart(2, '0')}</span>
                                    <h3 className="font-headline-md text-headline-md mb-4 text-navy-deep">{item.title}</h3>
                                    <p className="font-body-sm text-body-sm text-text-mid">{item.description}</p>
                                </div>
                            )
                        )}

                    </div>
                </div>
            </section>
            {/* <!-- Stats Bento Grid --> */}
            <section className="py-section-padding-v">
                <div className="px-[5vw] max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[auto] md:h-[600px]">
                        <div className="md:col-span-2 md:row-span-2 bg-navy-deep p-12 flex flex-col justify-end relative overflow-hidden group">
                            <img className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="tones" src={getStrapiMedia(defaultBlock?.imgdefaul?.url) || ""} />
                            <div className="relative z-10">
                                <h4 className="font-stat-display text-display-hero text-gold-light mb-2">{defaultBlock?.heading?.title}</h4>
                                <p className="font-headline-md text-headline-md text-white">{defaultBlock?.heading?.text}</p>
                            </div>
                        </div>
                        {defaultBlock?.list_item?.map(
                            (item: any, index: number) => (
                                <div key={index} className={` p-8 flex flex-col justify-center rounded-sm ${(index + 1) % 3 === 0 ? "md:col-span-2 bg-surface-container border border-cream-dark text-navy-deep" : index % 2 === 0 ? "bg-gold-light text-navy-deep" : "bg-cream-dark text-navy-deep"}  `} >
                                    <div>
                                        <h4 className="font-stat-display text-headline-lg mb-1">
                                            {item.title}
                                        </h4>

                                        <p className="font-body-sm text-body-sm text-text-mid">
                                            {item.description}
                                        </p>
                                    </div>
                                    {/* ICON */}
                                    <div className="img-icon">
                                        {item?.icon?.url && (
                                            <img
                                                src={getStrapiMedia(item.icon.url) || ""}
                                                alt={item.icon.caption || item.title}
                                                className="material-symbols-outlined text-gold-light text-5xl"
                                            />
                                        )}
                                    </div>

                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>
            {/* <!-- Founders Section --> */}
            <section className="py-section-padding-v bg-white">
                <div className="px-[5vw] max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter-grid items-center">
                    <div className="order-2 md:order-1">
                        <div className="relative">
                            <div className="aspect-square bg-navy-deep rounded-sm overflow-hidden border-[12px] border-white shadow-xl">
                                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="He is standing" src={getStrapiMedia(aboutBlock.image.url) || ""} />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 staff-lines opacity-40"></div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <RenderHeading heading={aboutBlock.heading} />
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-[1px] bg-gold-light"></div>
                            <p className="font-label-md text-label-md uppercase tracking-widest text-navy-deep font-bold">{aboutBlock.title_r}</p>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
