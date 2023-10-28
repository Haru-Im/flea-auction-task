import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';

import { RouteProp } from '@react-navigation/native';
import { IMainTabParamsList } from '../main';
import { PreparingScreenComponent } from '../../shared';

export type IArticleScreenParamList = {};

export type IArticleScreenNavigationProp = NativeStackNavigationProp<
  IMainTabParamsList,
  'ArticleScreen',
  undefined
>;
export type IArticleScreenRouteProp = RouteProp<IMainTabParamsList, 'ArticleScreen'>;

type IArticleScreenProps = {
  navigation: IArticleScreenNavigationProp;
  route: IArticleScreenRouteProp;
};

export const ArticleScreen = memo<IArticleScreenProps>(({}) => {
  return <PreparingScreenComponent />;
});
