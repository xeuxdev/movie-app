import { Pressable } from "react-native"
import React from "react"
import { useNavigation } from "@react-navigation/native"
import Ionicons from "react-native-vector-icons/Ionicons"

export default function BackButton() {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => navigation.goBack()}
      className="absolute z-50 flex items-center justify-center w-10 h-10 bg-purple-700 rounded-full top-5 left-5"
    >
      <Ionicons name="arrow-back" color="white" size={24} />
    </Pressable>
  )
}
