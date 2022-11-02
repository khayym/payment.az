import { MMKVLoader } from "react-native-mmkv-storage";
const MMKV = new MMKVLoader().initialize(); // Returns an MMKV Instance 

export const registerUserDataMMKV = async (data) => {
    await MMKV.setMapAsync("userData", data);
}

export const getUserDataMMKV = async () => {
    const data = await MMKV.getMapAsync('userData');
    return data;
}

export const guideRegisterMMKV = async () => {
    await MMKV.setBoolAsync('guide', true);
}

export const getGuideMMKV = async () => await MMKV.getBoolAsync('guide');

export const cleanMMKV = async () => {
    await MMKV.setMapAsync("userData", null);
}