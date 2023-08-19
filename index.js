const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreatore = redux.bindActionCreators;

const CAKE_OREDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';

const ICECREAM_OREDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

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

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_OREDERED,
    payload: qty,
  };
}

function restockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 40,
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
    case ICECREAM_OREDERED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
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

const actions = bindActionCreatore(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake(2);
actions.orderCake(3);
actions.orderCake(1);
actions.restockCake(8);
actions.orderIceCream(4);
actions.orderIceCream(2);
actions.orderIceCream(8);
actions.restockIceCream(22);
unsubscribe();
