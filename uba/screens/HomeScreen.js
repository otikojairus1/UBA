import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_APIKEY} from "@env"

export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>

      <Text style={tw`text-red-500`}>HomeScreen</Text>
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAP_APIKEY,
        language: 'en',
      }}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create();
