const redux = require('redux');
const createStore = redux.createStore;

const CAKE_OREDERED = 'CAKE_ORDERED';

function orderCake() {
  return {
    type: CAKE_OREDERED,
    quantuty: 1,
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
        numOfCakes: state.numOfCakes - 1,
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

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unsubscribe();
