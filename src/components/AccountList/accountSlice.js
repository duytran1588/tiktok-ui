import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { accountList } from '~/services/accountListService';

//initialState
const initialState = {
  loading: false,
  suggestedAccountList: [],
  followingAccountList: [],
};

export const fetchAccountList = createAsyncThunk(
  'account/fetchAccount',
  async ({ MaNhom, page, pageSize }, thunkApi) => {
    const res = await accountList(MaNhom, page, pageSize);
    return res.items;
  },
);

export const fetchFollowingAccountList = createAsyncThunk(
  'account/fetchFollowingAccount',
  async ({ MaNhom, page, pageSize }, thunkApi) => {
    const res = await accountList(MaNhom, page, pageSize);
    return res.items;
  },
);

//reducer
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  //extraReducer: handle async feature
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchAccountList.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.suggestedAccountList = payload;
      })
      .addCase(fetchAccountList.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(fetchFollowingAccountList.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchFollowingAccountList.fulfilled, (state, { type, payload }) => {
        state.loading = false;
        state.followingAccountList = payload;
      })
      .addCase(fetchFollowingAccountList.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default accountSlice.reducer;
