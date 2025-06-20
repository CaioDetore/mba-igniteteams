import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const navigaton = useNavigation();

  const [group, setGroup] = useState("");

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        Alert.alert("Novo Grupo", 'Informe o nome da turma.');
        return 
      }

      await groupCreate(group);
      navigaton.navigate("Players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        console.error(error);
        Alert.alert("Novo Grupo", 'Não foi possível criar um novo grupo.');
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          value={group}
          placeholder="Nome da turma"
          onChangeText={setGroup}
        />

        <Button title="Criar" onPress={handleNew} style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
