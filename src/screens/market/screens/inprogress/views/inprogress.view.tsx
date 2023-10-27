import { memo } from 'react';
import { View, StyleSheet, Text, ScrollView, RefreshControl } from 'react-native';
import { IArtPiecesType } from '../inprogress.state';

type IInprogressViewProps = {
  onRefresh: () => void;
  refreshing: boolean;
  artPieces: IArtPiecesType;
};

export const InprogressView = memo<IInprogressViewProps>(({ onRefresh, refreshing, artPieces }) => {
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: 'green' }}
      >
        {artPieces.map((e, i) => {
          return (
            <View key={i} style={{ padding: 10, borderWidth: 1, aspectRatio: 1, width: 80 }}>
              <Text>{e.auctionId}</Text>
              <Text>{e.viewCount ?? 'n/a'}</Text>
            </View>
          );
        })}
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1, backgroundColor: 'pink' }}
      >
        {artPieces.map((e, i) => {
          return (
            <View key={i} style={{ padding: 10, borderWidth: 1, aspectRatio: 1, width: 80 }}>
              <Text>{e.auctionId}</Text>
              <Text>{e.viewCount ?? 'n/a'}</Text>
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  contentContainer: { flex: 1, paddingTop: 24, paddingHorizontal: 16 },
});
