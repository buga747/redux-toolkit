const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
  numOfIcecreams: 25,
};

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: (state, action) => {
      const amount = action.payload || 1;
      state.numOfIcecreams -= amount;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload;
    },
  },
  //   extraReducers: {
  //     ['cake/ordered']: state => {
  //       state.numOfIcecreams -= 1;
  //     },
  //   },
  extraReducers: builder => {
    builder.addCase(cakeActions.ordered, state => {
      state.numOfIcecreams -= 1;
    });
  },
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
