import React, { Component } from 'react';
import data from './data';
import RadioButton from './RadioButton';
import {Consumer} from './Context.js';
//import './Timer.js';
//import { Redirect } from "react-router-dom";

class Question extends Component {

    handleClick = (dispatch,e)=>{
        const answers=[];
        let rbs = document.querySelectorAll('form');
        for (const rb of rbs) {
            let k=0;
            let checks = rb.querySelectorAll('input')
            for(const check of checks){
                //console.log(check)
                if(check.checked){
                    answers.push(check.value);
                    k=1;
                }
            }
            if(k===0){
                answers.push(null)
            }
        }
        dispatch({type:'Check', payload:answers});
       this.props.history.push('/checkAnswer');
    }

    render() {
        //console.log(data);
        return (

            <Consumer>
                {value=>{
                    const {dispatch}=value;
                    return (<div className="main-container">
                        {/*<p id="countdown" dangerouslySetInnerHTML={updateCountdown()}>
                        </p>*/}
                        {data.results.map((questions)=>
                            <div className="container">
                                <p>{questions.id}.&nbsp;
                                {questions.question}<span>Difficulty: 
                                    {questions.difficulty}</span></p>
                                
                                <form>
                                {questions.incorrect_answers.map((option)=>
                                    <RadioButton id="1" value={option} />
                                )}
                                </form>
                            </div>
                        
                        )}
                        <button onClick={this.handleClick.bind(this,dispatch)}>Submit</button> 
                    </div>
                )}}
            </Consumer>
            
        );
        
    }
};

export default Question;