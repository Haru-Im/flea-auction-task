import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { memo } from 'react';
import { IMarketTabParamList } from '../../market.tab';
import { RouteProp } from '@react-navigation/native';
import { InprogressContainer } from './container';
import { RecoilProvider } from '../../../../provider';

export type IInprogressParamsList = {
  auctionId: number;
};

export type IInprogressScreenNavigationProp = NativeStackNavigationProp<
  IMarketTabParamList,
  'InprogressScreen',
  undefined
>;
export type IInprogressScreenRouteProp = RouteProp<IMarketTabParamList, 'InprogressScreen'>;

type IInprogressScreenProps = {
  navigation: IInprogressScreenNavigationProp;
  route: IInprogressScreenRouteProp;
};

export const InprogressScreen = memo<IInprogressScreenProps>(({ navigation }) => {
  return (
    <RecoilProvider>
      <InprogressContainer />
    </RecoilProvider>
  );
});
