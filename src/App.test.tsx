import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Leticia Bouchenna portfolio identity", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: "Leticia Bouchenna" })).toBeInTheDocument();
  expect(screen.getByText(/I build end-to-end AI systems/i)).toBeInTheDocument();
});
