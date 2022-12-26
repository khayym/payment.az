import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_CATEGORIES } from '../utils/api';
import { getFcmTokenMMKV } from "../utils/mmvk";

const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchCategories = createAsyncThunk('categories/fetch', async () => {
    const deviceToken = getFcmTokenMMKV();
    return axios
        .get(GET_CATEGORIES, {
            headers: { 'device-token': deviceToken }
        })
        .then(res => res.data.results);
})

const categoriesReducer = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state, action) => {
            state.loading = true;
            state.error = '';
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Xeta bas verdin, zehemt olmasa yeniden ceht edin'
        })
    }
})

export default categoriesReducer.reducer