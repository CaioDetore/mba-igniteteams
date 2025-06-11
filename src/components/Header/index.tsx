import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import LogoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = true }: Props) {
  const insets = useSafeAreaInsets()

  return (
    <Container insetTop={insets.top}>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
}
