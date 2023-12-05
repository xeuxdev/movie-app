import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./src/screens/Home"
import MovieDetails from "./src/screens/movie-details"
import AllMovies from "./src/screens/AllMovies"

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
        <Stack.Screen name="AllMovies" component={AllMovies} />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
