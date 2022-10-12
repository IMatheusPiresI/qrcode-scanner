import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAnt from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.aqua};
  align-items: center;
  justify-content: center;
`;

export const CameraWrapper = styled.View`
  width: ${RFValue(220)}px;
  height: ${RFValue(220)}px;
  border-radius: 25px;
  overflow: hidden;
`;
export const ButtonWrapper = styled(TouchableOpacity)``;

export const ScannerWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${RFValue(300)}px;
`;

export const ImageBorder = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
  position: absolute;
`;
export const ButtonScanner = styled(RectButton)`
  width: ${RFValue(250)}px;
  padding: 15px 0;
  background-color: ${({theme}) => theme.colors.shape};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleButton = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.aqua};
  font-weight: 800;
  letter-spacing: 7px;

  text-transform: uppercase;
  margin-left: 20px;
`;

export const Icon = styled(IconMaterial)``;
export const IconToastify = styled(IconAnt)``;

export const ToastifyWrapper = styled.View`
  width: 100%;
  align-items: center;
  height: ${RFValue(50)}px;
  position: absolute;
  top: 100px;
`;

export const Toastify = styled.View`
  width: ${RFValue(250)}px;
  align-items: center;
  height: ${RFValue(50)}px;
  background-color: ${({theme}) => theme.colors.shape};
  position: absolute;
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
`;
