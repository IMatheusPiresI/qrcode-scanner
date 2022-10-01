import React from 'react';
import * as S from './styles';
import {StatusBar, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate('Scanner');
  };

  return (
    <S.Container>
      <StatusBar hidden />

      <S.QRCodeWrapper style={styles.shadow}>
        <S.ImageQRCode
          source={{
            uri: 'https://www.gov.br/inss/pt-br/centrais-de-conteudo/imagens/qr-code-novo-fw-300x300-png',
          }}
        />
      </S.QRCodeWrapper>

      <S.Button onPress={handleNavigate}>
        <S.TitleButton>SCAN QR CODE</S.TitleButton>
      </S.Button>

      <S.DescriptionWrapper>
        <S.Description>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups
          text commonly used in the graphic, print, and publishing industries.
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
