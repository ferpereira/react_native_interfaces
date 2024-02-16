import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled(Animatable.View)`
  align-items: center;

  width: 180px;
  height: 250px;
  background-color: ${({ theme }: any) => theme.COLORS.PRIMERY_900};
  margin: 0 10px;
  border-radius: 10px;
`;

export const Image = styled(Animatable.Image)`
  margin-top: -50px;
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.TEXT};
  font-family: ${({ theme }: any) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.5)}px;

  margin-top: ${RFPercentage(5)}px;
`;

export const Foundation = styled.Text`
  color: ${({ theme }: any) => theme.COLORS.TEXT};
  font-family: ${({ theme }: any) => theme.FONTS.REGULAR};
  font-size: 14px;

  margin-top: 16px;
`;
