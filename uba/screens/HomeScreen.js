import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={tw`text-red-500`}>HomeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create();
