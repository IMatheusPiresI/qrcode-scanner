import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Animated from 'react-native-reanimated';

export const ContainerAnimationIcon = styled(Animated.View)`
  width: 100%;
  height: ${RFValue(220)}px;
  align-items: center;
  justify-content: center;
`;

export const IconAnt = styled(IconAntDesign)`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
`;

export const BorderWrapper = styled(Animated.View)`
  width: ${RFValue(220)}px;
  height: ${RFValue(220)}px;

  border-width: 5px;
  border-color: ${({theme}) => theme.colors.black_medium};

  border-radius: 200px;
`;

export const IconWrapper = styled(Animated.View)`
  width: ${RFValue(180)}px;
  height: ${RFValue(180)}px;
  position: absolute;
  overflow: hidden;
`;

export const WhiteSpace = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(20)}px;
  background-color: ${({theme}) => theme.colors.shape_dark};
`;
