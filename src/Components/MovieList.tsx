import React, { useRef } from "react";
import { View, Text, FlatList, useWindowDimensions, Image ,Animated } from "react-native";
import { t } from "react-native-tailwindcss";
import { Ionicons } from "@expo/vector-icons";

// write a function to get movies list from api
const getMovies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    poster_path:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    overview:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
    vote_average: 8.3,
    release_date: "2019-04-26",
  },
  {
    id: 2,
    title: "Avengers: Infinity War",
    poster_path:
      "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    overview:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    vote_average: 8.3,
    release_date: "2018-04-25",
  },
  {
    id: 3,
    title: "Avengers: Age of Ultron",
    poster_path:
      "https://image.tmdb.org/t/p/w500/t90Y3G8UGQp0f0DrP60wRu9gfrH.jpg",
    overview:
      "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth’s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    vote_average: 8.3,
    release_date: "2015-04-22",
  },
  {
    id: 4,
    title: "Avengers: The Avengers",
    poster_path:
      "https://image.tmdb.org/t/p/w500/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg",
    overview:
      "Earth’s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
    vote_average: 8.3,
    release_date: "2012-04-25",
  },
  {
    id: 5,
    title: "Avengers: The Initiative",
    poster_path:
      "https://image.tmdb.org/t/p/w500/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.",
    vote_average: 8.3,
    release_date: "2007-02-05",
  },
];

const MovieList = () => {
  const { width, height } = useWindowDimensions();
  const ITEM_HEIGHT = height * 0.26;
  const ITEM_WIDTH = ITEM_HEIGHT * 0.9;
  const scrollX = useRef(new Animated.Value(0)).current
  return (
    <View style={[t.mY6]}>
      <Animated.FlatList
      onScroll={Animated.event(
        // scrollX = e.nativeEvent.contentOffset.x
        [{
            nativeEvent: {
                contentOffset: {
                    x: scrollX
                }
            }
        }]
        , {
            useNativeDriver: true
        })}
        data={getMovies}
        keyExtractor={(item, index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }: any) => {
            const rotateDeg = index % 2 === 0 ? "-3deg" : "3deg"
            const inputRange = [(index - 1) * ITEM_WIDTH, index * ITEM_WIDTH, (index + 1) * ITEM_WIDTH];
            const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.9, 1, 0.7],
            });
            const rotate = scrollX.interpolate({
                inputRange,
                outputRange: ['0deg', rotateDeg, '0deg'],
            });
          return (
            <Animated.View
              style={[
                t.pY2,
                t.pX4,
                
                {
                  height: ITEM_HEIGHT * 1.2,
                  transform: [{ rotate}, { scale }],
                },
              ]}
            >
              <View
                style={[
                  t.mT4,

                  t.absolute,
                  {
                    right: ITEM_WIDTH * 0.1,
                    width: ITEM_WIDTH * 0.75,
                    borderRadius: 10,
                    height: ITEM_HEIGHT,
                  },
                  t.border,
                ]}
              ></View>

              <View
                style={[
                  {
                    width: ITEM_WIDTH * 0.85,
                    height: ITEM_HEIGHT,
                    borderRadius: 10,
                  },
                  t.bgWhite,
                  t.border,
                  t.p2,
                  t.flex,
                ]}
              >
                <Image
                  style={[{ height: ITEM_HEIGHT * 0.5 }, t.wFull, t.roundedLg]}
                  source={{ uri: item.poster_path }}
                />
                <View
                  style={[
                    t.flex,
                    t.flexRow,
                    t.mY2,
                    t.justifyBetween,
                    t.itemsCenter,
                  ]}
                >
                  <Text style={[t.textGray600, t.textXs]}>20 Songs</Text>
                  <Ionicons
                    name="play-circle-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <Text style={[t.textGray800]}>{item.title}</Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default MovieList;
