import { useCallback, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { $artPieces, $isRefreshed } from '../../inprogress.state';
import { useDidUpdate } from 'rooks';
import { IArtPiecesType } from '../../inprogress.type';
import shuffle from 'lodash/shuffle';

export const useRefresh = () => {
  const [refreshing, setRefreshing] = useRecoilState($isRefreshed);
  const artPieces = useRecoilValue($artPieces);

  const [firstShuffledArtPieces, setFirstShuffledArtPieces] = useState<IArtPiecesType>(
    shuffle(artPieces),
  );
  const [secondShuffledArtPieces, setSecondShuffledArtPieces] = useState<IArtPiecesType>(
    shuffle(artPieces),
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useDidUpdate(() => {
    if (!refreshing) {
      setFirstShuffledArtPieces(shuffle(artPieces));
      setSecondShuffledArtPieces(shuffle(artPieces));
    }
  }, [refreshing]);

  return {
    onRefresh,
    refreshing,
    firstShuffledArtPieces,
    secondShuffledArtPieces,
  };
};
