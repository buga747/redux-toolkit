import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state, action) => {
      const amount = action.payload || 1;
      state.numOfCakes -= amount;
    },
    restocked: (state, action) => {
      state.numOfCakes = state.numOfCakes + action.payload;
    },
  },
});

export default cakeSlice.reducer
export const { ordered, restocked } = cakeSlice.actions