import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaView } from 'react-native';
import { RootStack } from './src/screens/root.stack';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}
