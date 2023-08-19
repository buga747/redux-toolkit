const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreatore = redux.bindActionCreators;

const CAKE_OREDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

function orderCake(qty = 1) {
  return {
    type: CAKE_OREDERED,
    payload: qty,
  };
}

function restockCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
};

// (prevState, acton) => newState;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_OREDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('initial state', store.getState());

const unsubscribe = store.subscribe(() =>
  console.log('updated state', store.getState())
);

// store.dispatch(orderCake(2));
// store.dispatch(orderCake(1));
// store.dispatch(orderCake(1));

// store.dispatch(restockCake(5));

const actions = bindActionCreatore({ orderCake, restockCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(8);
unsubscribe();
