const {createStore} = require("redux");

// defining constant

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// State
// redux can do state managment 

const initialCounterState = {
    count: 0
}

const initialUsersState = {
    users: [{name: "Abir Hasan"}],
}

// Action will work object  ibject two types 1. type, 2. payload -- can do data transfer
// INCREENT COUNTER

const incrementCounter = () =>{
    return{
        type: INCREMENT,
    };
};


// DECREMENT COUNTER
const decrementCounter = () =>{
    return{
        type: DECREMENT,
    };
};

// USER

const addUser = (user) =>{
    return{
        type:ADD_USER,
        payload: user
    };
};

// create reducer for counter this is pure fuction
const counterReducer = (state=initialCounterState, action) =>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return{
                ...state,
                count: state.count -1,
            }
            default:
                state;
    };
};


// store create

const store = createStore(counterReducer);
store.subscribe(() => {
    console.log(store.getState())
});


// dispatch action

store.dispatch(incrementCounter());

// how to work
//1. State
//2. dispatch action
//3. reducer based on action type
//4. store --getState(), dispatch(), subscribe()