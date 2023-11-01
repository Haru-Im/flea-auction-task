import { memo, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

export type IImageCardComponentProps = {
  item: IItem;
};

export type IItem = {
  id: string;
  imageUrl: string;
};

export const ImageCardComponent = memo<IImageCardComponentProps>(({ item }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View style={styles.container}>
      <View style={[{ height: randomBool ? 150 : 250 }, styles.box]}>
        <Image uri={item.imageUrl} style={styles.image} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: { padding: 8 },
  box: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});
