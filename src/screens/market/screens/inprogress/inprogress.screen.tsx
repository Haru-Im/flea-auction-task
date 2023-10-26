import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IMarketTabParamList } from '../../market.tab';
import { RouteProp } from '@react-navigation/native';

export type IInprogressScreenNavigationProp = NativeStackNavigationProp<
  IMarketTabParamList,
  'InprogressScreen',
  undefined
>;
export type IInprogressScreenRouteProp = RouteProp<IMarketTabParamList, 'InprogressScreen'>;

type IInprogressScreenProps = {
  navigation: IInprogressScreenNavigationProp;
  route: IInprogressScreenRouteProp;
};

export const InprogressScreen = memo<IInprogressScreenProps>(({}) => {
  return (
    <View style={styles.container}>
      <Text>inprogress</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
});
