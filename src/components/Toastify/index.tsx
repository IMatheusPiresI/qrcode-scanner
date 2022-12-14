import React, {useEffect} from 'react';
import * as S from './styles';

import {useTheme} from 'styled-components';
import {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

type ToastifyProps = {
  qrCodeSucess: 'not scanned' | 'scanned';
};

export const Toastify: React.FC<ToastifyProps> = ({qrCodeSucess}) => {
  const theme = useTheme();
  const transformOpactiyAnimation = useSharedValue(30);

  const transformStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -transformOpactiyAnimation.value}],
      opacity: interpolate(transformOpactiyAnimation.value, [30, 0], [0, 1]),
    };
  });

  const transformRotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${interpolate(
            transformOpactiyAnimation.value,
            [30, 0],
            [0, 360],
          )}deg`,
        },
      ],
    };
  });

  const toastifySuccess = () => {
    return (
      <S.ToastifyWrapper style={transformStyle}>
        <S.Toastify>
          <S.IconWrapper style={transformRotateStyle}>
            <S.IconToastifyAnt
              name="checkcircle"
              size={23}
              color={theme.colors.success}
            />
          </S.IconWrapper>
          <S.Title>Successfully scanned</S.Title>
        </S.Toastify>
      </S.ToastifyWrapper>
    );
  };

  const toastifyError = () => {
    return (
      <S.ToastifyWrapper style={transformStyle}>
        <S.Toastify>
          <S.IconWrapper style={transformRotateStyle}>
            <S.IcontoastifyMaterial
              name="error"
              size={30}
              color={theme.colors.error}
            />
          </S.IconWrapper>
          <S.Title>QRCode not scanned</S.Title>
        </S.Toastify>
      </S.ToastifyWrapper>
    );
  };

  const renderToastify = () => {
    switch (qrCodeSucess) {
      case 'scanned':
        return toastifySuccess();

      case 'not scanned':
        return toastifyError();

      default:
        return <></>;
    }
  };

  useEffect(() => {
    transformOpactiyAnimation.value = 30;
    transformOpactiyAnimation.value = withTiming(0, {
      duration: 1000,
      easing: Easing.bounce,
    });
  }, [qrCodeSucess]);

  return renderToastify();
};
