import { RefObject, memo } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { IArtPiecesType } from '../inprogress.type';
import { HorizontalScrollPiecesComponent } from '../components';

type IInprogressViewProps = {
  onRefresh: () => void;
  refreshing: boolean;
  firstShuffledArtPieces: IArtPiecesType;
  secondShuffledArtPieces: IArtPiecesType;
  firstScrollViewRef: RefObject<ScrollView>;
  secondScrollViewRef: RefObject<ScrollView>;
};

export const InprogressView = memo<IInprogressViewProps>(
  ({
    onRefresh,
    refreshing,
    firstShuffledArtPieces,
    secondShuffledArtPieces,
    firstScrollViewRef,
    secondScrollViewRef,
  }) => {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <HorizontalScrollPiecesComponent
          piecesArray={firstShuffledArtPieces}
          scrollViewRef={firstScrollViewRef}
        />
        <HorizontalScrollPiecesComponent
          piecesArray={secondShuffledArtPieces}
          scrollViewRef={secondScrollViewRef}
        />
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  contentContainer: { flex: 1, paddingTop: 24, paddingHorizontal: 16 },
});
