import { TGetPostsProps, TPost } from "src/utils/types/postsService/postsServiceTypes"
import { POSTS_URL } from "src/utils/constants/API/postsServiceURI"
import fetch from 'node-fetch';

export const getPosts = async ({ page = 1, limit = 10, signal }: TGetPostsProps): Promise<TPost[]> => {
    const response = await fetch(`${POSTS_URL}?_page=${page}&_limit=${limit}`,{
        signal,
    });
    return response.json();
}

