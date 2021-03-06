import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Intro from "../Components/Intro";

const infoScreenTwo = ({ navigation }) => {
  const img = require("../assets/Truck.png");
  const dotsImg = require("../assets/ThreeDots-s.png");

  return (
    <View style={styles.container}>
      <Intro
        navigation={navigation}
        img={img}
        dotsImg={dotsImg}
        screenName="IntroThree"
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

export default infoScreenTwo;
