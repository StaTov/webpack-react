import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test('App is render', () => {
    render(<App />)
    expect(screen.getByText(/Hello webpack/i)).toBeInTheDocument()
})
test('App snapshot', () => {
    const app = render(<App />)
    expect(app).toMatchSnapshot()
})