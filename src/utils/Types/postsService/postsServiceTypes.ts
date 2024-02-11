export type TPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type TGetPostsProps = {
    page?: number;
    limit?: number;
    signal?: AbortSignal;
}