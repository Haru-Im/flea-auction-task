import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IMarketTabParamList } from '../../market.tab';
import { RouteProp } from '@react-navigation/native';

export type IScheduledScreenNavigationProp = NativeStackNavigationProp<
  IMarketTabParamList,
  'ScheduledScreen',
  undefined
>;
export type IScheduledScreenRouteProp = RouteProp<IMarketTabParamList, 'ScheduledScreen'>;

type IScheduledScreenProps = {
  navigation: IScheduledScreenNavigationProp;
  route: IScheduledScreenRouteProp;
};

export const ScheduledScreen = memo<IScheduledScreenProps>(({}) => {
  return (
    <View style={styles.container}>
      <Text>scheduled</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
});
