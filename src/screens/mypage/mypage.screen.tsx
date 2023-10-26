import { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

type IMyPageScreenProps = {};

export const MyPageScreen = memo<IMyPageScreenProps>(({}) => {
  return (
    <View style={styles.container}>
      <Text>MyPage</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
});
