import React from "react";
import { View, Text, useWindowDimensions, Image } from "react-native";
import { t } from "react-native-tailwindcss";
import { SimpleLineIcons } from '@expo/vector-icons'; 

const Header = () => {
  const { height, width } = useWindowDimensions();
  return (
    <View
      style={[
        t.flex,
        t.flexRow,
        t.h20,
        
        t.justifyBetween,
        t.itemsCenter,
 
      ]}
    >
      <View style={[t.h12, t.w12, t.border,t.roundedLg,t.bgBlue200]}>
         
      </View>
      <Text
        style={[t.flex1, t.textCenter, t.fontBold, t.textLg, t.textGray700]}
      >
        Home
      </Text>
      <View style={[t.flex,t.flexRow,t.itemsCenter,]}>
      <SimpleLineIcons name="bell" size={24} color="black" />
        <Image style={[t.h12, t.w12, t.roundedLg,t.mL4]} source={{uri:'https://uifaces.co/our-content/donated/N8kxcjRw.jpg'}}/>
      </View>
    </View>
  );
};

export default Header;
