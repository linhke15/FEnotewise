
type HeroProps = {
    banner: any;
};
export function Hero({ banner }: HeroProps) {
    return (
        <section className="hero relative px-[5vw] py-section-padding-v overflow-hidden bg-navy-deep staff-lines">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter-grid items-center relative z-10">
                <div className="md:col-span-5 text-white order-2 md:order-1">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-gold-light font-label-md uppercase tracking-widest">{banner?.heading?.subtitle}</span>
                        <div className="h-[1px] w-12 bg-gold-light"></div>
                    </div>
                    <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero mb-8 text-gold-pale leading-tight">
                        {banner?.heading?.title}
                    </h1>
                    <p className="font-body-lg text-body-lg text-surface-dim mb-10 max-w-lg">
                        {banner?.heading?.text}
                    </p>
                    <div className="flex gap-4">
                        {banner?.list_item?.map((tag: any, index: number) => (
                            <span
                                key={index}
                                className="px-4 py-1.5 rounded-full bg-gold-light/10 text-gold-light border border-gold-light/20 text-xs font-medium"
                            >
                                {tag.title}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-7 order-1 md:order-2 group">
                    <div className="relative rounded-lg overflow-hidden border border-cream-dark/10 shadow-2xl">
                        <img alt="Featured Blog Post" className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A grand piano captured in a moody, low-light setting with professional stage lighting casting soft gold glows on the polished wood. The environment is an elegant, high-ceilinged music conservatory with blurred silhouettes of music stands in the background. The aesthetic is prestigious and academic, utilizing a dark navy and rich gold color palette to evoke discipline and artistic mastery." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYeBrFSO999h0hs-fMAOSTu7GYV5iqVXTxbQTN3P6Sq_sr3s0sEkfso_7rhhGS2LbhFTrUkCRXvj0EKtLBq8Bkf4wZcuw0_B7Eb0lgKrcnF3RSTVPmS68TmmZwGkcXoya1umrV74EDORN9Uun4t7FRjQA2Ca3zCnONYJAcz7KEfCyMomadSv5ZkoJG461IPNHL_UT_ltf0o1PUR4VaBo8FTj0smKgnnAWV4Ny7XO39imeIduDSfWl73a7tFATbV2RVGjjXkCXrXp8" />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent"></div>
                        <div className="absolute bottom-8 left-8 right-8">
                            <h2 className="font-headline-lg text-headline-lg text-white mb-2">{banner?.title}</h2>
                            <p className="text-surface-dim font-body-sm">{banner?.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}