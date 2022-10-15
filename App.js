import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import Router from './src/navigation/router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './src/constants/IMLocalize';
import { ContextApiProvider } from './src/store/context/ContextApi';
import { Provider } from 'react-redux';
import { store } from './src/store/redux'
SplashScreen.preventAutoHideAsync();

// const headerHeight = useHeaderHeight();
export default function App() {
  const [fontsLoaded] = useFonts({
    'Euclid-light': require('./assets/font/Euclid-Circular-A-Light.ttf'),
    'Euclid-medium': require('./assets/font/Euclid-Circular-A-Medium.ttf'),
    'Euclid-regular': require('./assets/font/Euclid-Circular-A-Regular.ttf'),
    'Euclid-semiBold': require('./assets/font/Euclid-Circular-A-SemiBold.ttf'),
    'Euclid-bold': require('./assets/font/Euclid-Circular-A-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {

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
          <Router />
        </ContextApiProvider>
      </Provider>
    </SafeAreaProvider>
  );
}