import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { $isRefreshed } from '../../inprogress.state';

export const useRefresh = () => {
  const [refreshing, setRefreshing] = useRecoilState($isRefreshed);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return {
    onRefresh,
    refreshing,
  };
};
