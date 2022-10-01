import React, {useCallback, useEffect, useState} from 'react';
import * as S from './styles';
import 'react-native-reanimated';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';

const Scanner = () => {
  //  Camera
  const devices = useCameraDevices();
  const device = devices.back;

  const requestCameraPermissions = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === 'denied') return Linking.openSettings();
  }, []);

  const handleScannerQRCode = () => {
    console.log('cliquei');
    setIsScanned(true);
  };

  const renderCamera = () => {
    if (device == null) {
      return <ActivityIndicator size="large" color="red" />;
    } else {
      return (
        <View style={styles.containerCamera}>
          <Camera
            device={device}
            isActive={true}
            enableZoomGesture
            style={{flex: 1}}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
          <View style={styles.containerButtonScan}>
            <TouchableOpacity
              style={styles.buttonScan}
              onPress={handleScannerQRCode}>
              <Text>SCAN</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  };

  //  Barcode

  const [barcode, setBarcode] = useState('');
  const [isScanned, setIsScanned] = useState(false);

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE]);

  const toogleActiveState = async () => {
    if (!isScanned) return;
    if (barcodes && barcodes.length > 0) {
      barcodes.forEach(async scanBarcode => {
        if (scanBarcode.rawValue !== '') {
          setBarcode(scanBarcode.rawValue!);
          console.log(scanBarcode.rawValue);
        }
      });
    }
    setIsScanned(false);
  };

  useEffect(() => {
    toogleActiveState();
  }, [barcodes, isScanned]);

  useEffect(() => {
    requestCameraPermissions();
  }, []);

  return (
    <S.Container style={styles.container}>
      <Text>adsad</Text>
      {/* Camera */}
      {renderCamera()}
    </S.Container>
  );
};

export default Scanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  containerCamera: {
    flex: 1,
  },
  containerButtonScan: {
    width: '100%',
    alignItems: 'center',
  },
  buttonScan: {
    position: 'absolute',
    bottom: 12,
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
