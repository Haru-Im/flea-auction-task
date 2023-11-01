import { ReactElement, memo, useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IMainTabParamsList } from '../main';
import { StyleSheet, View } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import { catData } from './home.const';
import { IItem, ImageCardComponent, ImageSkeletonComponent } from './components';
import shuffle from 'lodash/shuffle';

export type IHomeScreenParamList = {
  auctionId: number;
};

export type IHomeScreenNavigationProp = NativeStackNavigationProp<
  IMainTabParamsList,
  'HomeScreen',
  undefined
>;
export type IHomeScreenRouteProp = RouteProp<IMainTabParamsList, 'HomeScreen'>;

type IHomeScreenProps = {
  navigation: IHomeScreenNavigationProp;
  route: IHomeScreenRouteProp;
};

export const HomeScreen = memo<IHomeScreenProps>(({ route }) => {
  const [shuffledCatData, setShuffledCatData] = useState(catData);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //@ts-ignore
  const renderItem = ({ item }): ReactElement => {
    return <ImageCardComponent item={item} />;
  };
  //@ts-ignore
  const renderSkeleton = ({}): ReactElement => {
    return <ImageSkeletonComponent />;
  };
  useEffect(() => {
    if (!isRefreshing) setShuffledCatData(shuffle(catData));
  }, [isRefreshing]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading || isRefreshing) {
    return (
      <View style={styles.container}>
        <MasonryList
          data={shuffledCatData}
          keyExtractor={(item: IItem): string => item.id}
          renderItem={renderSkeleton}
          numColumns={2}
          contentContainerStyle={{
            paddingHorizontal: 24,
            alignSelf: 'stretch',
          }}
          onRefresh={() => {
            setIsRefreshing(true);
            setTimeout(() => {
              setIsRefreshing(false);
            }, 1000);
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MasonryList
        data={shuffledCatData}
        keyExtractor={(item: IItem): string => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignSelf: 'stretch',
        }}
        onRefresh={() => {
          setIsRefreshing(true);
          setTimeout(() => {
            setIsRefreshing(false);
          }, 1000);
        }}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
