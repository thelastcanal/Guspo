import React, { useState, useEffect } from "react";

function Layout({ data }) {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "75% 25%"
            }}
        >
            <div>
                <Filters filters={data} />
                <Cards cards={data} />
            </div>
            <Deck />
        </div>
    );
}

function Filters() {
    return (
        <div>
            <h1>filters</h1>
        </div>
    );
}

function Cards({ cards }) {
    return (
        <div
            id="card"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridGap: "1rem 1rem"
            }}
        >
            {cards.map(card => (
                <img
                    style={{ width: "100%", marginBottom: "-20%" }}
                    src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${
                        card.id
                    }.png`}
                    alt=""
                />
            ))}
        </div>
    );
}

function Deck() {
    return (
        <div id="deck">
            <div>
                <h1>deck</h1>
            </div>
        </div>
    );
}

function App() {
    const [cards, setCards] = useState([]);

    const updateList = () => {
        fetch("/api/cards")
            .then(response => response.json())
            .then(cards => setCards(cards));
    };

    useEffect(() => {
        updateList();
    }, []);

    return (
        <div>
            <Layout data={cards} />
        </div>
    );
}

export default App;
