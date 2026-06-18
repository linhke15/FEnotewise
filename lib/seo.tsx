import type { Metadata } from "next";

export function generateSeo(seo: any): Metadata {

    const API_URL = process.env.NEXT_PUBLIC_SITE_URL;

    return {
        title: seo?.metaTitle || "Website",

        description: seo?.metaDescription || "",

        alternates: {
            canonical:
                seo?.canonicalURL ||
                API_URL,
        },

        openGraph: {
            title: seo?.metaTitle,
            description: seo?.metaDescription,
            url:
                seo?.canonicalURL ||
                API_URL,

            siteName: seo?.metaTitle,

            locale: "vi_VN",

            type: "website",
        },
    };
}