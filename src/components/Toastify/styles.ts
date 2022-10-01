import styled from 'styled-components/native';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {RFValue} from 'react-native-responsive-fontsize';
import Animated from 'react-native-reanimated';

export const IconWrapper = styled(Animated.View)``;

export const IconToastifyAnt = styled(IconAnt)``;

export const IcontoastifyMaterial = styled(IconMaterial)``;

export const ToastifyWrapper = styled(Animated.View)`
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

export const Title = styled.Text`
  margin-left: 20px;
  font-size: ${RFValue(14)}px;
  font-weight: 700;
`;
