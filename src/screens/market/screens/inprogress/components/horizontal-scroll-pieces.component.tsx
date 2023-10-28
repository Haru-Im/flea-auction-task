import React, { RefObject, memo } from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import { IArtPiecesType } from '../inprogress.type';
import Animated from 'react-native-reanimated';
import { ProfileSvgComponent, scaleSize } from '../../../../../shared';

type IHorizontalScrollPiecesComponentProps = {
  piecesArray: IArtPiecesType;
  scrollViewRef: RefObject<ScrollView>;
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const HorizontalScrollPiecesComponent = memo<IHorizontalScrollPiecesComponentProps>(
  ({ piecesArray = [], scrollViewRef }) => {
    return (
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {piecesArray.map((e, i) => {
          return (
            <View key={i} style={styles.box}>
              <View style={styles.itemBox}>
                <Text style={styles.auctionIdText}>{`작품ID (${e.auctionId})`}</Text>
                <Animated.Text style={styles.viewCountText}>{e.viewCount ?? 'n/a'}</Animated.Text>
              </View>
              <View style={styles.descriptionBox}>
                <View style={styles.profileWrapper}>
                  <ProfileSvgComponent />
                  <Text style={styles.authorText}>{e.author}</Text>
                </View>
                <Text numberOfLines={1} style={styles.titleText}>
                  {e.title}
                </Text>
                <Text style={styles.priceText}>{e.price}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    paddingTop: scaleSize(48),
    paddingBottom: scaleSize(24),
    paddingHorizontal: scaleSize(8),
  },
  box: {
    padding: scaleSize(18),
    width: SCREEN_WIDTH / 2,
    marginHorizontal: scaleSize(10),
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    backgroundColor: 'white',
  },
  itemBox: {
    flex: 1,
    backgroundColor: '#24d6c4',
    width: '100%',
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    gap: scaleSize(8),
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaleSize(8),
    paddingTop: scaleSize(16),
    paddingBottom: scaleSize(8),
  },
  auctionIdText: { fontFamily: 'Pretendard-Medium', fontSize: scaleSize(16) },
  viewCountText: { fontSize: scaleSize(20), fontFamily: 'Pretendard-Bold' },
  descriptionBox: { flex: 1, gap: scaleSize(8) },
  authorText: { fontFamily: 'Pretendard-SemiBold', color: '#727272', fontSize: scaleSize(14) },
  titleText: { fontFamily: 'Pretendard-Regular', fontSize: scaleSize(16.5) },
  priceText: { fontFamily: 'Pretendard-Bold', color: '#161616', fontSize: scaleSize(20) },
});
