import React from 'react';

class Score extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: 0,
            away: 0
        }
       
    }
    handleHomeScore = (value) => {
        this.setState({
            home: this.state.home + value
        })
    }

    handleAwayScore = (value) => {
        this.setState({
            away: this.state.away + value
        });
    }

    submitResult = (e) =>{
        console.log(this.state)
    }

    render(){
        return (
            <div className="container">
                <div className="d-flex">
                    <div className="col-6">
                        <Counter label="home" score={this.state.home} handleScoreIncrease={this.handleHomeScore}/>
                    </div>
                    <div className="">
                        <h1>:</h1>
                    </div>
                    <div className="col-6">
                     <Counter label="away" score={this.state.away} handleScoreIncrease={this.handleAwayScore}/>  
                    </div>
                </div>
                <button type="button" onClick={this.submitResult}>Submit Result</button>
            </div>
        )
    }
}


class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    handleClick = (e) => {
        this.props.handleScoreIncrease(1)
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <h2>{this.props.score}</h2>
                <button onClick={this.handleClick}>Add 1</button>
            </div>
        )
    }

}

export default Score;