import { MMKVLoader } from "react-native-mmkv-storage";
import { isEmptyObject } from "./helper-functions";
const MMKV = new MMKVLoader().initialize(); // Returns an MMKV Instance 

let fcm_token = null;
let user_data = {};


export const registerUserDataMMKV = async (data) => {
    console.log('register data mmkv: ');
    await MMKV.setMapAsync("userData", data);
}

export const getUserDataMMKV = async () => {
    if (isEmptyObject(user_data) === false) {
        return user_data;
    }
    const data = await MMKV.getMapAsync('userData');
    user_data = data;
    return data;
}

export const getRefreshTokenMMKV = async () => {
    if (isEmptyObject(user_data) === false) {
        return user_data.refresh;
    }
    const data = await MMKV.getMapAsync('userData');
    user_data = data;
    return data.refresh;
}

export const getUserAccessTokenMMKV = async () => {
    if (isEmptyObject(user_data) === false) {
        return user_data.access;
    }
    const data = await MMKV.getMapAsync('userData');
    user_data = data;
    return data.access;
}

export const guideRegisterMMKV = async () => {
    await MMKV.setBoolAsync('guide', true);
}

export const getGuideMMKV = async () => await MMKV.getBoolAsync('guide');

export const cleanMMKV = async () => {
    await MMKV.setMapAsync("userData", null);
    await MMKV.setArrayAsync('payments', []);;
    MMKV.removeItem('passcode')
}

export const refreshTokenMMKV = async (access) => {
    const data = await MMKV.getMapAsync('userData');
    let new_data = { ...data, ...access };
    user_data = new_data
    await MMKV.setMapAsync('userData', new_data);
}

export const updateUserDataMMKV = async (obj) => {
    const data = await MMKV.getMapAsync('userData');
    let new_data = { ...data, ...obj };
    user_data = new_data;
    await MMKV.setMapAsync('userData', new_data);
    return user_data;
}

export const registerPaymentsLogsMMKV = async (obj) => {
    const data = await MMKV.getArrayAsync('payments');
    const iterable = data ?? [];
    await MMKV.setArrayAsync('payments', [obj, ...iterable]);
}

export const getUserPaymentHistoryMMKV = async () => await MMKV.getArrayAsync('payments');

export const setUserLangMMKV = async (lang) => await MMKV.setStringAsync('user-language', lang);

export const getUserLangMMKV = async () => await MMKV.getStringAsync('user-language');


export const fcmTokenRegisterMMKV = async (token) => {
    return await MMKV.setStringAsync('fcm_token', token);
}

export const getFcmTokenMMKV = async () => {
    if (fcm_token) {
        return fcm_token;
    }
    let token = await MMKV.getStringAsync('fcm_token');
    fcm_token = token;
    return token
}


export const registerPasscodeMMKV = async (number) => {
    return await MMKV.setStringAsync('passcode', number)
}



export const verifyPasscode = async (number) => {
    const value = await MMKV.getStringAsync('passcode');
    console.log('correct pin: ', value);
    return value == number;
} 