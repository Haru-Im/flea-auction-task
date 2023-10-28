import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { Text, View } from 'react-native';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { IArticleScreenParamList, ArticleScreen } from '../article';
import { IHomeScreenParamList, HomeScreen } from '../home';
import { IMarketTabParamList, MarketTab } from '../market';
import { IMyPageScreenParamList, MyPageScreen } from '../mypage';
import { IRootStackParamList } from '../root.stack';

import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scaleSize } from '../../shared';

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
          return (
            <View style={{ backgroundColor: 'white', padding: scaleSize(16) }}>
              <Text style={{ fontSize: scaleSize(28), fontFamily: 'Pretendard-Bold' }}>
                {HEADER_NAME[props.route.name as keyof IMainTabParamsList]}
              </Text>
            </View>
          );
        },
        ...tabBarTheme,
      }}
      initialRouteName="MarketTab"
    >
      <Tab.Screen
        options={{
          title: 'HOME',
          tabBarIcon: ({ focused }) => (
            <Octicons name="home" size={scaleSize(24)} color={focused ? 'black' : '#b4b4b4'} />
          ),
          ...tabBarStyles,
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: 'MARKET',
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="shoppingcart"
              size={scaleSize(26)}
              color={focused ? 'black' : '#b4b4b4'}
            />
          ),
          ...tabBarStyles,
        }}
        name="MarketTab"
        component={MarketTab}
      />
      <Tab.Screen
        options={{
          title: 'ARTICLE',
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="newspaper"
              size={scaleSize(24)}
              color={focused ? 'black' : '#b4b4b4'}
            />
          ),
          ...tabBarStyles,
        }}
        name="ArticleScreen"
        component={ArticleScreen}
      />
      <Tab.Screen
        options={{
          title: 'MYPAGE',
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="face-man-outline"
              size={scaleSize(24)}
              color={focused ? 'black' : '#b4b4b4'}
            />
          ),
          ...tabBarStyles,
        }}
        name="MyPageScreen"
        component={MyPageScreen}
      />
    </Tab.Navigator>
  );
});

const tabBarStyles = {
  tabBarInactiveTintColor: '#b4b4b4',
  tabBarActiveTintColor: 'black',
  tabBarLabelStyle: { fontFamily: 'Pretendard-Bold', fontSize: 12 },
};

const tabBarTheme = {
  tabBarStyle: {
    height: scaleSize(85),
    paddingTop: scaleSize(10),
    borderTopStartRadius: scaleSize(24),
    borderTopEndRadius: scaleSize(24),
  },
};
