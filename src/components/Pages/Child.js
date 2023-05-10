import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

const Child = () => {
    const [count , setCount] = useState(0);
    return (
        <Box >
            <div>
                <h1>{count}</h1>
            </div>
            <div className='flex flex-cols-2 '>
                <div>
                  <Button className='border-2' onClick={()=> setCount(count+1)}>Increase</Button>
                </div>
                <div>
                <Button onClick={()=> setCount((prv)=>(prv-1))}>Decrease</Button>
                </div>
            </div>
        </Box>
    );
};

export default Child;