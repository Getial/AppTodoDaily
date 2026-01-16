import { View, Text, Button } from "react-native";
import { ROUTES } from "../../navigation/routes";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home - Hoy</Text>

      <Button
        title="Crear tarea"
        onPress={() => navigation.navigate(ROUTES.TASK_FORM)}
      />
    </View>
  );
}
