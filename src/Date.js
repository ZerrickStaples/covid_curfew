import React from "react";
import moment from 'moment';

const curfewEndDate = new Date(Date.UTC(2020, 11, 22, -18, 0, 0));

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentDate: new Date()};
        this.state = {dateDiff: 0}
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

    convertMs(milsec){
        var seconds = (milsec/1000);
        var secondsLeft = seconds % 60;
        var minutes = (seconds / 60) % 60;
        var hours = (seconds / (60*60)) % 24;
        var days = seconds / (24*60*60);
        return `${Math.floor(days)} days, ${Math.floor(hours)} hours, ${Math.floor(minutes)} minutes, ${Math.floor(secondsLeft)} seconds`
    }

    render() {
        return
        (
            <div>
                <div  className = "currentDateDiv">
                    <h1>{moment(this.state.currentDate).format("MM/DD/YYYY, hh:mm:ss")}</h1>
                </div>
                <div className = "curfewEndDateDiv">
                    <h1>{moment(curfewEndDate).format("MM/DD/YYYY, hh:mm:ss")}</h1>
                </div>
                <div className = "remainingTimeDiv">
                    <h1>{this.convertMs(curfewEndDate - this.state.currentDate)}</h1>
                </div>
            </div>                    
            )
    }
}

export default Clock;