import { FlatList } from "react-native";
import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useCallback, useEffect, useState } from "react";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { groupsgetAll } from "@storage/group/groupsGetAll";

export default function Groups() {
  const { bottom } = useSafeAreaInsets();
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("NewGroup");
  }

  async function fetchGroups() {
    try {
      const data = await groupsgetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button onPress={handleNewGroup} title="Criar nova turma" />
    </S.Container>
  );
}
