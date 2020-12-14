import React from "react";
import moment from 'moment';
import './Date.css';

const curfewEndDate = new Date(Date.UTC(2021, 0, 3, -18, 0, 0));

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentDate: new Date() };
        this.state = { dateDiff: 0 }
    }


    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            currentDate: new Date(),
        });
    }

    convertMs(milsec) {
        var seconds = (milsec / 1000);
        var secondsLeft = seconds % 60;
        var minutes = (seconds / 60) % 60;
        var hours = (seconds / (60 * 60)) % 24;
        var days = seconds / (24 * 60 * 60);
        return `${Math.floor(days)} days, ${Math.floor(hours)} hours, ${Math.floor(minutes)} minutes, ${Math.floor(secondsLeft)} seconds`
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card">
                        <div className="circle">
                            <h2>Today's Date</h2>
                        </div>
                        <div className="content">
                            <h2>{moment(this.state.currentDate).format("MM/DD/YYYY, hh:mm:ss")}</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="circle">
                            <h2>Curfew Ends</h2>
                        </div>
                        <div className="content">
                            <h2>{moment(curfewEndDate).format("MM/DD/YYYY, hh:mm:ss")}</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <div className="circle">
                            <h2>Time Until Curfew Ends</h2>
                        </div>
                        <div className="content">
                            <h2>{this.convertMs(curfewEndDate - this.state.currentDate)}</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Clock;