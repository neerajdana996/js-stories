import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { t } from "react-native-tailwindcss";
import Header from "./src/Components/Header";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./src/Components/SearchBar";
import TabBar from "./src/Components/TabBar";
import MovieList from "./src/Components/MovieList";
import LatestMovies from "./src/Components/LatestMovies";

export default function App() {
  const { height, width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <StatusBar style="auto" />
      <View style={[t.flex1, t.mT8, t.pX4]}>
        <Header />
        <View style={[t.mY6]}>
          <Text style={[t.text2xl, t.fontBold, t.textGray900]}>
            Listening Everyday
          </Text>
          <Text adjustsFontSizeToFit style={[t.fontBold, t.mT4, t.textGray500]}>
            Explore millions of music according to your taste
          </Text>
        </View>
        <SearchBar />
        <TabBar />
        <ScrollView>
          <MovieList />
          <LatestMovies />
          <MovieList />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
