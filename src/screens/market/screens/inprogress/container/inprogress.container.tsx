import { memo } from 'react';
import { InprogressView } from '../views';
import { useFetchSSE, useRefresh } from './hooks';
import { useRecoilValue } from 'recoil';
import { $artPieces } from '../inprogress.state';

type IInprogressContainerProps = {};

export const InprogressContainer = memo<IInprogressContainerProps>(({}) => {
  const { onRefresh, refreshing } = useRefresh();
  const artPieces = useRecoilValue($artPieces);
  useFetchSSE();

  return <InprogressView onRefresh={onRefresh} refreshing={refreshing} artPieces={artPieces} />;
});
