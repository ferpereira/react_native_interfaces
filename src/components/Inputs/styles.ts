import styled from "styled-components/native";

export const Container = styled.TextInput`
  width: 90%;
  height: 54px;
  padding: 0 16px;
  border: 1px;

  background-color: ${({ theme }: any) => theme.COLORS.TEXT};
  color: ${({ theme }: any) => theme.COLORS.PRIMERY_800};
`;
