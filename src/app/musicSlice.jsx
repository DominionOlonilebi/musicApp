import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  host: null,
  isLoadingAudios: false,
  isRejectedAudios: false,
};

export const getAudios = createAsyncThunk("getAudios", async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      "https://deezerdevs-deezer.p.rapidapi.com/infos",
      {
        headers: {
          "X-RapidAPI-Key":
            "ab6c45a98dmsh97fbfc7c6573e19p18e27fjsn2ad6b529659b",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAudios.pending, (state) => {
      state.isLoadingAudios = true;
      state.isRejectedAudios = false;
    });
    builder.addCase(getAudios.rejected, (state) => {
      state.isLoadingAudios = false;
      state.isRejectedAudios = true;
    });
    builder.addCase(getAudios.fulfilled, (state, action) => {
      state.isLoadingAudios = false;
      state.isRejectedAudios = false;
      state.host = action.payload;
    });
  },
});

export default musicSlice.reducer;
