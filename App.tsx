import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './src/screens';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
