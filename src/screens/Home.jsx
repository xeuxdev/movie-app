import React, { useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  View,
  Pressable,
  ScrollView,
} from "react-native"
import { getNowPlaying, getTopMovies, getUpcoming } from "../api"
import Animated from "react-native-reanimated"

function HomeScreen({ navigation }) {
  return (
    <ScrollView className="flex-1 p-5 bg-purple-950">
      <StatusBar />

      <View className="flex flex-row items-center justify-between">
        <Image source={require("../assets/logo.png")} className="w-5 h-5" />

        <Text className="text-xl font-bold text-white">Choose Movie</Text>

        <Image source={require("../assets/logo.png")} className="w-5 h-5" />
      </View>

      {/* search */}

      <View className="py-5">
        <TextInput
          placeholder="search..."
          className="w-full h-12 px-5 text-lg text-white border border-gray-200 placeholder:text-white rounded-xl"
        />
      </View>

      <NowPlaying navigation={navigation} />
      <ComingSoon navigation={navigation} />
      <TopMovies navigation={navigation} />
    </ScrollView>
  )
}

export default HomeScreen

const NowPlaying = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    setIsLoading(true)
    getNowPlaying()
      .then((res) => {
        // console.log(res)
        setData(res.results)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (error !== "") {
    return <View>Error na in sub</View>
  }

  return (
    <View className="my-5" key={"now_playing"}>
      <Text className="pb-2 text-lg font-semibold text-white">Now Playing</Text>

      <View className="py-5">
        {isLoading ? (
          <ActivityIndicator size={"large"} key={"now_playing"} />
        ) : (
          <MovieList data={data} navigation={navigation} key={"now_playing"} />
        )}
      </View>
    </View>
  )
}

const ComingSoon = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    setIsLoading(true)
    getUpcoming()
      .then((res) => {
        // console.log(res)
        setData(res.results)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (error !== "") {
    return <View>Error na in sub</View>
  }

  return (
    <View className="my-5" key={"coming_soon"}>
      <Text className="pb-2 text-lg font-semibold text-white">Coming Soon</Text>

      <View className="py-5">
        {isLoading ? (
          <ActivityIndicator size={"large"} key={"coming_soon"} />
        ) : (
          <MovieList data={data} navigation={navigation} key={"coming_soon"} />
        )}
      </View>
    </View>
  )
}

const TopMovies = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    setIsLoading(true)
    getTopMovies()
      .then((res) => {
        // console.log(res)
        setData(res.results)
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  // console.log(data)

  if (error !== "") {
    return <View>Error na in sub</View>
  }

  return (
    <View className="my-5" key={"top_movies"}>
      <Text className="pb-2 text-lg font-semibold text-white">Top Movies</Text>

      <View className="py-5">
        {isLoading ? (
          <ActivityIndicator size={"large"} key={"top_movies"} />
        ) : (
          <MovieList data={data} navigation={navigation} key={"top_movies"} />
        )}
      </View>
    </View>
  )
}

const MovieList = ({ data, navigation }) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        paddingHorizontal: 10,
        gap: 20,
      }}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => navigation.navigate("MovieDetails", { id: item.id })}
        >
          <Animated.Image
            source={{
              uri: `https://image.tmdb.org/t/p/w300${item?.poster_path}`,
            }}
            style={{
              width: 150,
              height: 150,
            }}
            className="rounded-md"
            sharedTransitionTag={`${item.id}`}
          />
        </Pressable>
      )}
    />
  )
}
