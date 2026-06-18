export const RenderHeading = ({ heading }: { heading: any }) => {
    if (!heading) return null;
    return (
        <div className="section-heading mb-8" style={{ textAlign: heading.Style || "left" }}>
            {heading.subtitle && <p className="section-tag">{heading.subtitle}</p>}
            {heading.title && (
                <h2
                    className="section-title"
                    dangerouslySetInnerHTML={{ __html: heading.title }}
                />
            )}
            {heading.text && <p className="section-sub">{heading.text}</p>}
        </div>
    );
};
