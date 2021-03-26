import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Intro = ({ navigation, screenName, img, dotsImg }) => {
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    Poppins_Light: require("../assets/fonts/Poppins-Light.ttf"),
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <>
      <View style={styles.Container}>
        <Image source={img} />
        <Text style={styles.Title}>Lorem ipsum</Text>
        <Text style={styles.paragraphStyle}>
          Amet in id commodo excepteur do do id sunt. In consectetur pariatur
          anim minim irure aute occaecat esse excepteur. Ad quis mollit sit
        </Text>
        <Image style={{ marginTop: "12%" }} source={dotsImg} />

        <AntDesign
          onPress={() => navigation.navigate(screenName)}
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
    fontFamily: "Poppins",
    fontSize: 30,
  },
  paragraphStyle: {
    color: "#2E2E2E",
    paddingHorizontal: 30,
    fontFamily: "Poppins_Light",
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
