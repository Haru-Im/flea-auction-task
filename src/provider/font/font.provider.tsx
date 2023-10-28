import { createContext, FC, ReactNode } from 'react';

import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export interface IFontContext {}

export const FontContext = createContext<IFontContext | null>(null);

type FontProviderProps = {
  children: ReactNode;
};

export const FontProvider: FC<FontProviderProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    'Pretendard-Bold': require('../../../assets/fonts/Pretendard-Bold.ttf'),
    'Pretendard-Light': require('../../../assets/fonts/Pretendard-Light.ttf'),
    'Pretendard-Medium': require('../../../assets/fonts/Pretendard-Medium.ttf'),
    'Pretendard-SemiBold': require('../../../assets/fonts/Pretendard-SemiBold.ttf'),
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
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
