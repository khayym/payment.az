import axios from "axios";
import { BASE_URL, TOKEN_REFRESH, GET_USER_HOME_DATA, FORGET_PASSWORD } from '@env';
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

export const updateUserInfoInstance = async (obj) => {
    const token = await tokenRefreshInstance()
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: 5000,
        headers: { 'Authorization': 'Bearer ' + token },
    });

    try {
        const res = await instance.put('update-user/', obj)
        const data = await updateUserDataMMKV(res.data);
        store.dispatch(setUserData(data));
        return store.getState().user.userData;
    } catch (e) {
        return store.getState().user.userData;
    }

}

export const getUserAddressInstance = async () => {
    const token = await tokenRefreshInstance()
    let config = {
        method: 'get',
        url: GET_USER_HOME_DATA,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    return axios(config).then(res => res.data.results)
}

export const setNewHomeInstance = async () => {
    const token = await tokenRefreshInstance();
    let { address_title, full_address, subscriber_code, category_id, child_category_id } = store.getState().tabControllerReducer.AddApartment.state;
    let data = JSON.stringify({
        address_title,
        full_address,
        subscriber_code,
        category_id,
        child_category_id
    });

    let config = {
        method: 'post',
        url: GET_USER_HOME_DATA,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data
    }


    return axios(config)
        .then(res => res.data)
        .catch(err => console.log('--EEE>> ', err));
}

export const forgetPasswordInstance = async (phone) => {
    // const res = await axios.post(FORGET_PASSWORD, { phone });
    // return res.data;
    let data = JSON.stringify({ phone });

    let config = {
        method: 'post',
        url: FORGET_PASSWORD,
        headers: { 'Content-Type': 'application/json' },
        data
    }

    try {
        const res = await axios(config);
        return {
            data: res.data,
            status: res.status
        };
    } catch (err) {
        return {
            data: err.response.data.message,
            status: err.response.data.status
        };
    }
}
