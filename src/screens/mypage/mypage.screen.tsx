import { memo } from 'react';

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IMainTabNavigationProp, IMainTabParamsList } from '../main';
import { PreparingScreenComponent } from '../../shared';

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

export const MyPageScreen = memo<IMyPageScreenProps>(() => {
  return <PreparingScreenComponent />;
});
