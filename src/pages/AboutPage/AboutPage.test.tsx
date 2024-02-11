import '@testing-library/jest-dom';
import { screen } from "@testing-library/react";
import { renderWithProviders } from "src/utils/test-utils/renderWithProviders"
import AboutPage from "./AboutPage"

const initialValue = {
    value: 10
}

describe("AboutPage test", () => {
    test("correct snapshot", () => {
        const page = renderWithProviders(<AboutPage />);
        expect(page).toMatchSnapshot()
    })
    test("show correct initial state", () => {
      renderWithProviders(<AboutPage />, {
            preloadedState: {
                counter: initialValue
            }
        });
        expect(screen.getByText(/10/)).toBeInTheDocument();
    })
})