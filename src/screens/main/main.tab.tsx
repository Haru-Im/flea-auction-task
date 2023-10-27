import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { Text } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { IArticleScreenParamList, ArticleScreen } from '../article';
import { IHomeScreenParamList, HomeScreen } from '../home';
import { IMarketTabParamList, MarketTab } from '../market';
import { IMyPageScreenParamList, MyPageScreen } from '../mypage';
import { IRootStackParamList } from '../root.stack';

export type IMainTabNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'MainTab',
  undefined
>;
export type IMainTabRouteProp = RouteProp<IRootStackParamList, 'MainTab'>;

export type IMainTabProps = {
  navigation: IMainTabNavigationProp;
  route: IMainTabRouteProp;
};

export type IMainTabParamsList = {
  HomeScreen: NavigatorScreenParams<IHomeScreenParamList>;
  MarketTab: NavigatorScreenParams<IMarketTabParamList>;
  ArticleScreen: NavigatorScreenParams<IArticleScreenParamList>;
  MyPageScreen: NavigatorScreenParams<IMyPageScreenParamList>;
};

const Tab = createBottomTabNavigator<IMainTabParamsList>();

const HEADER_NAME = {
  HomeScreen: '홈',
  MarketTab: '마켓',
  ArticleScreen: '아티클',
  MyPageScreen: '내 정보',
};

export const MainTab = memo<IMainTabProps>(({ navigation, route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        header: (props) => {
          return <Text>{HEADER_NAME[props.route.name as keyof IMainTabParamsList]}</Text>;
        },
      }}
    >
      <Tab.Screen options={{ title: 'HOME' }} name="HomeScreen" component={HomeScreen} />
      <Tab.Screen options={{ title: 'MARKET' }} name="MarketTab" component={MarketTab} />
      <Tab.Screen options={{ title: 'ARTICLE' }} name="ArticleScreen" component={ArticleScreen} />
      <Tab.Screen options={{ title: 'MYPAGE' }} name="MyPageScreen" component={MyPageScreen} />
    </Tab.Navigator>
  );
});
