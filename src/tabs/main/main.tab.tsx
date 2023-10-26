import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import {
  ArticleScreen,
  HomeScreen,
  IRootStackParamList,
  MarketTab,
  MyPageScreen,
} from '../../screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type IMainTabNavigationProp = NativeStackNavigationProp<
  IRootStackParamList,
  'MainTab',
  undefined
>;
export type IMainTabRouteProp = RouteProp<IRootStackParamList, 'MainTab'>;

type IMainTabProps = {
  navigation: IMainTabNavigationProp;
  route: IMainTabRouteProp;
};

export type IMainTabParamsList = {
  HomeScreen: { test: string };
  MarketTab: undefined;
  ArticleScreen: undefined;
  MyPageScreen: undefined;
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

const styles = StyleSheet.create({
  container: {},
});
