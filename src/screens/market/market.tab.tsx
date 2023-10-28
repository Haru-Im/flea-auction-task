import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { memo } from 'react';
import { FinishedScreen, InprogressScreen, ScheduledScreen } from './screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { IMainTabNavigationProp, IMainTabParamsList } from '../main';
import { scaleSize } from '../../shared';

export type IMarketTabNavigationProp = CompositeNavigationProp<
  IMainTabNavigationProp,
  NativeStackNavigationProp<IMainTabParamsList, 'MarketTab', undefined>
>;

export type IMarketTabRouteProp = RouteProp<IMainTabParamsList, 'MarketTab'>;

type IMarketTabProps = {
  navigation: IMarketTabNavigationProp;
  route: IMarketTabRouteProp;
};

export type IMarketTabParamList = {
  InprogressScreen: undefined;
  ScheduledScreen: undefined;
  FinishedScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<IMarketTabParamList>();

export const MarketTab = memo<IMarketTabProps>(({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarItemStyle: {
          width: 'auto',
          paddingHorizontal: 0,
        },
        ...tabBarLabelStyle,
      }}
    >
      <Tab.Screen
        options={{
          title: '진행중',
          swipeEnabled: false,
        }}
        name="InprogressScreen"
        component={InprogressScreen}
      />
      <Tab.Screen
        options={{ title: '오픈예정' }}
        name="ScheduledScreen"
        component={ScheduledScreen}
      />
      <Tab.Screen
        options={{ title: '옥션종료' }}
        name="FinishedScreen"
        component={FinishedScreen}
      />
    </Tab.Navigator>
  );
});

const tabBarLabelStyle = {
  tabBarLabelStyle: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: scaleSize(22),
    marginHorizontal: 0,
  },
  tabBarGap: 16,
  tabBarStyle: {
    paddingLeft: 16,
  },
  tabBarIndicatorContainerStyle: {
    marginLeft: 16,
  },
  tabBarIndicatorStyle: { backgroundColor: 'black', height: 3 },
  tabBarInactiveTintColor: '#b4b4b4',
  tabBarActiveTintColor: 'black',
};
