import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FrontPage } from "./FrontPage";

describe("FrontPage", () => {
	it("should render", () => {
		render(<FrontPage />);
		expect(screen.getByText("BattleShip Warfare")).toBeInTheDocument();
	});
});
