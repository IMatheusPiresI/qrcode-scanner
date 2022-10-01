import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape_dark};
  align-items: center;
  justify-content: center;
`;

export const QRCodeWrapper = styled.View`
  width: ${RFValue(225)}px;
  height: ${RFValue(225)}px;
  background-color: ${({theme}) => theme.colors.shape};

  border-radius: 25px;

  align-items: center;
  justify-content: center;
`;

export const ImageQRCode = styled.Image`
  width: ${RFValue(200)}px;
  height: ${RFValue(200)}px;
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
  letter-spacing: 4px;
  font-size: ${RFValue(16)}px;
`;

export const DescriptionWrapper = styled.View`
  width: ${RFValue(220)}px;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.colors.text_light};
  font-size: ${RFValue(14)}px;

  margin-top: 20px;
  text-align: justify;
`;
