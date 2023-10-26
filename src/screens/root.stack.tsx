import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainTab } from '../tabs';

export type IRootStackParamList = {
  MainTab: undefined;
};

const Stack = createNativeStackNavigator<IRootStackParamList>();

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
