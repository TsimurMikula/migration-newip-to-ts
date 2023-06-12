export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ISourcesData {
    status: string;
    sources: ISources[];
}

export interface IArticle {
    source: {
        id: string;
        name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface IArticleData {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface IOptions {
    [key: string]: string;
}

export type Resp = {
    endpoint: string;
    options?: IOptions;
};

export type Callback<T> = (data: T) => void;
