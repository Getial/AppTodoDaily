import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "./routes";

import HomeScreen from "../screens/Home/HomeScreen";
import TaskFormScreen from "../screens/TaskForm/TaskFormScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />

      <Stack.Screen name={ROUTES.TASK_FORM} component={TaskFormScreen} />
    </Stack.Navigator>
  );
}
