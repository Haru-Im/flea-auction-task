import { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

type IArticleScreenProps = {};

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
