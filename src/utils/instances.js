import axios from "axios";
import { BASE_URL, TOKEN_REFRESH, GET_USER_HOME_DATA, FORGET_PASSWORD, REGISTER_DEVICE_TOKEN, VERIFY_OTP, REGISTER_API, CREATE_USER, LOGIN } from '../utils/api';
import { getRefreshTokenMMKV, getUserAccessTokenMMKV, refreshTokenMMKV, updateUserDataMMKV, fcmTokenRegisterMMKV, getFcmTokenMMKV } from "./mmkv";
import { store } from '../store/redux';
import { setUserData } from "../reducers/userReducer";
import { Platform } from "react-native";


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

const axiosConfigFactory = async (method, url, data) => {
    const deviceToken = await getFcmTokenMMKV();

    let headers = {
        'Content-Type': 'application/json',
        'device-token': deviceToken
    }

    if (method === 'get') {
        const token = await tokenRefreshInstance();
        headers = { ...headers, 'Authorization': 'Bearer ' + token }
    }

    let configs = {
        method: method,
        url: url,
        headers
    }

    if (method === 'post') {
        configs = { ...configs, data }
    }

    return configs
}


const responseFactory = async (config) => {
    try {
        const res = await axios(config);
        return {
            data: res.data,
            status: res.status,
        };
    }
    catch (err) {
        console.log(err.response.data);
        return {
            data: err.response.data.message,
            status: err.response.data.status
        };
    }
}


export const registerFcmTokenInstance = async () => {
    let random = Math.random();
    let date = Date.now();
    let token = Math.ceil(random + date);

    let requested_device_type = Platform.select({
        ios: "3",
        android: "2",
    });

    let config = await axiosConfigFactory('post', REGISTER_DEVICE_TOKEN, { token, requested_device_type })

    try {
        const res = await axios(config);
        if (res.data.message === 'Success') {
            fcmTokenRegisterMMKV(token.toString());
        }
    }

    catch (err) {
        console.log('error', err);
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
        data,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },

    }


    return axios(config)
        .then(res => res.data)
        .catch(err => console.log('--EEE>> ', err));
}

export const VERIFY_OTP_INSTANCE = async (value, blocker) => {
    blocker(true);
    let data = { 'otp': value }
    let config = await axiosConfigFactory('post', VERIFY_OTP, data);
    let response = await responseFactory(config);
    blocker(false);
    return response;

}

export const FORGET_PASSWORD_INSTANCE = async (phone, blocker) => {
    blocker(true)
    let data = { 'phone': phone }
    let config = await axiosConfigFactory('post', FORGET_PASSWORD, data);
    let response = await responseFactory(config);
    blocker(false);
    return response;
}


export const REGISTER_USER_INSTANCE = async (value, blocker) => {
    blocker(true);
    const data = { phone: "994" + value };
    let config = await axiosConfigFactory('post', REGISTER_API, data);
    let response = await responseFactory(config);
    blocker(false);
    return response;
}

export const SEND_OTP_AGAIN_INSTANCE = async (blocker) => {
    blocker(true);
    let config = await axiosConfigFactory('get', VERIFY_OTP);
    let response = await responseFactory(config);
    blocker(false);
    return response;
}

export const CREATE_USER_INSTANCE = async (value, blocker) => {
    blocker(true);
    let data = { password: value, password_confirm: value };
    let config = await axiosConfigFactory('post', CREATE_USER, data);
    let response = await responseFactory(config);
    blocker(false);
    return response;
}

export const LOGIN_INSTANCE = async (value, blocker) => {
    blocker(true);
    let config = await axiosConfigFactory('post', LOGIN, { ...value });
    let response = await responseFactory(config);
    blocker(false);
    return response;
}