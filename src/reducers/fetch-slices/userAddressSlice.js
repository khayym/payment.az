// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { tokenRefreshInstance } from "../../utils/instances";
// import { GET_USER_HOME_DATA } from '@env';

// const initialState = {
//   loading: false,
//   data: [],
//   error: ""
// }

// export const fetchUserAddress = createAsyncThunk('userAddress/fetch', async () => {
//   // const token = await tokenRefreshInstance()
//   // let config = {
//   //   method: 'get',
//   //   url: GET_USER_HOME_DATA,
//   //   headers: {
//   //     'Authorization': `Bearer ${token}`
//   //   }
//   // };
//   // return axios(config).then(res => res.data.results)
// })

// const userAddressReducer = createSlice({
//   name: 'userAddress',
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchUserAddress.pending, (state, action) => {
//       state.loading = true;
//       state.error = '';
//     })
//     builder.addCase(fetchUserAddress.fulfilled, (state, action) => {
//       state.data = action.payload;
//       state.loading = false;
//     })
//     builder.addCase(fetchUserAddress.rejected, (state, action) => {
//       state.loading = false;
//       state.error = 'Xeta bas verdin, zehemt olmasa yeniden ceht edin'
//     })
//   }
// })

// export default userAddressReducer.reducer