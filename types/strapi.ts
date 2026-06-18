
export type StrapiImage = {
    url: string;
    caption: string;
};

export type HeadingType = {
    subtitle: string;
    text: string;
    title: string;
};

export type BannerBlockType = {
    __typename: "ComponentDynamiczoneBanner";
    id: string;
    heading: HeadingType;
    button: { link: string; name: string; statusBtn: boolean; style: string };
    img_banner: StrapiImage;
    title: string;
    text: string;
    list_item: { description: string; title: string; icon: StrapiImage }[];
};