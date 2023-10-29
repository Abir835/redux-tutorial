// state - count:0
// action - increment, decrement, reset
// reducer
//store
 
const {createStore} = require("redux");
const INCREMENT = 'INCREMENT';
const INCREMENTBYVALUE = 'INCREMENTBYVALUE';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const ADD_USER = 'ADD_USER';
// state
const initialState = {
    user: ['Abir'],
    count: 0
}

// create action type

const incrementCounterAction = () =>{
    return{
        type: INCREMENT,
    };
};


const deccrementCounterAction = () =>{
    return{
        type: DECREMENT,
    };
};

const resetCounterAction = () =>{
    return{
        type: RESET,
    };
};

const incrementCounterActionByValue = (value) =>{

    return{
        type:INCREMENTBYVALUE,
        payload: value,
    }
};

const addUser = (user) =>{
    return{
        type: ADD_USER,
        payload: user
    }
};


// reducer

const counterreducer = (state=initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            return{
                ...state,

                count: state.count + 1,
            };
        case DECREMENT:
            return{
                ...state,
                count: state.count - 1,
            };
        
        case RESET:
            return{
                ...state,
                count: 0,
            };
        case INCREMENTBYVALUE:
            return{
                ...state,
                count: state.count + action.payload,
            }
        case ADD_USER:
            return{
                ...state,
                user: [...state.user, action.payload],
                count: state.count + 1
            } 

        default:
            state;
    };
};


// create store
const store = createStore(counterreducer);
store.subscribe(() =>{
    console.log(store.getState());
});

// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterAction());

// store.dispatch(incrementCounterActionByValue(5));
store.dispatch(addUser("Hasan"));

store.dispatch(addUser("Azwad"));
 