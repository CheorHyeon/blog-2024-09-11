export type BasePost = {
    id: number; 
    title: string;
    subTitle: string;
    content: string
};

export type RawPost = BasePost & {
    tag: string;
};

export type Post = BasePost & {
    tags: string[];
    tagLinks: {
        tag: string;
        link: string
    }[];
}