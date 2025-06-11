import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

interface Props {
  insetTop: number 
}
export const Container = styled.View<Props>`
  width: 100%;

  padding: 16px;
  padding-top: ${p => p.insetTop + 16}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.Image`
  width: 45px;
  height: 45px;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 36,
  color: theme.COLORS.WHITE
}))`
`