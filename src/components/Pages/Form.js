
import React, { useReducer } from 'react';

const Form = () => {
const initialState = {
    fName: "",
    lName: "",
    email: ""
};

const reducer = (state , action) =>{
    switch(action.type){
        case "INPUT":
        return {
            ...state,
            [action.payload.name]:action.payload.value
        }
        default:
            return state;
       
    
    }
    }
 

    const [state , dispatch] = useReducer( reducer , initialState)
    const submit = (event) =>{
   event.preventDefault();
   console.log(state)
    }
    return (
        <div>
            <form action="" onSubmit={submit}>
                <label htmlFor="fName">
                    <input type="text" name="fName" onClick={(e)=> dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value}})}/>
                </label>
                <br />
                <label htmlFor="lName">
                    <input type="text" name="lName" onClick={(e)=> dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value}})}/>
                </label>
                <br />
                <label htmlFor="Number">
                    <input type="text" name="email"onClick={(e)=> dispatch({type:"INPUT", payload:{name:e.target.name , value:e.target.value}})} />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;