import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils/renderWithProviders";
import { useFetchPosts } from 'src/utils/hooks/useFetchPosts/useFetchPosts';
import { dataValue, errorValue, loadingValue } from 'src/utils/constants/__test__/ListPage';
import ListPage from './ListPage';
import { ERROR } from 'src/utils/constants/stringConstants';

jest.mock('src/utils/hooks/useFetchPosts/useFetchPosts')

describe('<ListPage/>', () => {
    test('Render isLoading', () => {
        (useFetchPosts as jest.Mock).mockReturnValue(loadingValue)
        renderWithProviders(<ListPage />)
        expect(screen.getByTestId('loading-page')).toBeInTheDocument()
    })
    test('Render isError', () => {
        (useFetchPosts as jest.Mock).mockReturnValue(errorValue)
        renderWithProviders(<ListPage />)
        expect(screen.getByText(`${ERROR}`)).toBeInTheDocument()
    })
    test('Render data', () => {
        (useFetchPosts as jest.Mock).mockReturnValue(dataValue)
        renderWithProviders(<ListPage />)
        expect(screen.getByText(/title/i)).toBeInTheDocument()
    })
})