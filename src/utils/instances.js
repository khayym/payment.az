import axios from "axios";
import { BASE_URL, TOKEN_REFRESH } from '@env';
import { getRefreshTokenMMKV, getUserAccessTokenMMKV, refreshTokenMMKV, updateUserDataMMKV } from "./mmvk";
import { store } from '../store/redux';
import { setUserData } from "../reducers/userReducer";

export const tokenRefreshInstance = async () => {
    const token = await getRefreshTokenMMKV()
    try {
        const res = await axios.post(TOKEN_REFRESH, { refresh: token })
        await refreshTokenMMKV(res.data);
        return res.data.access;
    } catch {
        const access = await getUserAccessTokenMMKV()
        return access
    }
}


export const getUserInstance = async () => {
    const token = await tokenRefreshInstance()
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 5000,
        headers: { 'Authorization': 'Bearer ' + token }
    });

    try {
        const res = await instance.get('update-user/')
        const data = await updateUserDataMMKV(res.data);
        store.dispatch(setUserData(data));
        return store.getState().user.userData;
    } catch (e) {
        return store.getState().user.userData;
    }
}
