import EventSource from 'react-native-sse';
import { useSetRecoilState } from 'recoil';
import { $artPieces } from '../../inprogress.state';
import { useDidUpdate } from 'rooks';
import { useCallback, useState } from 'react';
import { useToast } from 'react-native-toast-notifications';
import * as Haptics from 'expo-haptics';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

type MyCustomEvents = 'sse.auction_viewed';

export const useFetchSSE = () => {
  const setArtPieces = useSetRecoilState($artPieces);
  const toast = useToast();
  const [currentData, setCurrentData] = useState({
    auctionId: '',
    viewCount: 0,
  });

  const SSE_URL = process.env.EXPO_PUBLIC_SSE_AUCTION_VIEWED_URL;
  const eventSource = new EventSource<MyCustomEvents>(SSE_URL as string);

  const isFocused = useIsFocused();

  const handleSSEConnection = useCallback(() => {
    if (!SSE_URL) {
      throw new Error('SSE_URL is undefined.');
    }

    eventSource.addEventListener('open', () => {
      console.log('Open SSE connection.');
    });

    eventSource.addEventListener('sse.auction_viewed', (event) => {
      const { auctionId, viewCount } = JSON.parse(event.data as string);
      console.log(auctionId, viewCount);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

      setCurrentData({
        auctionId,
        viewCount,
      });

      setArtPieces((prev) => {
        return prev.map((e) => {
          if (e.auctionId === auctionId) {
            return {
              ...e,
              viewCount,
            };
          }
          return e;
        });
      });
    });

    eventSource.addEventListener('error', (event) => {
      if (event.type === 'error') {
        console.error('Connection error:', event.message);
      } else if (event.type === 'exception') {
        console.error('Error:', event.message, event.error);
      }
    });

    eventSource.addEventListener('close', () => {
      console.log('Close SSE connection.');
    });

    return () => {
      eventSource.close();
      eventSource.removeAllEventListeners();
    };
  }, [isFocused]);

  useFocusEffect(handleSSEConnection);

  useDidUpdate(() => {
    toast.show(`ID ${currentData.auctionId} is clicked!`, {
      type: 'viewed_toast',
    });
  }, [currentData.viewCount]);
};
