import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { t } from "react-native-tailwindcss";

import { Ionicons } from "@expo/vector-icons";
const SearchBar = () => {
  const { height, width } = useWindowDimensions();
  const [searchText, setSearchText] = useState("");
  return (
    <View style={[t.mY6, t.relative, t.flexRow, t.flex, t.justifyEnd]}>
      <View
        style={[
          t.mT2,
          t._mL2,

          t.absolute,
          {
            width: width * 0.78,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          },
          t.border,
          t.h12,
        ]}
      ></View>

      <View
        style={[
          {
            width: width * 0.8,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          },
          t.bgWhite,
          t.border,
          t.h12,
          t.flex,
          t.flexRow,
        ]}
      >
        <View
          style={[
            t.hFull,
            t.w12,
            {
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            },
            t.borderR,
            t.itemsCenter,
            t.justifyCenter,
          ]}
        >
          <Ionicons name="md-search-outline" size={22} color="black" />
        </View>
        <View style={[t.flex1, t.justifyCenter, t.pX2]}>
          <TextInput
            style={[t.textGray700, t.fontBold]}
            onChangeText={setSearchText}
            value={searchText}
            placeholder="useless placeholder"
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
