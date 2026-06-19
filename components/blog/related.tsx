import Link from "next/link";
import { getStrapiMedia } from "@/lib/api";

type BlogSingleBodyProps = {
    blogsRelated?: any;

};
export default function BlogRelated({ blogsRelated }: BlogSingleBodyProps) {
    if (!blogsRelated.length) return null;
    return (
        <section className="py-section-padding-v bg-gold-pale/20 border-t border-cream-dark/30 px-[5vw]">
            <div className="max-w-screen-2xl mx-auto">
                <div className="flex items-baseline gap-4 mb-12">
                    <span className="font-label-md text-label-md text-gold-light uppercase tracking-widest">Keep Learning</span>
                    <div className="h-px flex-1 bg-gold-light/30"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-card">
                    {blogsRelated.slice(0, 3).map((blog: any) => (
                        <div key={blog.slug} className="group bg-white border border-cream-dark overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl relative">
                            <div className="h-1 bg-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left absolute top-0 w-full z-10"></div>
                            <div className="h-48 overflow-hidden">
                                <img alt="Metronome on piano" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="dust motes dancing in ."
                                    src={
                                        blog?.thumb?.url
                                            ? getStrapiMedia(blog.thumb.url) || "/default.png"
                                            : "/default.png"
                                    } />
                            </div>
                            <div className="p-6">
                                <span className="font-label-md text-[10px] text-gold-light uppercase tracking-widest mb-2 block">{blog?.category?.name}</span>
                                <h3 className="font-headline-md text-navy-deep mb-3">{blog?.title}</h3>
                                <a className="text-gold-light font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all" href={blog?.slug}>
                                    Read More <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}