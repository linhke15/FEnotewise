type footerProps = {
    dataFooter: {
        logo?: {
            name?: string;
        };
        lists?: {
            title?: string;
            menufooter?: {
                name?: string;
                link?: string;
            }[];
        }[];
        text_left?: string;
        text_right?: string;
    };
};

export default function Footer({ dataFooter }: footerProps) {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-brand">
                    <a href="/" className="logo" dangerouslySetInnerHTML={{
                        __html: dataFooter?.logo?.name || "",
                    }} />
                </div>

                {dataFooter?.lists?.map((item: any, index: any) => (
                    <div className="footer-col" key={index}>
                        <h5>{item?.title}</h5>

                        {item?.menufooter?.map((menu: any, i: any) => (
                            <a key={i} href={menu?.link}>
                                {menu?.name}
                            </a>
                        ))}
                    </div>
                ))}
            </div>

            <div className="footer-bottom">
                <span>{dataFooter?.text_left}</span>
                <span>{dataFooter?.text_right}</span>
            </div>
        </footer>


    )
}