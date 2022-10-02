import React, {useEffect} from 'react';

import * as S from './styles';

import {Linking} from 'react-native';
import {IconCompleteScan} from '../../components/IconCompleteScan';

import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTheme} from 'styled-components';

type Params = {
  qrCodeValue: string;
};

export const ScanComplete: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const {qrCodeValue} = route.params as Params;
  const valid = qrCodeValue.includes('https');

  const handleCopyQRCodeValue = () => {
    Clipboard.setString(qrCodeValue);
    console.log('copiei');
  };

  const handleOpenUrl = () => {
    Linking.openURL(qrCodeValue);
  };

  const handleReturnScan = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.SuccessMessageWrapper>
        <IconCompleteScan />
        <S.SuccessTitle>Success Scan</S.SuccessTitle>
      </S.SuccessMessageWrapper>
      <S.EventScanWrapper>
        <S.EventWrapper>
          <S.EventButton onPress={handleCopyQRCodeValue}>
            <S.EventText>Copy Text</S.EventText>
          </S.EventButton>
        </S.EventWrapper>
        {valid && (
          <S.EventWrapper>
            <S.EventButton onPress={handleOpenUrl}>
              <S.EventText>Open Link</S.EventText>
            </S.EventButton>
          </S.EventWrapper>
        )}
        <S.EventWrapper>
          <S.EventButton>
            <S.EventText>View Value</S.EventText>
          </S.EventButton>
        </S.EventWrapper>
      </S.EventScanWrapper>

      <S.ButtonReturnScan onPress={handleReturnScan}>
        <S.Icon name="qr-code-scanner" size={40} color={theme.colors.shape} />
      </S.ButtonReturnScan>
    </S.Container>
  );
};
