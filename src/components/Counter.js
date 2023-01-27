import React, { useReducer } from 'react';

const Counter = () => {

    const initialState = 0

    const reducer = (state, action) => {
        if (action.type === "INCREMENT") {
            return state + action.payload.count
        }
        else if (action.type === "DECREMENT") {
            return state - action.payload.count
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT", payload: { count: 10 } })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT", payload: { count: 10 } })}>Decrement</button>
        </div>
    );
};

export default Counter;