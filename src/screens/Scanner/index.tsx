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
  StatusBar,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {BarcodeFormat, useScanBarcodes} from 'vision-camera-code-scanner';
import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';
import {Toastify} from '../../components/Toastify';
import {useNavigation} from '@react-navigation/native';

const Scanner = () => {
  const [qrCodeSucess, setQrCodeSucess] = useState<
    'not scanned' | 'scanned' | ''
  >('');
  const [isScanned, setIsScanned] = useState(false);
  const theme = useTheme();
  const navigation = useNavigation();

  //  Camera
  const devices = useCameraDevices();
  const device = devices.back;

  const requestCameraPermissions = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === 'denied') return Linking.openSettings();
  }, []);

  const renderCamera = () => {
    if (device == null) {
      return <ActivityIndicator size="large" color={theme.colors.shape} />;
    } else {
      return (
        <S.CameraWrapper>
          <Camera
            device={device}
            isActive={true}
            enableZoomGesture
            style={{
              width: RFValue(220),
              height: RFValue(220),
            }}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
        </S.CameraWrapper>
      );
    }
  };

  //  Barcode

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE]);

  const toogleActiveState = () => {
    if (barcodes && barcodes.length > 0) {
      barcodes.forEach(scanBarcode => {
        if (scanBarcode.rawValue !== '') {
          setQrCodeSucess('scanned');
          setTimeout(() => {
            navigation.navigate('ScanComplete', {
              qrCodeValue: scanBarcode.rawValue!,
            });
          }, 1000);
          console.log(scanBarcode.rawValue);
        }
      });
    } else {
      setQrCodeSucess('not scanned');
    }
  };

  const handleScannerQRCode = () => {
    setIsScanned(true);
  };

  useEffect(() => {
    if (isScanned) {
      toogleActiveState();
      setIsScanned(false);
    }
  }, [barcodes, isScanned]);

  useEffect(() => {
    requestCameraPermissions();
  }, []);

  return (
    <S.Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {/* Notification */}
      {qrCodeSucess !== '' && <Toastify qrCodeSucess={qrCodeSucess} />}

      {/* Camera */}
      <S.ScannerWrapper>
        <S.ImageBorder source={require('../../assets/images/border.png')} />
        {renderCamera()}
      </S.ScannerWrapper>
      {/*ButtonScan*/}
      <S.ButtonScanner onPress={handleScannerQRCode}>
        <S.Icon name="qr-code-scanner" size={30} color={theme.colors.aqua} />
        <S.TitleButton>SCAN</S.TitleButton>
      </S.ButtonScanner>
    </S.Container>
  );
};

export default Scanner;
