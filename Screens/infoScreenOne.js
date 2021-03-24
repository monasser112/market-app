import React from "react";
import Intro from "../Components/Intro";
import { View, Text, StyleSheet } from "react-native";

const infoScreenOne = () => {
  return (
    <View style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
      <Intro />
    </View>
  );
};

export default infoScreenOne;
