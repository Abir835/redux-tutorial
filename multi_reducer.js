const {createStore, combineReducers, applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

const GETPRODUCT = 'GETPRODUCT';
const ADDPRODUCT = 'ADDPRODUCT';

const GETCART = 'GETCART';
const ADDCART = 'ADDCART';


const productState = {
    product: ['apple'],
    productItem: 1
};


const cartState = {
    cart: ['apple'],
    cartItem: 1
}


const getProductAction = () =>{
    return{
        type: GETPRODUCT,
    };
};

const addProductAction = (product) =>{
    return{
        type: ADDPRODUCT,
        payload: product
    };
};


const getCartAction = () =>{
    return{
        type:GETCART
    };
};

const addCartAction = (cart) =>{
    return{
        type:ADDCART,
        payload:cart
    };
};



const productReducer = (state=productState, action) =>{
    switch(action.type){
        case GETPRODUCT:
            return{
                ...state
            };
        
        case ADDPRODUCT:
            return{
                ...state,
                product: [...state.product, action.payload],
                productItem: state.productItem + 1
            };
        default:
            return state;
    };
};


const cartReducer = (state=cartState, action) =>{
    switch(action.type){
        case GETCART:
            return{
                ...state
            };
        case ADDCART:
            return{
                ...state,
                cart: [...state.cart, action.payload],
                cartItem: state.cartItem + 1,
            };
        
        default:
            return state;
    };
};


const rootReducer  = combineReducers({
    productR: productReducer,
    cartR: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
store.subscribe(() =>{
    console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("banana"));



