import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("IntroOne");
  }, 3000);
  return (
    <View style={styles.backgroundStyle}>
      <Image source={require("../assets/FM.png")} style={styles.logoStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D95500",
    height: "100%",
  },
  logoStyle: {
    width: 150,
    height: 100,
  },
});

export default HomeScreen;
