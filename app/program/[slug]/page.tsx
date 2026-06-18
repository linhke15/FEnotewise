import { fetchAPI, getStrapiMedia, pageProgram } from "@/lib/api";
import { dataProgramSingle } from "@/lib/program/api";

import { RenderHeading } from "@/components/shared/heading";

export default async function ProgramSinglePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const data = await fetchAPI(dataProgramSingle, {
        slug,
    });

    const program = data?.programs?.[0];

    if (!program) {
        return <div>Program not found</div>;
    }

    return (
        <main className="site-program bg-background text-on-background font-body-sm overflow-x-hidden pt-17">
            <h1>{program.title}</h1>
        </main>
    )
}