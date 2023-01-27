import React, { useReducer } from 'react';

const ShortForm = () => {

    const initialState = {
        name: "",
        email: "",
        password: "",
    }
    const reducer = (state, action) => {
        if (action.type === "INPUT") {
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state);

    return (
        <div>
            <form>
                <input type="text" name="name" id="" placeholder='Name' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                <br />
                <input type="text" name="email" id="" placeholder='Email' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                <br />
                <input type="text" name="password" id="" placeholder='Password' onBlur={(e) => dispatch({ type: "INPUT", payload: { name: e.target.name, value: e.target.value } })} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ShortForm;