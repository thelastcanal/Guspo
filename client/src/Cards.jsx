import React, { Component } from "react";

class Cards extends Component {
    state = {};

    componentDidMount() {
        fetch("/api/cards")
            .then(response => response.json())
            .then(result => console.log(result));
    }

    render() {
        return (
            <div>
                <p>some cards</p>
            </div>
        );
    }
}

export default Cards;
