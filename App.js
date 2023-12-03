import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "react-native"
import HomeScreen from "./src/screens/Home"

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="AllMovies" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
