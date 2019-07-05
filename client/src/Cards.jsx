import React, { useState, useEffect } from "react";

function Cards() {
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
            {cards.map(card => (
                <img
                    src={
                        "https://art.hearthstonejson.com/v1/render/latest/enUS/256x/" +
                        card.id +
                        ".png"
                    }
                    alt=""
                />
            ))}
        </div>
    );
}

export default Cards;
