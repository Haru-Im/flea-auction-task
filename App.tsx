import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/screens/root.stack';
import { CustomToastProvider, FontProvider } from './src';

export default function App() {
  return (
    <FontProvider>
      <CustomToastProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </CustomToastProvider>
    </FontProvider>
  );
}
