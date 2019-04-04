import React, { Component } from "react";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
    }
    componentDidMount() {
        this.updateList();
    }
    updateList = () => {
        fetch("/api/cards")
            .then(response => response.json())
            .then(cards =>
                this.setState({
                    cards
                })
            );
    };
    render() {
        return (
            <div>
                <ul>
                    {this.state.cards.map(card => (
                        <li>
                            <span>{card.name} </span>
                            <a
                                href={
                                    "https://art.hearthstonejson.com/v1/render/latest/enUS/256x/" +
                                    card.id +
                                    ".png"
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                link
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Cards;
