import React from "react"
import { Image, StatusBar, Text, TextInput, View } from "react-native"

function HomeScreen() {
  return (
    <View className="bg-purple-950 flex-1 p-5">
      <StatusBar />

      <View className="flex flex-row items-center justify-between">
        <Image source={require("../assets/logo.png")} className="w-5 h-5" />

        <Text className="text-white font-bold text-xl">Choose Movie</Text>

        <Image source={require("../assets/logo.png")} className="w-5 h-5" />
      </View>

      {/* search */}

      <View className="py-5">
        <TextInput
          placeholder="search..."
          className="w-full h-12 border px-5 text-white placeholder:text-white text-lg border-gray-200 rounded-xl"
        />
      </View>
    </View>
  )
}

export default HomeScreen
