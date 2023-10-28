import { RefObject, memo } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import { IArtPiecesType } from '../inprogress.type';
import Animated, { FadeIn } from 'react-native-reanimated';

type IHorizontalScrollPiecesComponentProps = {
  piecesArray: IArtPiecesType;
  scrollViewRef: RefObject<ScrollView>;
};

const SCREEN_WIDTH = Dimensions.get('window').width;

export const HorizontalScrollPiecesComponent = memo<IHorizontalScrollPiecesComponentProps>(
  ({ piecesArray = [], scrollViewRef }) => {
    return (
      <ScrollView ref={scrollViewRef} horizontal showsHorizontalScrollIndicator={false}>
        {piecesArray.map((e, i) => {
          return (
            <View key={i} style={styles.box}>
              <Text style={styles.auctionIdText}>{`작품ID (${e.auctionId})`}</Text>
              <Animated.Text entering={FadeIn.duration(300)} style={styles.viewCountText}>
                {e.viewCount ?? 'n/a'}
              </Animated.Text>
            </View>
          );
        })}
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  container: {},
  box: {
    borderWidth: 1,
    aspectRatio: 1,
    width: SCREEN_WIDTH / 4,
    marginHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  auctionIdText: { fontFamily: 'Pretendard-Bold' },
  viewCountText: { fontSize: 20, fontFamily: 'Pretendard-Light' },
});
