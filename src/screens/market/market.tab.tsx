import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { FinishedScreen, InprogressScreen, ScheduledScreen } from './screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { IMainTabNavigationProp, IMainTabParamsList } from '../main';

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
    <Tab.Navigator>
      <Tab.Screen
        options={{ title: '진행중', swipeEnabled: false }}
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

const styles = StyleSheet.create({
  container: {},
});
