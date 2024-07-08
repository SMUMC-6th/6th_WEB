import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMusics = createAsyncThunk(
  'musics/fetchMusics',
  async () => {
    try {
      const response = await axios.get('http://localhost:8080/musics');
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        throw new Error('404 Page Not Found');
      } else {
        throw new Error('Failed to fetch musics');
      }
    }
  }
);

const musicSlice = createSlice({
  name: 'musics',
  initialState: {
    musics: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMusics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.musics = action.payload;
      })
      .addCase(fetchMusics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
})

export default musicSlice.reducer;