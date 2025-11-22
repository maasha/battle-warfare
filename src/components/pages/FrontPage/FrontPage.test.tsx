import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FrontPage } from "./FrontPage";

const renderComponent = () => {
    render(<FrontPage />);
}

describe("FrontPage", () => {
    it("should render", () => {
        renderComponent()
        expect(screen.getByText("BattleShip Warfare")).toBeInTheDocument();
    });

    it("should have a `New Game` button", () => {
        renderComponent()
        expect(screen.getByRole('button'))

    })

    // it("should have a menu", () => {
    //     renderComponent()
    //     expect(screen.getByRole('menu'))
    // })
});
