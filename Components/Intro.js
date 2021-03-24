import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Intro = () => {
  return (
    <>
      <View style={styles.Container}>
        <Image source={require("../assets/first.png")} />
        <Text style={styles.Title}>Lorem ipsum</Text>
        <Text style={styles.paragraphStyle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium
          imperdiet dolor, condimentum elementum sem. Pellentesque finibus augue
          nibh
        </Text>
        <Image
          style={{ marginTop: 50 }}
          source={require("../assets/ThreeDots-f.png")}
        />
        <AntDesign
          style={styles.iconStyle}
          name="rightcircle"
          size={44}
          color="#D95500"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginVertical: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
  },
  childContainer: {
    display: "flex",
    flexDirection: "row",
  },

  Title: {
    color: "#2E2E2E",
    marginVertical: 30,
    fontSize: 30,
  },
  paragraphStyle: {
    color: "#2E2E2E",
    paddingHorizontal: 30,
    fontSize: 15,
  },
  iconStyle: {
    paddingBottom: 20,
    position: "absolute",
    right: 20,
    top: "60%",
  },
});

export default Intro;
