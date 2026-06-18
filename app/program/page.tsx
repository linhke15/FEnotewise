import { fetchAPI, getStrapiMedia, pageProgram } from "@/lib/api";
import { RenderHeading } from "@/components/shared/heading";

export default async function PricingPage() {
    const data = await fetchAPI(pageProgram);
    const seo = data?.programPage?.seo || {};

    const blocks = data?.programPage?.blocks || [];
    const bannerBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneBanner");
    const focusBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneTechnique");
    const courseBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneWork");
    const aboutBLock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneSsAbout");
    const investmentBlock = blocks.find((b: any) => b.__typename === "ComponentDynamiczoneInvestment");

    return (
        <main className="site-program bg-background text-on-background font-body-sm overflow-x-hidden pt-17">
            {/* <!-- Hero Section --> */}
            <section className="hero-program relative min-h-[819px] flex items-center pt-24 overflow-hidden bg-navy-deep">
                {/* <!-- Background Accents --> */}
                <div className="absolute inset-0 staff-lines opacity-20 pointer-events-none"></div>
                <div className="absolute -right-20 top-1/4 opacity-10 pointer-events-none">
                    <span className="material-symbols-outlined text-[400px] text-gold-light">music_note</span>
                </div>
                <div className="container mx-auto px-[5vw] grid lg:grid-cols-12 gap-gutter-grid items-center relative z-10">
                    <div className="lg:col-span-7">
                        <RenderHeading heading={bannerBlock.heading} />
                        <div className="flex flex-wrap gap-8 items-center">
                            {bannerBlock.list_item?.length > 0 && (
                                <div className="flex flex-wrap gap-8 items-center mt-8">
                                    {bannerBlock.list_item.map((item: any, index: number) => (
                                        <div className="flex items-start" key={index}>
                                            <div className="flex flex-col">
                                                <span className="font-label-md text-gold-pale/60 uppercase">
                                                    {item.title}
                                                </span>
                                                <span className="font-stat-display text-gold-light">
                                                    {item.description}
                                                </span>
                                            </div>

                                            {index < bannerBlock.list_item.length - 1 && (
                                                <div className="line h-10 w-[1px] bg-white/10 hidden sm:block" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                            <img className="w-full h-full object-cover" data-alt=" The lighting is soft and golden, " src={getStrapiMedia(bannerBlock?.img_banner?.url) || ""} />
                        </div>
                        {/* <!-- Glass Card Overlay --> */}
                        <div className="absolute -bottom-10 -left-10 hidden md:block p-8 bg-navy-mid/90 backdrop-blur-xl border border-gold-light/20 rounded-xl shadow-2xl max-w-xs">
                            <span className="material-symbols-outlined text-gold-light mb-4">{bannerBlock.title}</span>
                            <p className="font-body-sm text-white/90 italic">{bannerBlock.text}</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Overview Section --> */}
            <section className="py-section-padding-v bg-white">
                <div className="container mx-auto px-[5vw]">
                    <div className="grid md:grid-cols-12 gap-gutter-grid">
                        <div className="md:col-span-5">
                            <RenderHeading heading={focusBlock.heading} />
                            {focusBlock.buttonSingle && (
                                <button className="group flex items-center gap-2 text-navy-deep font-label-md uppercase tracking-bold">
                                    {focusBlock.buttonSingle.name}
                                </button>
                            )}
                        </div>
                        <div className="md:col-span-7 grid sm:grid-cols-2 gap-gutter-card">
                            {focusBlock.boxs?.length > 0 && focusBlock.boxs.map((item: any, index: number) => (
                                <div key={index} className="p-8 bg-gold-pale/30 border border-cream-dark rounded-xl program-card-hover relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-light transform scale-x-0 transition-transform duration-300 border-slide"></div>
                                    <img src={getStrapiMedia(item.icon?.url) || ""} alt={item.icon?.caption} className="icon-small" />
                                    <h3 className="font-headline-md text-headline-md text-navy-deep mb-4">{item.title}</h3>
                                    <p className="font-body-sm text-text-mid">{item.description}</p>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- What You'll Learn --> */}
            <section className="course py-section-padding-v bg-navy-deep text-white overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none transition-all duration-700 ease-out opacity-100 translate-y-0">
                    <div className="staff-lines h-full w-full"></div>
                </div>
                <div className="container mx-auto px-[5vw] relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <RenderHeading heading={courseBlock.heading} />
                    </div>
                    <div className="grid md:grid-cols-3 gap-gutter-card">
                        {courseBlock.timelines.map((item: any, index: number) => (
                            <div key={index} className="flex flex-col gap-6">
                                <div className="w-12 h-12 rounded-full border border-gold-light/40 flex items-center justify-center text-gold-light font-stat-display">01</div>
                                <h4 className="font-headline-md text-headline-md">{item.title}</h4>
                                <p className="font-body-sm text-white/70">{item.description}</p>
                            </div>
                        ))}


                    </div>
                </div>
            </section>
            {/* <!-- Meet Your Instructor --> */}

            <section className="py-section-padding-v bg-white text-white ">
                <div className="container mx-auto px-[5vw]">
                    <div className="bg-navy-deep rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                        <div className="md:w-1/2 aspect-square md:aspect-auto">
                            <img className="w-full h-full object-cover" data-alt="A professional portrait of Sarah Chen, a concert pianist with an elegant and authoritative presence. She is seated at a grand piano, wearing a sophisticated dark blazer. Her expression is warm but disciplined. The setting is a minimalist, modern studio with soft, directional lighting that highlights her professional stature. The color palette is composed of deep navies and warm wood tones, reflecting the prestige of Notewise Academy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQP04Jgiep4xU87-YIeSBDSuI9SPSWt039qf53AtadwctLCGGffLLQcRGEaBbKkJURHMo2UPLCvBMSzmdABCH8mTCyqsOR0wqk5zDwWCcbZdtlc1e6PGfrI9ZM_DiPuvTmn-KRbzfakskSzN2jygth44X3EC80uM4SP0IfwGj33h70NmcwxK7KGwFTrVT_83AL8srF75HEYC3M2eCrFAgpLHodUVMWMGsf7o2yvTyBpuOtoA7_rhFydt53BTFtFBJhBJsme6J91zA" />
                        </div>
                        <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
                            <RenderHeading heading={aboutBLock.heading} />
                            <ul className="space-y-4 mb-10">
                                {aboutBLock.lists_item?.length > 0 && aboutBLock.lists_item.map((item: any, index: number) => (
                                    <li key={index} className="flex items-center gap-3 text-gold-pale/80 font-body-sm">
                                        <span className="material-symbols-outlined text-gold-light text-sm"><img src={getStrapiMedia(item.icon?.url) || ""} alt="" /></span> {item.title}
                                    </li>
                                ))}

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Pricing / Growth Plan --> */}
            <section className="py-section-padding-v bg-gold-pale/20 relative">
                <div className="container mx-auto px-[5vw]">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <RenderHeading heading={investmentBlock.heading} />

                    </div>
                    <div className="max-w-lg mx-auto">
                        {investmentBlock.pricings.map((item: any, index: number) => (
                            <div key={index} className="bg-white border-2 border-gold-light rounded-xl p-10 shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-gold-light text-navy-deep font-label-md px-6 py-2 rounded-bl-xl uppercase tracking-wider">
                                    Most Popular
                                </div>
                                <div className="mb-8">
                                    <h3 className="font-headline-md text-headline-md text-navy-deep mb-2">{item.title}</h3>
                                    <p className="font-body-sm text-text-muted">{item.text}</p>
                                </div>
                                <div className="mb-10">
                                    <span className="font-stat-display text-navy-deep text-5xl">${item.price}</span>
                                    <span className="font-body-sm text-text-muted">/ month</span>
                                </div>
                                <ul className="space-y-4 mb-10">
                                    {item.lists_info.map((feature: any, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 font-body-sm text-navy-deep">
                                            {feature.icon?.url ? (
                                                <img
                                                    src={getStrapiMedia(feature.icon.url) || ""}
                                                    alt=""
                                                    className="icon-small"
                                                />
                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="rgb(232 184 75 / var(--tw-bg-opacity, 1))"
                                                >
                                                    <path d="M 12 2 C 6.486 2 2 6.486 2 12 C 2 17.514 6.486 22 12 22 C 17.514 22 22 17.514 22 12 C 22 10.874 21.803984 9.7942031 21.458984 8.7832031 L 19.839844 10.402344 C 19.944844 10.918344 20 11.453 20 12 C 20 16.411 16.411 20 12 20 C 7.589 20 4 16.411 4 12 C 4 7.589 7.589 4 12 4 C 13.633 4 15.151922 4.4938906 16.419922 5.3378906 L 17.851562 3.90625 C 16.203562 2.71225 14.185 2 12 2 z M 21.292969 3.2929688 L 11 13.585938 L 7.7070312 10.292969 L 6.2929688 11.707031 L 11 16.414062 L 22.707031 4.7070312 L 21.292969 3.2929688 z" />
                                                </svg>
                                            )}
                                            {feature.title}
                                        </li>
                                    ))}

                                </ul>
                                <button className="w-full bg-navy-deep text-white font-label-md py-4 rounded-[3px] hover:bg-navy-mid transition-colors shadow-lg hover:shadow-navy-mid/30">
                                    Enroll in Growth Plan
                                </button>
                                <p className="text-center mt-6 font-body-sm text-text-muted">
                                    Looking for something else? <a className="text-gold-light underline underline-offset-4" href="#">View all plans</a>
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}