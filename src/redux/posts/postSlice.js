import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    filteredData: [],
    error: ""
}

const fetchData = createAsyncThunk("posts/fetchData", async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return resp.data;
});

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        filterArray: (state, action) => {
            state.filteredData = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.filteredData = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
});

// Extract Actions

const { filterArray } = postSlice.actions;

export {
    postSlice,
    fetchData,
    filterArray
}