import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape_dark};
  align-items: center;
  justify-content: center;
`;

export const SuccessMessageWrapper = styled.View`
  align-items: center;
`;

export const SuccessTitle = styled.Text`
  margin-top: 20px;

  color: ${({theme}) => theme.colors.aqua};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 4px;
  font-size: ${RFValue(16)}px;
`;

export const EventScanWrapper = styled.View`
  width: ${RFValue(260)}px;

  background-color: ${({theme}) => theme.colors.shape};

  margin-top: 20px;

  border-radius: 20px;
  border-width: 1px;
  border-color: ${({theme}) => theme.colors.shape};
  overflow: hidden;
`;

export const EventWrapper = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.shape};
`;

export const EventButton = styled(RectButton)`
  width: 100%;
  height: ${RFValue(64)}px;
  background-color: ${({theme}) => theme.colors.aqua};

  align-items: center;
  justify-content: center;
`;

export const EventText = styled.Text`
  color: ${({theme}) => theme.colors.shape};
`;

export const ButtonReturnScan = styled(RectButton)`
  width: ${RFValue(75)}px;
  height: ${RFValue(75)}px;
  background-color: ${({theme}) => theme.colors.aqua};
  border-radius: 38px;

  align-items: center;
  justify-content: center;

  margin-top: 20px;
`;
export const Icon = styled(IconMaterial)``;
