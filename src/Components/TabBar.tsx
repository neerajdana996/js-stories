import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Animated,
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


const TabBar = ({scrollX,data,onItemChange}:any) => {
  const { height, width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    onItemChange(activeIndex);  
    return () => {
      
    }
  }, [activeIndex])
  return (
    <View style={[t.mY8]}>
      <FlatList
        data={[...data.map((a:any)=>a.name)]}
        pagingEnabled={false}
        keyExtractor={(item) => item}
        horizontal={true}
        snapToInterval={width*0.2}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => {
                setActiveIndex(index);
              }}
              style={[ t.relative,{width:width*0.2}]}
            >
              <Animated.Text
              
                style={[
                 
                  t.textGray700,
                  t.textCenter,
                  activeIndex == index && t.textWhite,
                  activeIndex == index && t.mT1,
                ]}
              >
                {item}
              </Animated.Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default TabBar;
