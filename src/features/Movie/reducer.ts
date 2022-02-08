import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

interface IState {
  latestMovie: object;
  popularMovie: object[];
}

export const getPopularMovie = createAsyncThunk(
  'auth/getPopularMovie',
  async () => {
    let response;
    try {
      response = await Axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=699b4f84399ec170f877caac4b76a808&page=1',
      );

      return {
        popularMovie: response.data,
      };
    } catch (e) {
      // return thunkApi.rejectWithValue(e);
    }
  },
);

export const getLatestMovie = createAsyncThunk(
  'auth/getLatestMovie',
  async () => {
    let response;
    try {
      response = await Axios.get(
        'https://api.themoviedb.org/3/movie/latest?api_key=699b4f84399ec170f877caac4b76a808',
      );

      return {
        latest: response.data,
      };
    } catch (e) {
      // return thunkApi.rejectWithValue(e);
    }
  },
);

const initState: IState = {
  latestMovie: {},
  popularMovie: [],
};

const movieSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPopularMovie.fulfilled, (state, { payload }) => {
      if (payload) {
        state.popularMovie = payload.popularMovie;
      }
    });
    builder.addCase(getLatestMovie.fulfilled, (state, { payload }) => {
      state.latestMovie = payload.latest;
    });
  },
});
// export const { changeUser } = AuthSlice.actions;s

export default movieSlice;
