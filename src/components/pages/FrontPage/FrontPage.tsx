import { Button } from "../../ui/button";

export function FrontPage() {
    return(
        <header className="flex justify-center mt-12 w-full">
            <h1 className="text-8xl  text-cyan-800">BattleShip Warfare</h1>
            <Button>New Game</Button>
        </header>
    )
}