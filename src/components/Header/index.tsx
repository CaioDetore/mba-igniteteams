import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackButton, BackIcon, Container, Logo } from "./styles";
import LogoImg from "@assets/logo.png";
import { useNavigation } from "@react-navigation/native";

interface Props {
  showBackButton?: boolean;
};

export function Header({ showBackButton = true }: Props) {
  const navigation = useNavigation()
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigation.navigate('Groups')}>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={LogoImg} />
    </Container>
  );
}
