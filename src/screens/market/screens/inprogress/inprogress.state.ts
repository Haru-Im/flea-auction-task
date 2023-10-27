import { atom } from 'recoil';

const initialArtPieces = Array.from({ length: 43 }, (_, i) => {
  return {
    auctionId: i + 3965,
    viewCount: null,
  };
});

export type IArtPiecesType = {
  auctionId: number;
  viewCount: null | number;
}[];

export const $artPieces = atom<IArtPiecesType>({
  key: 'artPieces',
  default: initialArtPieces,
});

export const $isRefreshed = atom<boolean>({
  key: 'isRefreshed',
  default: false,
});
