import { MMKVLoader } from "react-native-mmkv-storage";
const MMKV = new MMKVLoader().initialize(); // Returns an MMKV Instance 

export const registerUserDataMMKV = async (data) => {
    await MMKV.setMapAsync("userData", data);
}

export const getUserDataMMKV = async () => {
    const data = await MMKV.getMapAsync('userData');
    return data;
}

export const getRefreshTokenMMKV = async () => {
    const data = await MMKV.getMapAsync('userData');
    return data.refresh;
}

export const getUserAccessTokenMMKV = async () => {
    const data = await MMKV.getMapAsync('userData');
    return data.access;
}

export const guideRegisterMMKV = async () => {
    await MMKV.setBoolAsync('guide', true);
}

export const getGuideMMKV = async () => await MMKV.getBoolAsync('guide');

export const cleanMMKV = async () => {
    await MMKV.setMapAsync("userData", null);
    await MMKV.setArrayAsync('payments', []);;
}

export const refreshTokenMMKV = async (access) => {
    const data = await MMKV.getMapAsync('userData');
    await MMKV.setMapAsync('userData', { ...data, ...access });
}

export const updateUserDataMMKV = async (obj) => {
    const data = await MMKV.getMapAsync('userData');
    await MMKV.setMapAsync('userData', { ...data, ...obj });
    return await MMKV.getMapAsync('userData');
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
    console.log('--> fcm_token register', token);
    return await MMKV.setStringAsync('fcm_token', token);
}

let fcm_token = null;

export const getFcmTokenMMKV = async () => {
    if (fcm_token) {
        console.log('return from variables');
        return fcm_token;
    }
    console.log('return from mmkv');
    let token = await MMKV.getStringAsync('fcm_token');
    fcm_token = token;
    return token
}