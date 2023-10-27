import { useCallback, useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { $artPieces, $isRefreshed, $shuffleCount, $shuffledArr } from '../../inprogress.state';
import { ScrollView } from 'react-native';

export const useRefresh = () => {
  const [refreshing, setRefreshing] = useRecoilState($isRefreshed);
  const setShuffleCount = useSetRecoilState($shuffleCount);
  const artPieces = useRecoilValue($artPieces);
  const [first, second] = useRecoilValue($shuffledArr);
  const firstScrollViewRef = useRef<ScrollView>(null);
  const secondScrollViewRef = useRef<ScrollView>(null);

  const firstShuffledArtPieces = first.map((e) => artPieces[e]);
  const secondShuffledArtPieces = second.map((e) => artPieces[e]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setShuffleCount((prev) => prev + 1);
      firstScrollViewRef.current && firstScrollViewRef.current.scrollTo({ x: 0, animated: false });
      secondScrollViewRef.current &&
        secondScrollViewRef.current.scrollTo({ x: 0, animated: false });
    }, 1000);
  }, []);

  return {
    onRefresh,
    refreshing,
    firstShuffledArtPieces,
    secondShuffledArtPieces,
    firstScrollViewRef,
    secondScrollViewRef,
  };
};
