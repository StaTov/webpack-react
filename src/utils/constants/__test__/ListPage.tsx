import { TUseFetchPostsReturnValue } from "src/utils/types/hooks/useFetchPostsTypes";

export const loadingValue: TUseFetchPostsReturnValue = {
    data: [],
    isLoading: true,
    isError: ''
}
export const errorValue: TUseFetchPostsReturnValue = {
    data: [],
    isLoading: false,
    isError: 'error'
}
export const dataValue: TUseFetchPostsReturnValue = {
    data: [
        {
            userId: 1,
            id: 1,
            title: 'Title',
            body: 'body'
        }
    ],
    isLoading: false,
    isError: ''
}