import React, {useEffect} from 'react';
import * as S from './styles';
import {StatusBar, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  useSharedValue,
  interpolate,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

export const Home: React.FC = () => {
  const animatedQRCode = useSharedValue(-100);
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Scanner');
  };

  const qrCodeStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedQRCode.value}],
      opacity: interpolate(animatedQRCode.value, [-100, 0], [0, 1]),
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(animatedQRCode.value, [-100, 0], [0, 240]),
    };
  });

  const textStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: -animatedQRCode.value}],
      opacity: interpolate(animatedQRCode.value, [-100, 0], [0, 1]),
    };
  });

  useEffect(() => {
    animatedQRCode.value = withTiming(0, {
      duration: 1500,
    });
  }, []);

  return (
    <S.Container>
      <StatusBar hidden />

      <S.QRCodeWrapper style={[styles.shadow, qrCodeStyle]}>
        <S.ImageQRCode
          source={{
            uri: 'https://www.gov.br/inss/pt-br/centrais-de-conteudo/imagens/qr-code-novo-fw-300x300-png',
          }}
        />
      </S.QRCodeWrapper>

      <S.AnimatedViewButton style={buttonStyle}>
        <S.Button onPress={handleNavigate}>
          <S.TitleButton>SCAN QR CODE</S.TitleButton>
        </S.Button>
      </S.AnimatedViewButton>

      <S.DescriptionWrapper>
        <S.Description style={textStyle}>
          Welcome to QRCode Scanner, your simple and fast app to read QRCode.
          Just one click to open a link, copy a value or see what the qrcode is
          all about.
        </S.Description>
      </S.DescriptionWrapper>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
