import React, { Component } from 'react';
import data from './data';
import { Consumer } from './Context';
import './style.css';

class CheckAnswer extends Component {
  state = {
    true_answer: []
  }

  constructor(props) {
    super(props);
    {
      data.results.map((answer) =>
        this.setState({ true_answer: this.state.true_answer.push(answer.correct_answer) })
      )
    }
  }

  onSubmit=()=>{
    this.props.history.push('/');
  }

  render() {
    let marks=0
    return (
      <div>
        <Consumer>
          {value => {
            const { answer_chosen } = value;
            return (<React.Fragment>{answer_chosen[0].map((e1, index) => {
              return ((e1 === this.state.true_answer[index]) ?
                <div style={{textAlign:"center", padding: "10px", lineHeight: "2rem",
                fontSize: "18px", backgroundColor:"green", margin:"10px"}}>
                Correct Answer: {this.state.true_answer[index]}<span>Marks: 1</span>
                <span style={{display:"none"}}>
                  {++marks}</span></div>:
                <div style={{textAlign:"center", padding: "10px", lineHeight: "2rem",
                fontSize: "18px", backgroundColor:"red", margin:"10px"}}>
                  Wrong answer: {e1}</div>)
            })}
            <div className="viewMarks"><h1>{(marks/25)*100}%</h1></div>
            <button onClick={this.onSubmit}>Retake Quiz</button>
            </React.Fragment>)
          }}
          
        </Consumer>
        
      </div>
    )

  }
};

export default CheckAnswer;