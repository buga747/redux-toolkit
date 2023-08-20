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
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;
