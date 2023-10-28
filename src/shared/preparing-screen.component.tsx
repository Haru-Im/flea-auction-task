import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { drawingLottie } from '../../assets/lotties';
import LottieView from 'lottie-react-native';

type IPreparingScreenComponentProps = {};

export const PreparingScreenComponent = memo<IPreparingScreenComponentProps>(({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.lottieWrapper}>
        <LottieView source={drawingLottie} autoPlay loop style={styles.lottie} />
        <Text style={styles.preparingText}>preparing...</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' },
  lottieWrapper: {
    flex: 1,
    width: 200,
    aspectRatio: 1,
    position: 'absolute',
  },
  lottie: {
    width: '100%',
    aspectRatio: 1,
  },
  preparingText: { fontFamily: 'Pretendard-Bold', fontSize: 24, textAlign: 'center' },
});
