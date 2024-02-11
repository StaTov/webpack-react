import { useState, useEffect } from "react"
import { getPosts } from "src/API/postsService"
import { TUseFetchPostsReturnValue } from "src/utils/types/hooks/useFetchPostsTypes"
import { TPost } from "src/utils/types/postsService/postsServiceTypes"

export const useFetchPosts = (page?: number, limit?: number): TUseFetchPostsReturnValue => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState('')
    const [data, setData] = useState<TPost[]>([])

    useEffect(() => {
        const controller = new AbortController();

        getPosts({ page, limit, signal: controller.signal })
            .then(res => setData(res))
            .catch(err => setIsError(err.message))
            .finally(() => setIsLoading(false))

        return () => {
            controller.abort()
        }
    }, [])

    return { data, isLoading, isError }
}