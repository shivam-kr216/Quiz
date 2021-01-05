import React, { Component } from 'react';

class Instruction extends Component {
    clickEvent=()=>{
        this.props.history.push('/quiz');
    }
    render() {
        return (
            <div className="main-container">
                <h1>Instrutions</h1>
                <p>1. Test contains 25 question.</p>
                <p>2. Each question consist of 1 marks.</p>
                <p>3. There is no negative marking.</p>
                <p>4. Scroll to view rest of the question.</p>
                <p>5. Click on given button to start the test</p>
                <button onClick={this.clickEvent}>Start Quiz</button>
            </div>
        );
    }
}

export default Instruction;