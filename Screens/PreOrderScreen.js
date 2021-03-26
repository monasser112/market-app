import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Header } from "react-native-elements";
import SearchBar from "../Components/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

const PreOrderScreen = ({ navigation, route }) => {
  const [loaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    Poppins_Light: require("../assets/fonts/Poppins-Light.ttf"),
    Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const { name, weight, price, img } = route.params;
  return (
    <View style={styles.container}>
      <Header
        backgroundColor="white"
        placement="left"
        leftComponent={
          <TouchableOpacity onPress={() => navigation.navigate("Product")}>
            <Ionicons name="chevron-back" size={34} color="#62A7D7" />
          </TouchableOpacity>
        }
        centerComponent={
          <SearchBar
          // searchTerm={searchTerm}
          // onTermChange={setSearchTerm}
          // onSearch={getSearchResults}
          />
        }
        rightComponent={
          <AntDesign name="shoppingcart" size={34} color="#62A7D7" />
        }
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image style={styles.ImageStyle} source={{ uri: img }} />
        <Text style={styles.titleStyle}>{name}</Text>
        <Text style={styles.weightStyle}>{weight}</Text>
        <Text style={styles.priceStyle}>{price}</Text>
      </View>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Text style={styles.attrStyle}>Qty</Text>
        <View style={styles.controls_Wrapper}>
          <Text>
            <AntDesign name="minus" size={24} color="black" />
          </Text>
          <Text style={{ marginHorizontal: 6, fontFamily: "Poppins" }}>2</Text>
          <Text>
            <AntDesign name="plus" size={24} color="black" />
          </Text>
        </View>
      </View>
      <View
        style={{ display: "flex", flexDirection: "row", marginVertical: 15 }}
      >
        <Text style={styles.attrStyle}>Total</Text>
        <Text style={styles.totalStyle}>EGP 700</Text>
      </View>

      <View>
        <Text style={styles.footerParagrapghStyle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et
        </Text>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            backgroundColor: "#D95500",
            alignSelf: "center",
            width: "80%",
            height: 50,
            fontFamily: "Poppins",
            fontSize: 24,
            color: "white",
            paddingHorizontal: 80,
            paddingVertical: 5,
          }}
        >
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: "100%",
  },
  ImageStyle: {
    width: 206,
    height: 147,
    opacity: 1,
  },
  titleStyle: {
    fontSize: 34,
    fontFamily: "Poppins",
  },
  priceStyle: {
    fontSize: 34,
    fontFamily: "Poppins",
  },
  weightStyle: {
    fontSize: 23,
    fontFamily: "Poppins",
  },
  attrStyle: {
    fontSize: 23,
    fontFamily: "Poppins_Light",
    marginHorizontal: "7%",
  },
  controls_Wrapper: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    paddingVertical: 5,
    marginHorizontal: 30,
  },
  totalStyle: {
    color: "#D95500",
    fontSize: 23,
    fontFamily: "Poppins_Light",
  },
  footerParagrapghStyle: {
    fontFamily: "Poppins_Regular",
    color: "#C1C1C1",
    fontSize: 16,
  },
});

export default PreOrderScreen;
