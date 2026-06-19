import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { getStrapiMedia } from "@/lib/api";
type BlogSingleBodyProps = {
    contentBlog?: any;
    sidebar?: any;

};
export default function BlogSingleBody({ contentBlog, sidebar }: BlogSingleBodyProps) {
    const quoteTop = contentBlog.find((b: any) => b.__typename === "ComponentSharedQuote");
    const contentBody = contentBlog.find((b: any) => b.__typename === "ComponentSharedRichText");
    return (
        <section className="content-single py-section-padding-v px-[5vw]">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter-grid">
                {/* <!-- Main Body --> */}
                <article className="lg:col-span-8">
                    <div className="staff-lines p-8 mb-12 border-l-4 border-gold-light bg-gold-pale/10">
                        <p className="font-body-lg text-body-lg italic text-navy-mid leading-relaxed">
                            {quoteTop?.body}
                        </p>
                    </div>
                    <div className="space-y-12 text-on-surface">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                        >
                            {contentBody?.body || ""}
                        </ReactMarkdown>
                    </div>
                </article>
                {/* <!-- Sidebar CTA & Info --> */}
                <aside className="lg:col-span-4 space-y-12">
                    <div className="sticky top-28">
                        {/* <!-- Sticky Trial Card --> */}
                        <div className="bg-navy-deep p-8 rounded-xl text-center shadow-2xl border border-gold-light/20 overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined text-8xl text-gold-light" data-icon="music_note">music_note</span>
                            </div>
                            <h3 className="font-headline-lg text-2xl text-gold-light mb-4">Ready to start?</h3>
                            <p className="font-body-sm text-gold-pale/80 mb-8 leading-relaxed">
                                Experience the prestige of Notewise Academy. Book your complimentary 30-minute trial session today.
                            </p>
                            <button className="w-full bg-gold-light text-navy-deep font-bold py-4 rounded-[3px] uppercase tracking-widest hover:bg-gold-pale transition-colors mb-4">
                                Book Free Trial
                            </button>
                            <p className="font-label-md text-xs text-gold-pale/50 uppercase tracking-tighter">Limited slots available for Spring 2024</p>
                        </div>

                        {sidebar && (
                            <div className="bg-cream-dark/20 p-8 border border-cream-dark rounded-lg mt-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold-light">
                                        <img alt={sidebar.name} className="w-full h-full object-cover" data-alt={sidebar.avatar?.caption} src={getStrapiMedia(sidebar.avatar?.url) || ""} />
                                    </div>
                                    <div>
                                        <h4 className="font-headline-md text-navy-deep">{sidebar.name}</h4>
                                        <p className="font-label-md text-gold-light">{sidebar.position}</p>
                                    </div>
                                </div>
                                <p className="font-body-sm text-text-mid">
                                    {sidebar.description}
                                </p>
                            </div>
                        )}
                    </div>
                </aside>
            </div>
        </section>
    );
}