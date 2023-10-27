import { memo } from 'react';
import { InprogressView } from '../views';
import { useFetchSSE, useRefresh } from './hooks';

type IInprogressContainerProps = {};

export const InprogressContainer = memo<IInprogressContainerProps>(({}) => {
  useFetchSSE();
  const {
    onRefresh,
    refreshing,
    firstShuffledArtPieces,
    secondShuffledArtPieces,
    firstScrollViewRef,
    secondScrollViewRef,
  } = useRefresh();

  return (
    <InprogressView
      onRefresh={onRefresh}
      refreshing={refreshing}
      firstShuffledArtPieces={firstShuffledArtPieces}
      secondShuffledArtPieces={secondShuffledArtPieces}
      firstScrollViewRef={firstScrollViewRef}
      secondScrollViewRef={secondScrollViewRef}
    />
  );
});
