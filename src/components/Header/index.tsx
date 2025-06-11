import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import LogoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

interface Props {
  showBackButton?: boolean;
};

export function Header({ showBackButton = true }: Props) {
  const navigation = useNavigation()
  const insets = useSafeAreaInsets()

  return (
    <Container insetTop={insets.top}>
      {showBackButton && (
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
}
