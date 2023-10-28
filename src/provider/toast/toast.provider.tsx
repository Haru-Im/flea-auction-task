import { FC, ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
import { BellSvgComponent, scaleSize } from '../../shared';

type ToastProviderProps = {
  children: ReactNode;
};

export const CustomToastProvider: FC<ToastProviderProps> = ({ children }) => {
  return (
    <ToastProvider
      placement="top"
      duration={2000}
      animationType="zoom-in"
      animationDuration={250}
      renderType={{
        viewed_toast: (toast) => (
          <View style={styles.toastContainer}>
            <BellSvgComponent />
            <Text style={styles.toastText}>{toast.message}</Text>
          </View>
        ),
      }}
    >
      {children}
    </ToastProvider>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scaleSize(8),
    padding: scaleSize(14),
    marginTop: scaleSize(16),
    borderRadius: 999,
    shadowColor: '#000000',
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    backgroundColor: 'white',
  },
  toastText: { fontFamily: 'Pretendard-Bold', fontSize: scaleSize(18) },
});
