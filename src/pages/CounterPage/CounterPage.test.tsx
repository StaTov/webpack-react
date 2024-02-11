import '@testing-library/jest-dom';
import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils/renderWithProviders"
import userEvent from '@testing-library/user-event'
import CounterPage from './CounterPage';

const initialState = {
    value: 0
}

describe("<CounterPage/> test", () => {
    test("correct increment handle", async () => {
        renderWithProviders(<CounterPage />, {
            preloadedState: {
                counter: initialState
            }
        })
        let value = screen.getByTestId('value')
        expect(value).toHaveTextContent('0')
        const button = screen.getByTestId('increment-button')
        await userEvent.click(button)
        expect(value).toHaveTextContent('1')
    })
    test("correct decrement handle", async () => {
        renderWithProviders(<CounterPage />, {
            preloadedState: {
                counter: initialState
            }
        })
        let value = screen.getByTestId('value')
        expect(value).toHaveTextContent('0')
        const button = screen.getByTestId('decrement-button')
        await userEvent.click(button)
        expect(value).toHaveTextContent('-1')
    })
    test("correct incrementByAmount handle", async () => {
        renderWithProviders(<CounterPage />, {
            preloadedState: {
                counter: initialState
            }
        })
        let inputRange = screen.getByTestId('input-range')
        fireEvent.change(inputRange, { target: { value: "22" } })
        let value = screen.getByTestId('value')
        expect(value).toHaveTextContent('0')
        const button = screen.getByTestId('increment-by-amount-button')
        await userEvent.click(button)
        expect(value).toHaveTextContent('22')
    })
    test("correct snapshot", () => {
        const page = renderWithProviders(<CounterPage />);
        expect(page).toMatchSnapshot()
    })

})