import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const ProductCard = ({ name, price, img, weight }) => {
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    Poppins_Light: require("../assets/fonts/Poppins-Light.ttf"),
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${img}` }} style={{ width: 175, height: 85 }} />
      <Text style={styles.nameStyle}>{name}</Text>
      <Text style={styles.weightStyle}>{weight}</Text>
      <Text style={styles.priceStyle}>{price}</Text>
      <View style={{ position: "absolute", bottom: 10, right: 20 }}>
        <AntDesign name="pluscircle" size={24} color="#D4D4D4" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRightColor: "#D5D5D5",
    borderRightWidth: 1,
    borderBottomColor: "#D5D5D5",
    borderBottomWidth: 1,
  },
  nameStyle: {
    fontFamily: "Poppins",
    fontSize: 15,
  },
  weightStyle: {
    fontFamily: "Poppins_Light",
    fontSize: 14,
  },
  priceStyle: {
    fontFamily: "Poppins_Light",
    fontSize: 14,
  },
});

export default ProductCard;
