import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../actions/counter'

const Counter = () => {
    const counter = useSelector(state => state.counterReducers.counter)
    const dispatch = useDispatch()
    const handleDecrement = () => dispatch(actions.decrement())
    const handleIncrement = () => dispatch(actions.increment())

    return (
        <>
            <h1>Counter : {counter}</h1>
            <ul>
                <li><button onClick={handleIncrement}>Incrementar</button></li>
                <li><button onClick={handleDecrement}>Decrementar</button></li>
            </ul>
        </>
    )
}

export default Counter