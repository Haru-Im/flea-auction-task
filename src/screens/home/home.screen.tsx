import { memo } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IMainTabParamsList } from '../main';
import { PreparingScreenComponent } from '../../shared';

export type IHomeScreenParamList = {};

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

export const HomeScreen = memo<IHomeScreenProps>(() => {
  return <PreparingScreenComponent />;
});
