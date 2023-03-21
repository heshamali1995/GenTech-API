import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const fetchDetails = createAsyncThunk("details/fetchDetails", async (id) => {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return resp.data;
});

const detailSlice = createSlice({
    name: "details",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchDetails.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export {
    detailSlice,
    fetchDetails
}