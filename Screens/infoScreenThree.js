import React from "react";
import Intro from "../Components/Intro";
import { StyleSheet, Text, View } from "react-native";

const infoScreenThree = ({ navigation }) => {
  const img = require("../assets/Like.png");
  const dotsImg = require("../assets/ThreeDots-t.png");
  return (
    <View style={styles.container}>
      <Intro
        navigation={navigation}
        img={img}
        dotsImg={dotsImg}
        screenName="Product"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
});

export default infoScreenThree;
