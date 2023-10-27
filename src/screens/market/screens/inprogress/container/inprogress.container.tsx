import { memo } from 'react';
import { InprogressView } from '../views';
import { useFetchSSE, useRefresh } from './hooks';

type IInprogressContainerProps = {};

export const InprogressContainer = memo<IInprogressContainerProps>(({}) => {
  const { onRefresh, refreshing, firstShuffledArtPieces, secondShuffledArtPieces } = useRefresh();
  useFetchSSE();

  return (
    <InprogressView
      onRefresh={onRefresh}
      refreshing={refreshing}
      firstShuffledArtPieces={firstShuffledArtPieces}
      secondShuffledArtPieces={secondShuffledArtPieces}
    />
  );
});
