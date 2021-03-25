import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
const CategoryCard = ({ image, name }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: `${image}` }}
        style={{ width: 160, height: 159 }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <Text style={{ color: "white", fontSize: 25, opacity: 200 }}>
            {name}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
});

export default CategoryCard;
