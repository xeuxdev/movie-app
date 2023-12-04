import React, { useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native"
import { useFetch } from "../hooks/usefetch"
import { API_KEY, getNowPlaying } from "../api"

function HomeScreen() {
  return (
    <View className="flex-1 p-5 bg-purple-950">
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

      <NowPlaying />
      <ComingSoon />
      <TopMovies />
    </View>
  )
}

export default HomeScreen

const NowPlaying = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    setIsLoading(true)
    getNowPlaying()
      .then((res) => {
        console.log(res)
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

  console.log(data)
  if (isLoading) {
    return <ActivityIndicator size={"large"} key={"now_playing"} />
  }

  if (error !== "") {
    return <View>Error na in sub</View>
  }

  return (
    <View className="my-5" key={"now_playing"}>
      <Text className="text-lg font-semibold">Now Playing</Text>

      <FlatList
        data={data?.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => (
          <View className="w-40 h-40 mr-3 bg-red-500">
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w300${item?.poster_path}`,
              }}
              className="w-20 h-20"
            />
          </View>
        )}
      />
    </View>
  )
}

const ComingSoon = () => {
  return (
    <View className="my-5">
      <Text className="text-lg font-semibold">Coming Soon</Text>
    </View>
  )
}

const TopMovies = () => {
  return (
    <View className="my-5">
      <Text className="text-lg font-semibold">Top Movies</Text>
    </View>
  )
}
