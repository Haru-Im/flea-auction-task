import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { IMainTabParamsList } from '../../tabs';
import { RouteProp } from '@react-navigation/native';

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
  return (
    <View style={styles.container}>
      <Text>article</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
});
