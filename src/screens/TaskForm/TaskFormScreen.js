import { View, Text, Button } from "react-native";

export default function TaskFormScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Crear / Editar Tarea</Text>

      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}
