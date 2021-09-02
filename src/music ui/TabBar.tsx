import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { t } from "react-native-tailwindcss";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",  
  "November",
  "December",
];
const TabBar = () => {
    const { height, width } = useWindowDimensions();
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <View style={[t.mY6]}>
          <FlatList
            data={[...monthNames]}
            keyExtractor={(item) => item}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  onPress={() => {
                    setActiveIndex(index);
                  }}
                  style={[t.mX4, t.relative]}
                >
                  {activeIndex == index && (
                    <View
                      style={[
                        t.absolute,
                        t.bottom0,
                        t.h3,
                        t.wFull,
                        t.bgOrange300,
                      ]}
                    ></View>
                  )}
                  <Text
                    style={[
                      t.textLg,
                      activeIndex == index && t.fontBold,
                      t.textGray900,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            }}
          />
        </View>
    )
}

export default TabBar
