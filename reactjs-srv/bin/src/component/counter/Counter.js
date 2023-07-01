import './Counter.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from './actions';
import React, { Component } from 'react';

function Counter() {
   const counter = useSelector((state) => state);
   const dispatch = useDispatch();
   return (
      <div className = "Counter">
         <div className='count'>{counter}</div>
         <div>
            <button onClick = {() => dispatch(increment())}>INCREMENT BY 1</button>
         </div>
         <div>
            <button onClick = {() => dispatch(decrement())}>DECREMENT BY 1</button>
         </div>
         <button onClick = {() => dispatch(reset())}>RESET</button>
      </div>
   );
}
export default Counter;