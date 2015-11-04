import React from "react";
import io from "socket.io-client";

export default class Freenode extends React.Component {
    constructor() {
        super();
        this.state = { time: "" };
    }

    componentDidMount() {
        const socket = io("10.0.1.19");

        socket.on("time", (payload) => {
            this.setState({ time: payload.time });
        });
    }

    render() {
        return <div>{this.state.time}</div>;
    }
};