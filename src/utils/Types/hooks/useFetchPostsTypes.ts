import { TPost } from "../postsService/postsServiceTypes"

export type TUseFetchPostsReturnValue = {
    data: TPost[];
    isLoading: boolean;
    isError: string;
}