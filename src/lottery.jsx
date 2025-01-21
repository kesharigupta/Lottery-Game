import { useState } from "react";
import "./lottery.css";
import { genticket, sum } from "./helper";

export default function Lottery() {
    let [ticket, setTicket] = useState(genticket(3));
    let isWinning = sum(ticket) === 15;

    let buyTicket = () => {
        setTicket(genticket(3));
    };

    return (
        <>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={buyTicket}>Buy New Ticket</button>
            <br />
            <h3>{isWinning && "🎉 Congratulations, you won! 🎉"}</h3>
        </>
    );
}
