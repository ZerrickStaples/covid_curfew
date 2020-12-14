import React from "react";
import moment from 'moment';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentDate: new Date()};
        this.state = {curfewEndDate: new Date(Date.UTC(2021, 0, 2, -1, 0, 0))};
    }
    
        componentDidMount() {
            this.timerID = setInterval(() => this.tick(), 1000);
        }
    
        componentWillUnmount() {
            clearInterval(this.timerID);
        }

    tick() {
        this.setState({
            currentDate: new Date()
        });
    }

    calculate() {
        
    }

    render() {
        return(
            <div>
                <h1>{moment(this.state.currentDate).format("MM/DD/YYYY, hh:mm:ss")}</h1>
                <h1>{moment(this.state.curfewEndDate).format("MM/DD/YYYY, hh:mm:ss")}</h1>
            </div>            
        )
    }
}

export default Clock;