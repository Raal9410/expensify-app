import {createStore, combineReducers} from 'redux'

const demoState = {
    expenses: [{
        id: 'dnsakfldjkas',
        description: 'January rent',
        note: 'This was the final payment for that address',
        amount: 82400,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}