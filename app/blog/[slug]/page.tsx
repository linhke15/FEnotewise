import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import { fetchAPI, getStrapiMedia } from "@/lib/api";
import { blogBySlug, relatedBlog } from "@/lib/blog/api";
import BlogSingleBody from "@/components/blog/blogSingle";
import BlogRelated from "@/components/blog/related";
import { formatDate } from "@/lib/date";
type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function SingleBlogPage({
    params,
}: Props) {
    const { slug } = await params;

    const data = await fetchAPI(blogBySlug, {
        slug,
    });

    const blog = data?.blogs?.[0];
    const bodyblocks = blog?.blocks || [];
    const author = blog?.author || null;

    if (!blog) {
        notFound();
    }
    const categorySlug = blog?.category?.slug;

    let relatedBlogs = [];

    if (categorySlug) {
        const relatedData = await fetchAPI(relatedBlog, {
            categorySlug,
            currentSlug: slug,
        });

        relatedBlogs = relatedData?.blogs || [];
    }

    return (

        <main className="single-blog pt-17">
            {/* <!-- Hero Section --> */}
            <section className="relative h-[614px] md:h-[716px] w-full overflow-hidden flex items-center justify-center">
                <img alt="Grand Piano Close-up" className="absolute inset-0 w-full h-full object-cover" data-alt="A high-anglery" src={getStrapiMedia(blog?.thumb.url) || ""} />
                <div className="absolute inset-0 bg-navy-deep/40"></div>
                <div className="relative z-10 text-center px-[5vw] max-w-4xl">
                    <span className="inline-block font-label-md text-label-md text-gold-light uppercase tracking-[0.2em] mb-4">{blog.subtitle}</span>
                    <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-white mb-6">{blog.title}</h1>
                    <div className="flex items-center justify-center gap-4 text-gold-pale/80 font-body-sm">
                        <span> {blog.title}</span>
                        <span className="w-1 h-1 bg-gold-light rounded-full"></span>
                        <span>{formatDate(blog.updatedAt)}</span>
                        <span className="w-1 h-1 bg-gold-light rounded-full"></span>
                        <span>8 min read</span>
                    </div>
                </div>
            </section>
            {/* <!-- Article Content --> */}
            < BlogSingleBody contentBlog={bodyblocks} sidebar={author} />
            {/* <!-- Related Posts Section (Bento Style) --> */}
            <BlogRelated blogsRelated={relatedBlogs} />
        </main>
    );
}