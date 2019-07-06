import React, { useState, useEffect } from "react";

function App() {
    useEffect(() => {
        const fetchRawCardData = async () => {
            return await fetch("/api/cards").then(result => result.json());
        };
        const createFilterLists = async () => {
            const cardData = await fetchRawCardData();

            const keys = cardData.map(card => {
                return Object.keys(card);
            });

            const uniqueKeys = new Set(keys.flat());

            const filterLists = {};

            uniqueKeys.forEach(key => {
                filterLists[key] = [];
            });

            cardData.forEach(card => {
                const entries = Object.entries(card);
                entries.forEach(entry => {
                    if (!filterLists[entry[0]].includes(entry[1])) {
                        filterLists[entry[0]].push(entry[1]);
                    }
                });
            });

            console.log(filterLists);
        };
        createFilterLists();
    }, []);

    return (
        <div>
            <h1>my app</h1>
        </div>
    );
}

export default App;
