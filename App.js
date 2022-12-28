import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import Router from './src/navigation/router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/constants/IMLocalize';
import { ContextApiProvider } from './src/store/context/ContextApi';
import { Provider } from 'react-redux';
import { store } from './src/store/redux'
import { getFcmTokenMMKV, getUserDataMMKV, getUserPaymentHistoryMMKV } from './src/utils/mmkv';
import { registerFcmTokenInstance } from './src/utils/instances';
SplashScreen.preventAutoHideAsync();


export default function App() {
  const [fontsLoaded] = useFonts({
    'Euclid-light': require('./assets/font/Euclid-Circular-A-Light.ttf'),
    'Euclid-medium': require('./assets/font/Euclid-Circular-A-Medium.ttf'),
    'Euclid-regular': require('./assets/font/Euclid-Circular-A-Regular.ttf'),
    // 'Euclid-semiBold': require('./assets/font/Euclid-Circular-A-SemiBold.ttf'),
    // 'Euclid-bold': require('./assets/font/Euclid-Circular-A-Bold.ttf'),
  });
  const [userData, setUserData] = useState(null);
  const [paymentsHistory, setPaymentsHistory] = useState([]);

  const onLayoutRootView = useCallback(async () => {
    const data = await getUserDataMMKV()
    const payments = await getUserPaymentHistoryMMKV() ?? [];
    const fcm = await getFcmTokenMMKV();
    setUserData(data);
    setPaymentsHistory(payments);

    if (fcm === null || fcm === undefined) {
      registerFcmTokenInstance();
    }

    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <Provider store={store}>
        <ContextApiProvider>
          <StatusBar style="auto" />
          <Router userData={userData} paymentsHistory={paymentsHistory} />
        </ContextApiProvider>
      </Provider>
    </SafeAreaProvider>
  );
}