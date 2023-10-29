import { memo, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

type IImageSkeletonComponentProps = {};

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const ImageSkeletonComponent = memo<IImageSkeletonComponentProps>(({}) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View style={[{ height: randomBool ? 150 : 250, padding: 8 }, styles.box]}>
      <ShimmerPlaceholder
        visible={false}
        style={[{ height: randomBool ? 150 : 250 }, styles.box]}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: { padding: 8, width: '100%' },
  box: {
    flex: 1,
    width: '100%',
    borderRadius: 12,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
});
