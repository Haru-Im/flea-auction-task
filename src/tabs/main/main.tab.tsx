import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { memo } from 'react';
import { StyleSheet } from 'react-native';
import { ArticleScreen, HomeScreen, MarketScreen, MyPageScreen } from '../../screens';

type IMainTabProps = {};

const Tab = createBottomTabNavigator();

export const MainTab = memo<IMainTabProps>(({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MarketScreen" component={MarketScreen} />
      <Tab.Screen name="ArticleScreen" component={ArticleScreen} />
      <Tab.Screen name="MyPageScreen" component={MyPageScreen} />
    </Tab.Navigator>
  );
});

const styles = StyleSheet.create({
  container: {},
});
