import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "./posts/postSlice";
import { detailSlice } from "./details/detailSlice";
import { commentSlice } from "./comments/commentSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        posts: postSlice.reducer,
        details: detailSlice.reducer,
        comments: commentSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;