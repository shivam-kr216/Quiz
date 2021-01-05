import React, {Component} from 'react';
const Context=React.createContext();

const reducer=(state, action)=>{
	switch(action.type){
	    case 'Check':
        return {
            ...state,
            answer_chosen: [action.payload,...state.answer_chosen]
        }
    }
}

export class Provider extends Component{
    state={
        answer_chosen:[],
        dispatch:action=>{
            this.setState(state=>reducer(state,action))
        }  
    }
    render(){
    	return (
    		<Context.Provider value={this.state}>
    			{this.props.children}
    		</Context.Provider>
    	)
    }
};

export const Consumer = Context.Consumer;