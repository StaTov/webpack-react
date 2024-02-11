import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils/renderWithProviders";
import userEvent from '@testing-library/user-event';
import AppRouter from '.';
import { initialValue } from 'src/utils/constants/__test__/AppRouter';
import { useFetchPosts } from 'src/utils/hooks/useFetchPosts';

jest.mock('src/utils/hooks/useFetchPosts/useFetchPosts')

describe("<AppRouter/> test", () => {
    test("correct navigation <about>", async () => {
        renderWithProviders(<AppRouter />)
        const counterLink = screen.getByTestId('main-link')
        const aboutLink = screen.getByTestId('about-link')
        expect(await screen.findByTestId("counter-page")).toBeInTheDocument();
        await userEvent.click(aboutLink)
        const about = await screen.findByTestId('about-page')
        expect(about).toBeInTheDocument();
        await userEvent.click(counterLink)
        const counter = await screen.findByTestId('counter-page')
        expect(counter).toBeInTheDocument();
    })
    test("render main-page", () => {
        renderWithProviders(<AppRouter />)
        const mainPage = screen.getByTestId('main-page')
        expect(mainPage).toBeInTheDocument()
    })
    test("render list-page", async () => {
        (useFetchPosts as jest.Mock).mockReturnValue(initialValue)
        renderWithProviders(<AppRouter />)
        const listLink = screen.getByTestId('list-link')
        await userEvent.click(listLink)
        const linkPage = await screen.findByTestId('list-page')
        expect(linkPage).toBeInTheDocument()
    })
})