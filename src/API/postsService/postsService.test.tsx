import '@testing-library/jest-dom';
import fetch from 'node-fetch';
const { Response } = jest.requireActual('node-fetch');
import { getPosts } from 'src/API/postsService'

jest.mock('node-fetch');

describe('API/postsService', () => {
    test('getPosts', async () => {
        (fetch as unknown as jest.Mock).mockReturnValue(Promise.resolve(new Response(1)));
        const result = await getPosts({})
        expect(result).toBe(1)
    })
})