const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');
const { icecreamActions } = require('./features/icecream/icecreamSlice');

console.log('initial state ', store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('updated state ', store.getState());
});

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered(4));
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(12));

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered(4));
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(12));
unsubscribe();
