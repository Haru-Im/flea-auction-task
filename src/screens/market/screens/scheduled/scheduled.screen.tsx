import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { IMarketTabParamList } from '../../market.tab';
import { RouteProp } from '@react-navigation/native';
import { PreparingScreenComponent } from '../../../../shared';

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
  return <PreparingScreenComponent />;
});
