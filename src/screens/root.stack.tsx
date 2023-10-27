import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigatorScreenParams } from '@react-navigation/native';
import { IMainTabParamsList, MainTab } from '.';

export type IRootStackParamList = {
  MainTab: NavigatorScreenParams<IMainTabParamsList>;
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
