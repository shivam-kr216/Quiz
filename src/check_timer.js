import React, { Component } from 'react';
import data from './data';
import RadioButton from './RadioButton';
import {Consumer} from './Context.js';
import Timer from './Timer';
//import { Redirect } from "react-router-dom";

function fun(){
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSecond, setTimerSeconds] = useState('00');

    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date('May 30, 2020').getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = countdownDate-now;
            const days = Math.floor(distance / (1000*60*60*24));
            const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
            const minutes = Math.floor((distance % (1000*60*60))/(1000*60*60));
            const seconds = Math.floor((distance % (1000*60))/1000);
        },1000);
        if(distance<0){

        }
        else{
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
    }
}

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
        const {count} = this.state;
        {fun()};
        return (
            <Consumer>
                {value=>{
                    const {dispatch}=value;
                    return (<div className="main-container">
                        <Timer></Timer>
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