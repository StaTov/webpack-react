import '@testing-library/jest-dom';
import { useFetchPosts } from 'src/utils/hooks/useFetchPosts/useFetchPosts';
import { getPosts } from 'src/API/postsService';
import { fetchPostsTestData } from 'src/utils/constants/__test__/useFetchPosts';
import { renderHook, waitFor } from '@testing-library/react';

jest.mock('src/API/postsService')

describe('useFetchPosts', () => {
    test('return corret data', async () => {
        (getPosts as jest.Mock).mockReturnValue(Promise.resolve(fetchPostsTestData))
        const { result } = renderHook(() => useFetchPosts())
        expect(result.current.isLoading).toBe(true)
        await waitFor(() => {
            expect(result.current.data).toEqual(fetchPostsTestData)
            expect(result.current.isError).toBe('')
            expect(result.current.isLoading).toBe(false)
        })
    })
})


