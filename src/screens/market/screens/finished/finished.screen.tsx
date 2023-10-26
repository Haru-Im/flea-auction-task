import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IMarketTabParamList } from '../../market.tab';
import { RouteProp } from '@react-navigation/native';

export type IFinishedScreenNavigationProp = NativeStackNavigationProp<
  IMarketTabParamList,
  'FinishedScreen',
  undefined
>;
export type IFinishedScreenRouteProp = RouteProp<IMarketTabParamList, 'FinishedScreen'>;

type IFinishedScreenProps = {
  navigation: IFinishedScreenNavigationProp;
  route: IFinishedScreenRouteProp;
};

export const FinishedScreen = memo<IFinishedScreenProps>(({}) => {
  return (
    <View style={styles.container}>
      <Text>finished</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
});
