import React from "react";
import Intro from "../Components/Intro";
import { View, Text, StyleSheet } from "react-native";

const infoScreenOne = ({ navigation }) => {
  const img = require("../assets/first.png");
  const dotsImg = require("../assets/ThreeDots-f.png");
  return (
    <View style={styles.container}>
      <Intro
        navigation={navigation}
        screenName="IntroTwo"
        img={img}
        dotsImg={dotsImg}
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

export default infoScreenOne;
