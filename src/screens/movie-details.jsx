import React from "react"
import { useRoute } from "@react-navigation/native"
import { Image, Text, View } from "react-native"
import { useFetch } from "../hooks/usefetch"
import { API_KEY } from "../api"
import BackButton from "../components/backbutton"
import { ActivityIndicator } from "react-native"

import Animated from "react-native-reanimated"

export default function MovieDetails() {
  const route = useRoute()

  const { data: movie, isLoading } = useFetch(
    `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=${API_KEY}`
  )

  // console.log(movie)

  if (isLoading) {
    return <ActivityIndicator size={"large"} color={"purple"} />
  }

  return (
    <View className="flex-1">
      <BackButton />

      <View>
        <Animated.Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`,
          }}
          className="object-contain w-full h-80"
          sharedTransitionTag={`${route.params.id}`}
        />
      </View>

      <View className="w-full h-full p-5 -mt-10 bg-purple-950 rounded-t-2xl">
        {/*  */}

        <View className="flex flex-row items-center justify-between">
          <Text className="text-white">
            {new Date(movie?.release_date).toDateString()}
          </Text>
        </View>

        {/*  */}
        <>
          <Text className="py-2 text-xl font-semibold text-white ">
            {movie?.title}
          </Text>
        </>
        <View className="flex flex-row flex-wrap gap-3 py-2 ">
          {movie?.genres.map((genre) => (
            <Text key={genre.id} className="text-white">
              {genre.name}
            </Text>
          ))}
        </View>
        <Text className="text-white">Runtime: {movie?.runtime} min</Text>

        <View className="py-2">
          <Text className="text-white ">{movie?.overview}</Text>
        </View>
      </View>
    </View>
  )
}
