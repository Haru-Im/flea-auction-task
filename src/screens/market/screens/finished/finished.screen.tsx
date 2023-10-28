import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { IMarketTabParamList } from '../../market.tab';
import { RouteProp } from '@react-navigation/native';
import { PreparingScreenComponent } from '../../../../shared';

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
  return <PreparingScreenComponent />;
});
