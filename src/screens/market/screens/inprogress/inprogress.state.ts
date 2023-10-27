import { atom, selector } from 'recoil';
import { IArtPiecesType } from './inprogress.type';
import shuffle from 'lodash/shuffle';

const initialArtPieces = Array.from({ length: 43 }, (_, i) => {
  return {
    auctionId: i + 3965,
    viewCount: null,
  };
});

export const $artPieces = atom<IArtPiecesType>({
  key: 'artPieces',
  default: initialArtPieces,
});

export const $isRefreshed = atom<boolean>({
  key: 'isRefreshed',
  default: false,
});

export const $shuffledArr = selector({
  key: 'shuffledArr',
  get: ({ get }) => {
    get($shuffleCount);
    const arr = Array.from({ length: initialArtPieces.length }, (_, i) => i);

    return [shuffle(arr), shuffle(arr)];
  },
});

export const $shuffleCount = atom<number>({
  key: 'shuffleCount',
  default: 0,
});
