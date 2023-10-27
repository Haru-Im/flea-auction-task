import { memo, useCallback, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, RefreshControl } from 'react-native';

type IInprogressViewProps = {};

const piecesArray = Array.from({ length: 43 }, (_, i) => {
  return {
    auctionId: i + 3965,
    viewCount: null,
  };
});

export const InprogressView = memo<IInprogressViewProps>(({}) => {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

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
        {piecesArray.map((e, i) => {
          return (
            <View key={i} style={{ padding: 10, borderWidth: 1, aspectRatio: 1, width: 80 }}>
              <Text>{e.auctionId}</Text>
              <Text>{e.viewCount ?? 'n/a'}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={{ flex: 1, backgroundColor: 'pink' }}></View>
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  contentContainer: { flex: 1, paddingTop: 24, paddingHorizontal: 16 },
});
