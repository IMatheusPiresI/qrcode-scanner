import React, {useEffect} from 'react';
import * as S from './styles';

import {RFValue} from 'react-native-responsive-fontsize';
import {useTheme} from 'styled-components';

import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

export const IconCompleteScan: React.FC = () => {
  const theme = useTheme();
  const animatedValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotateZ: `${interpolate(animatedValue.value, [0, 1], [0, 360])}deg`},
        {translateY: interpolate(animatedValue.value, [0, 1], [-50, 0])},
      ],
    };
  });

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: interpolate(animatedValue.value, [0, 1], [-50, 0])},
      ],
      opacity: interpolate(animatedValue.value, [0, 1], [0, 1]),
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotateY: `${interpolate(animatedValue.value, [0, 1], [0, 360])}deg`},
      ],
    };
  });

  useEffect(() => {
    animatedValue.value = withTiming(1, {duration: 1000});
  }, []);

  return (
    <S.ContainerAnimationIcon style={animatedContainerStyle}>
      <S.BorderWrapper style={animatedStyle}>
        <S.WhiteSpace
          style={{
            position: 'absolute',
            top: RFValue(-12),
            right: RFValue(50),
          }}
        />
        <S.WhiteSpace
          style={{
            position: 'absolute',
            bottom: RFValue(-12),
            left: RFValue(50),
          }}
        />
      </S.BorderWrapper>
      <S.IconWrapper style={animatedIconStyle}>
        <S.IconAnt
          name="checkcircle"
          size={RFValue(180)}
          color={theme.colors.aqua}
        />
      </S.IconWrapper>
    </S.ContainerAnimationIcon>
  );
};
