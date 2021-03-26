import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ProductCard = ({ name, price, img, weight }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${img}` }} style={{ width: 175, height: 85 }} />
      <Text>{name}</Text>
      <Text>{weight}</Text>
      <Text>{price}</Text>
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
});

export default ProductCard;
