export const renderRichText = (content: any) => {
    if (!content) return null

    return content.map((block: any, index: number) => {
        switch (block.type) {
            case "paragraph":
                return (
                    <p key={index} className="mb-4 leading-7">
                        {block.children?.map((child: any) => child.text).join("")}
                    </p>
                )

            case "heading":
                return (
                    <h2 key={index} className="text-2xl font-bold mb-4">
                        {block.children?.map((child: any) => child.text).join("")}
                    </h2>
                )

            case "list":
                return (
                    <ul key={index} className="list-disc pl-6 mb-4">
                        {block.children?.map((item: any, i: number) => (
                            <li key={i}>
                                {item.children?.map((c: any) => c.text).join("")}
                            </li>
                        ))}
                    </ul>
                )

            default:
                return null
        }
    })
}