import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_CATEGORIES } from '@env';

const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchCategoriest = createAsyncThunk('categories/fetch', async () => {
    return axios
        .get(GET_CATEGORIES)
        .then(res => res.data.results);
})

const categoriesReducer = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCategoriest.pending, (state, action) => {
            state.loading = true;
            state.error = '';
        })
        builder.addCase(fetchCategoriest.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchCategoriest.rejected, (state, action) => {
            state.loading = false;
            state.error = 'Xeta bas verdin, zehemt olmasa yeniden ceht edin'
        })
    }
})

export default categoriesReducer.reducer