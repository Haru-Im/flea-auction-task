import { memo } from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
import { IArtPiecesType } from '../inprogress.type';
import { HorizontalScrollPiecesComponent } from '../components';

type IInprogressViewProps = {
  onRefresh: () => void;
  refreshing: boolean;
  firstShuffledArtPieces: IArtPiecesType;
  secondShuffledArtPieces: IArtPiecesType;
};

export const InprogressView = memo<IInprogressViewProps>(
  ({ onRefresh, refreshing, firstShuffledArtPieces, secondShuffledArtPieces }) => {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <HorizontalScrollPiecesComponent piecesArray={firstShuffledArtPieces} />
        <HorizontalScrollPiecesComponent piecesArray={secondShuffledArtPieces} />
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  contentContainer: { flex: 1, paddingTop: 24, paddingHorizontal: 16 },
});
