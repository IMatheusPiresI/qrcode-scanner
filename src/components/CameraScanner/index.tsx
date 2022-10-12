import React, {useCallback, useEffect} from 'react';
import * as S from './styles';

import {Camera, Frame, useCameraDevices} from 'react-native-vision-camera';
import {ActivityIndicator, Linking} from 'react-native';
import {useTheme} from 'styled-components';

import {RFValue} from 'react-native-responsive-fontsize';

type CameraScannerProps = {
  frameProcessor: (frame: Frame) => void;
};

export const CameraScanner: React.FC<CameraScannerProps> = ({
  frameProcessor,
}) => {
  const theme = useTheme();

  //  Camera
  const devices = useCameraDevices();
  const device = devices.back;

  const requestCameraPermissions = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === 'denied') return Linking.openSettings();
  }, []);

  useEffect(() => {
    requestCameraPermissions();
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
            frameProcessorFps={1}
          />
        </S.CameraWrapper>
      );
    }
  };

  return renderCamera();
};
