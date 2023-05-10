import { Box, Button } from '@mui/material';
import React, { useReducer } from 'react';

const Counter = () => {
    const initialState = 0;
    const reducer = (state , action) => {
        if(action.type = "INCREMENT"){
          return state + action.payload;
        }
        else if(action.type = "DECREMENT"){
          return state - action.payload;
        }

    };
    const [state , dispatch] = useReducer( reducer ,initialState );
    return (
        <Box >
        <div>
            <h1>{state}</h1>
        </div>
        <div className='flex flex-cols-2 '>
            <div>
              <Button className='border-2' onClick={()=> dispatch({type: "INCREMENT",payload:5} )} >Increase</Button>
            </div>
            <div>
            <Button onClick={()=> dispatch({type: "DECREMENT", payload:-5})} >Decrease</Button>
            </div>
        </div>
    </Box>
    );
};

export default Counter;