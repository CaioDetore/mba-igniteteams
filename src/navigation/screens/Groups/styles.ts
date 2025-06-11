import styled from "styled-components/native";

interface Props {
  insetBottom: number
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
  padding-bottom: ${p => p.insetBottom + 24}px;
`