import { actionsTypes } from '../constants/actionsTypes'

const actions = {
    increment: () => ({
        type: actionsTypes.COUNTER_INCREMENT
    }), 
    decrement : () => ({
        type: actionsTypes.COUNTER_DECREMENT
    })
}

export { actions }