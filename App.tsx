import { StatusBar } from "expo-status-bar";
import React, { useCallback, useRef, useState } from "react";
import {
  Animated,
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

import { Ionicons } from "@expo/vector-icons";

import TabBar from "./src/Components/TabBar";
import Chart from "./src/Components/Chart";


const data = [
  {
    name: "January",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "February",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "March",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "April",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "May",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "June",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "July",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "August",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "September",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "October",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "November",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
  {
    name: "December",
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ],
  },
];

export default function App() {
  const { height, width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState<any>(0);
  const scrollX = useRef<any>(new Animated.Value(0)).current;
  const ref = useRef<any>(null);
  const ITEMWIDTH = width * 0.9;
  const onItemPress = useCallback((itemIndex) => {
    console.log("itemIndex", itemIndex);

    ref?.current?.scrollToOffset({
      offset: itemIndex * (ITEMWIDTH + 20),
      animated: true,
    });
  }, []);


  return (
    <>
      <StatusBar hidden />
      <View
        style={[
          t.flex1,
          {height},
          t.justifyBetween,
          t.bgBlack,
          { paddingHorizontal: 15 },
        ]}
      >
        <TabBar
         
          scrollX={scrollX}
          data={data}
          onItemChange={onItemPress}
        />

        <Animated.FlatList
          data={data}
          ref={ref}
          onScroll={Animated.event(
            // scrollX = e.nativeEvent.contentOffset.x
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollX,
                  },
                },
              },
            ],
            {
              useNativeDriver: true,
            }
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          pagingEnabled={true}
          snapToInterval={ITEMWIDTH + 20}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => {
            const inputRange = [
              (index - 1) * ITEMWIDTH,
              index * ITEMWIDTH,
              (index + 1) * ITEMWIDTH,
            ];
            const translateX = scrollX.interpolate({
              inputRange,
              outputRange: [
                (index - 1) * ITEMWIDTH,
                index * ITEMWIDTH,
                (index + 1) * ITEMWIDTH,
              ],
            });

            return (
              
              <Animated.View
                style={[
                  {
                    transform: [
                      {
                        translateX,
                      },
                    ],
                  },
                  
                  t.pX4,
                  t.pY8,
                  t.bgWhite,
                  t.flex,
                  t.justifyBetween,
                  {
                    height: height * 0.7,
                    width: ITEMWIDTH,
                    marginHorizontal: 10,
                    borderRadius: 15,
                  },
                  t.relative,
                ]}
              >
                <View
                  style={[t.flex, t.flexRow, t.itemsCenter, t.justifyBetween]}
                >
                  <View style={[t.flex, t.justifyBetween]}>
                    <Text style={[t.textLg, { fontWeight: "700" }]}>
                      {item.name}
                    </Text>
                    <Text style={[t.textGray600]}>94 new reviews added</Text>
                  </View>
                  <Ionicons
                    name="settings-outline"
                    size={20}
                    color="#000"
                  ></Ionicons>
                </View>
                <Chart data={item.data} />
                <View style={[t.flex, t.flexRow, t.wFull]}>
                  <View style={[t.flex, t.w1_2, t.flexRow]}>
                    <Text style={[t.w1_2, t.text3xl, { fontWeight: "700" }]}>
                      823
                    </Text>
                    <Text style={[t.w1_2, t.textLg, t.textGray600]}>
                      Total reviews
                    </Text>
                  </View>
                  <View style={[t.flex, t.w1_2, t.flexRow]}>
                    <Text style={[t.w1_2, t.text3xl, { fontWeight: "700" }]}>
                      823
                    </Text>
                    <Text style={[t.w1_2, t.textLg, t.textGray600]}>
                      Total reviews
                    </Text>
                  </View>
                </View>
              </Animated.View>
            );
          }}
        />

        <View style={[t.flex, t.flexRow, t.mY8, t.justifyCenter]}>
          <View
            style={[
              t.pY2,
              t.pX4,
              t.bgWhite,
              { width: width * 0.4 },
              t.roundedFull,
              t.flex,
              t.flexRow,
              t.justifyBetween,
            ]}
          >
            <Ionicons name="bar-chart-outline" size={26} color="#000" />
            <Ionicons name="barcode-outline" size={26} color="#777" />
            <Ionicons name="folder-open-outline" size={26} color="#777" />
          </View>
        </View>
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
