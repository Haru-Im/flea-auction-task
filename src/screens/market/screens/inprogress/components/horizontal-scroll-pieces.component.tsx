import { RefObject, memo } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { IArtPiecesType } from '../inprogress.type';

type IHorizontalScrollPiecesComponentProps = {
  piecesArray: IArtPiecesType;
  scrollViewRef: RefObject<ScrollView>;
};

export const HorizontalScrollPiecesComponent = memo<IHorizontalScrollPiecesComponentProps>(
  ({ piecesArray = [], scrollViewRef }) => {
    return (
      <ScrollView ref={scrollViewRef} horizontal showsHorizontalScrollIndicator={false}>
        {piecesArray.map((e, i) => {
          return (
            <View key={i} style={{ padding: 10, borderWidth: 1, aspectRatio: 1, width: 80 }}>
              <Text>{e.auctionId}</Text>
              <Text>{e.viewCount ?? 'n/a'}</Text>
            </View>
          );
        })}
      </ScrollView>
    );
  },
);
