type HeaderProps = {
    dataHeader: {
        title?: string;
        logo?: {
            name?: string;
        };
        menu?: {
            name: string;
            link: string;
            style?: boolean;
        }[];
    };
};
export default function Header({ dataHeader }: HeaderProps) {
    return (<header>
        <a href="/" className="logo" dangerouslySetInnerHTML={{
            __html: dataHeader?.logo?.name || "",
        }} />
        <nav id="main-nav">
            {
                dataHeader?.menu?.map((item: any, index: number) => (
                    <a
                        key={index}
                        href={item.link}
                        className={item.style ? "btn-nav" : ""}
                    >
                        {item.name}
                    </a>
                ))}
        </nav>
        <div className="hamburger" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
        </div>
    </header>

    )
}