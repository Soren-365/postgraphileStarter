import { H1 } from '@blueprintjs/core'
import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

const useCounter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
    const increment = () =>
        dispatch({
            type: 'INCREMENT',
        })
    const decrement = () =>
        dispatch({
            type: 'DECREMENT',
        })
    const reset = () =>
        dispatch({
            type: 'RESET',
        })
    return { count, increment, decrement, reset }
}

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter()
    return (
        <div>
            <H1>
                Count: <span>{count}</span>
            </H1>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
