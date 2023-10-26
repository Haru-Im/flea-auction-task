import { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IMainTabParamsList } from '../../tabs';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IMyPageScreenNavigationProp = NativeStackNavigationProp<
  IMainTabParamsList,
  'MyPageScreen',
  undefined
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
