import React from 'react';
import { useDispatch } from 'react-redux';
import increament from '../actions';

const MyButton = ()=> {
    let dispatch = useDispatch();
    return(
        <button onClick={()=> dispatch(increament(1))}>increase counter</button>
    )
}

export default MyButton;