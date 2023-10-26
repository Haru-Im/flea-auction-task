import { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

type IMarketScreenProps = {};

export const MarketScreen = memo<IMarketScreenProps>(({}) => {
  return (
    <View style={styles.container}>
      <Text>Market</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
});
