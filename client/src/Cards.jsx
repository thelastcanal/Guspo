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
                {this.state.cards.map(card => (
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
}

export default Cards;
