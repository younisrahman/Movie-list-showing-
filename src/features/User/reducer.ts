import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

interface IState {
  user: {
    id?: string;
    phone?: string;
    username?: string;
    email?: string;
  };
  error: any;
  id: number;
}

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
  let response;
  try {
    response = await Axios.get('https://jsonplaceholder.typicode.com/users/1');

    return {
      user: response.data,
    };
  } catch (e) {
    // return thunkApi.rejectWithValue(e);
  }
});

export const changeUser = createAsyncThunk(
  'auth/changeUserInfo',
  async (number: number) => {
    let response;
    try {
      response = await Axios.get(
        `https://jsonplaceholder.typicode.com/users/${number}`,
      );

      return {
        user: response.data,
      };
    } catch (e) {
      // return thunkApi.rejectWithValue(e);
    }
  },
);

const initState: IState = {
  user: {
    id: '60a4c36fe7366e001d2216a7',
  },
  error: null as any,
  id: 1,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
      if (payload?.user) {
        state.user = payload.user;
        state.id = state.id + 1;
      }
    });
    builder.addCase(getUserInfo.rejected, (state, { payload }) => {
      state.error = payload;
    });
    builder.addCase(changeUser.fulfilled, (state, { payload }) => {
      if (payload?.user) {
        state.user = payload.user;
        state.id = state.id + 1;
      }
    });
  },
});
// export const { changeUser } = AuthSlice.actions;

export default AuthSlice;
