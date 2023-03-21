import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

const fetchComments = createAsyncThunk("comments/fetchComments", async (id) => {
    const resp = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    return resp.data;
});

const commentSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchComments.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchComments.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

export {
    commentSlice,
    fetchComments
}