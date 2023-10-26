import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTab } from '../tabs';

const Stack = createNativeStackNavigator();

export const RootStack = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};
