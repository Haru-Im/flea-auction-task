import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/screens/root.stack';
import { FontProvider } from './src';

export default function App() {
  return (
    <FontProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </FontProvider>
  );
}
