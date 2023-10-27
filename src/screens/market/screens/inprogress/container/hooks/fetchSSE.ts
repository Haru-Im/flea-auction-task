import EventSource from 'react-native-sse';

type MyCustomEvents = 'sse.auction_viewed';

export const useFetchSSE = () => {
  const SSE_URL = process.env.EXPO_PUBLIC_SSE_AUCTION_VIEWED_URL;
  if (!SSE_URL) {
    throw new Error('SSE_URL is undefined.');
  }

  const eventSource = new EventSource<MyCustomEvents>(SSE_URL);

  eventSource.addEventListener('open', (event) => {
    console.log('Open SSE connection.');
  });

  eventSource.addEventListener('sse.auction_viewed', (event) => {
    console.log('New message event:', event.data);
  });

  eventSource.addEventListener('error', (event) => {
    if (event.type === 'error') {
      console.error('Connection error:', event.message);
    } else if (event.type === 'exception') {
      console.error('Error:', event.message, event.error);
    }
  });

  eventSource.addEventListener('close', (event) => {
    console.log('Close SSE connection.');
  });
};
