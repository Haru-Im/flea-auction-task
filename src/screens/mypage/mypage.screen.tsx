import { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IMainTabNavigationProp, IMainTabParamsList } from '../../tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IMyPageScreenParamList = {};

export type IMyPageScreenNavigationProp = CompositeNavigationProp<
  IMainTabNavigationProp,
  NativeStackNavigationProp<IMainTabParamsList, 'MyPageScreen', undefined>
>;

export type IMyPageScreenRouteProp = RouteProp<IMainTabParamsList, 'MyPageScreen'>;

type IMyPageScreenProps = {
  navigation: IMyPageScreenNavigationProp;
  route: IMyPageScreenRouteProp;
};

export const MyPageScreen = memo<IMyPageScreenProps>(({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>MyPage</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
});
