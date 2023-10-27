import { memo } from 'react';
import { InprogressView } from '../views';
import { useFetchSSE } from './hooks';

type IInprogressContainerProps = {};

export const InprogressContainer = memo<IInprogressContainerProps>(({}) => {
  useFetchSSE();
  return <InprogressView />;
});
