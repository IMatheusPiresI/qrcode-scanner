import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import Animated from 'react-native-reanimated';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape_dark};
  align-items: center;
  justify-content: center;
`;

export const QRCodeWrapper = styled(Animated.View)`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
  background-color: ${({theme}) => theme.colors.shape};

  border-radius: 25px;

  align-items: center;
  justify-content: center;
`;

export const ImageQRCode = styled.Image`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
`;

export const Button = styled(TouchableOpacity)`
  width: ${RFValue(220)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.aqua};

  padding: 15px 0;

  border-radius: 10px;

  margin-top: 45px;
`;
export const TitleButton = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: ${RFValue(12)}px;
  padding: 10px 5px;
`;

export const DescriptionWrapper = styled.View`
  width: ${RFValue(220)}px;
`;

export const Description = styled(Animated.Text)`
  color: ${({theme}) => theme.colors.text_light};
  font-size: ${RFValue(13)}px;

  margin-top: 30px;
  text-align: justify;
`;

export const AnimatedViewButton = styled(Animated.View)`
  overflow: hidden;
  align-items: flex-start;
`;
