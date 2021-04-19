import React from "react";
import { render, screen } from "@testing-library/react";

import { App } from "src/app";

describe("App component", () => {
    it("Should render", () => {
        render(<App />);
        const app = screen.queryByTestId("app");
        expect(app).not.toBeNull();
    });
});
