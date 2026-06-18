
import "../../styles/css/blog.css"
import { Hero } from "@/components/blog/Hero";
import BlogGrid from "@/components/blog/BlogGrid";
import { fetchAPI, getStrapiMedia } from "@/lib/api";
import { dataBlogs, blogList } from "@/lib/blog/api";
import { renderRichText } from "@/lib/renderRichText";
import { RenderHeading } from "@/components/shared/heading";

export default async function BlogPage() {
    const dataPage = await fetchAPI(dataBlogs);
    const dataBlogList = await fetchAPI(blogList);
    const categories = dataBlogList?.categories || [];
    const blogs = dataBlogList?.blogs || [];

    return (
        <>

            <main className="site-blog pt-17">
                <Hero banner={dataPage.blogPage.banner} />
                <BlogGrid blogsList={blogs} categories={categories} />
            </main>

        </>
    );
}