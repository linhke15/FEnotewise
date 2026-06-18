"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { getStrapiMedia } from "@/lib/api";
import { formatDate } from "@/lib/date";
export default function BlogGrid({ blogsList, categories }: { blogsList: any, categories: any }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentCategory = searchParams.get("category") || "all";
    const currentPage = Number(searchParams.get("page")) || 1;

    const [searchTerm, setSearchTerm] = useState("");

    const ITEMS_PER_PAGE = 3;

    const updateURL = (category: string, page: number) => {
        const params = new URLSearchParams(searchParams.toString());

        if (category === "all") {
            params.delete("category");
        } else {
            params.set("category", category);
        }

        if (page <= 1) {
            params.delete("page"); // Không cần ?page=1
        } else {
            params.set("page", page.toString());
        }

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const filteredBlogs = blogsList.filter((blog: any) => {
        // Lọc theo Category
        const matchCategory = currentCategory === "all" || blog.category?.slug === currentCategory;

        // Tìm kiếm theo Title
        const matchSearch = blog.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        return matchCategory && matchSearch;
    });
    // 4. LOGIC PHÂN TRANG (PAGINATION)
    const totalPages = Math.ceil(filteredBlogs.length / ITEMS_PER_PAGE);

    // Đảm bảo không bị lỗi nếu currentPage lớn hơn totalPages khi filter
    const safeCurrentPage = Math.min(currentPage, Math.max(totalPages, 1));

    const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    // Đây là mảng blog sẽ được render trên màn hình hiện tại
    const paginatedBlogs = filteredBlogs.slice(startIndex, endIndex);

    // Reset về trang 1 khi người dùng gõ tìm kiếm
    useEffect(() => {
        if (searchTerm && currentPage !== 1) {
            updateURL(currentCategory, 1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchTerm]);


    return (
        <div className="container-blog">
            <div className="border-b border-cream-dark/20 bg-white sticky top-[72px] z-40">
                <div className="px-[5vw] max-w-screen-2xl mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">

                        <button
                            onClick={() => updateURL("all", 1)}
                            className={`font-label-md uppercase tracking-widest border-b-2 pb-2 transition-all ${currentCategory === "all"
                                ? "text-navy-deep border-gold-light"
                                : "text-text-muted border-transparent hover:border-gold-light"
                                }`}
                        >
                            All Stories
                        </button>
                        {categories.map((cat: any) => (
                            <button
                                key={cat.slug}
                                onClick={() => updateURL(cat.slug, 1)}
                                className={`font-label-md uppercase tracking-widest border-b-2 pb-2 transition-all ${currentCategory === cat.slug
                                    ? "text-navy-deep border-gold-light"
                                    : "text-text-muted border-transparent hover:border-gold-light"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-72">
                        <input
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-cream/50 border border-cream-dark rounded-[3px] font-label-md focus:ring-1 focus:ring-gold-light focus:border-gold-light outline-none transition-all"
                            placeholder="Search the archive..."
                            type="text"
                        />
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-muted text-sm" data-icon="search">
                            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z" fill="rgb(122 122 153 / var(--tw-text-opacity, 1))" ></path>
                            </svg>
                        </span>

                    </div>
                </div>
            </div>

            <section className="px-[5vw] py-section-padding-v max-w-screen-2xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-gutter-grid gap-y-16">
                    {/* <!-- Post 1 --> */}
                    {paginatedBlogs?.map((blog: any, index: number) => (

                        <article key={blog.slug} className="group program-card-hover flex flex-col">
                            <div className="relative overflow-hidden rounded-[3px] mb-6">
                                {blog?.thumb?.url && (
                                    <img alt={blog?.thumb?.caption} className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110" src={getStrapiMedia(blog?.thumb?.url)} />
                                )}

                                <div className="absolute top-4 left-4">
                                    <span className="bg-gold-pale/90 backdrop-blur-sm text-navy-deep px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full">{blog.category?.name}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mb-4 text-[11px] uppercase tracking-tighter text-text-muted font-label-md">
                                <span>{formatDate(blog.updatedAt)}</span>
                                <span>•</span>
                                <span>8 min read</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md mb-4 text-navy-deep leading-snug group-hover:text-gold-light transition-colors"> <a href={`/blog/${blog.slug}`}>{blog.title}</a></h3>
                            <p className="font-body-sm text-body-sm text-text-mid line-clamp-3 mb-6">{blog.description}</p>
                            <a className="mt-auto flex items-center gap-2 text-gold-light font-label-md uppercase tracking-widest group/link" href={`/blog/${blog.slug}`}>
                                Read Story
                                <span className="material-symbols-outlined text-sm transition-transform group-hover/link:translate-x-1" data-icon="arrow_forward">→</span>
                            </a>
                        </article>

                    ))}


                </div>
                {paginatedBlogs.length === 0 && (
                    <div className="text-center py-20 text-text-muted">
                        No stories found matching your search.
                    </div>
                )}
                {/* <!-- Pagination --> */}
                {totalPages > 1 && (
                    <div className="mt-section-padding-v flex justify-center items-center gap-4">
                        {/* Nút Prev */}
                        <button
                            disabled={safeCurrentPage === 1}
                            onClick={() => updateURL(currentCategory, safeCurrentPage - 1)}
                            className="w-10 h-10 flex items-center justify-center border border-cream-dark text-text-muted hover:border-gold-light hover:text-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span>{'<'}</span>
                        </button>

                        {/* Render các số trang */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                onClick={() => updateURL(currentCategory, pageNum)}
                                className={`w-10 h-10 flex items-center justify-center font-bold transition-colors ${safeCurrentPage === pageNum
                                    ? "bg-gold-light text-navy-deep" // Nút active
                                    : "border border-cream-dark text-text-muted hover:border-gold-light hover:text-gold-light" // Nút bình thường
                                    }`}
                            >
                                {pageNum}
                            </button>
                        ))}

                        {/* Nút Next */}
                        <button
                            disabled={safeCurrentPage === totalPages}
                            onClick={() => updateURL(currentCategory, safeCurrentPage + 1)}
                            className="w-10 h-10 flex items-center justify-center border border-cream-dark text-text-muted hover:border-gold-light hover:text-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span>{'>'}</span>
                        </button>
                    </div>
                )}
            </section>
        </div>

    );
}