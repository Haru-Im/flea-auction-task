import { View, Text } from 'react-native';
import { IMainTabParamsList } from '../../tabs';
import { memo } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IHomeScreenNavigationProp = NativeStackNavigationProp<
  IMainTabParamsList,
  'HomeScreen',
  undefined
>;
export type IHomeScreenRouteProp = RouteProp<IMainTabParamsList, 'HomeScreen'>;

type IHomeScreenProps = {
  navigation: IHomeScreenNavigationProp;
  route: IHomeScreenRouteProp;
};

export const HomeScreen = memo<IHomeScreenProps>(({ navigation, route }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
});
