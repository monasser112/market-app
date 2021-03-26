import React, { useEffect, useState } from "react";
import { Header } from "react-native-elements";
import { EvilIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import CategoryCard from "../Components/CategoryCard";

const ProductsScreen = ({ navigation }) => {
  const [category, setCategory] = useState([]);
  const getCategories = async () => {
    const response = await axios.get(
      `https://5bcce576cf2e850013874767.mockapi.io/task/categories`
    );
    //console.log(response.data);
    setCategory(response.data);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        backgroundColor="white"
        placement="right"
        leftComponent={{ icon: "menu", color: "#62A7D7", size: 34 }}
        centerComponent={<EvilIcons name="search" size={34} color="#62A7D7" />}
        rightComponent={<EvilIcons name="cart" size={34} color="#62A7D7" />}
      />
      <ImageBackground
        style={{ width: "100%", height: 262 }}
        source={require("../assets/Start.png")}
      />
      <View
        style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          right: 0,
          bottom: 0,
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Text style={{ fontSize: 50, color: "white" }}>20% </Text>
          <Text style={{ fontSize: 20, color: "white", opacity: 100 }}>
            Discount
          </Text>
        </View>
      </View>

      <FlatList
        style={{ marginHorizontal: 40 }}
        data={category}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          // console.log("new Line");
          // console.log(item);
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Category", {
                  img: item.category_img,
                  products: item.products,
                })
              }
            >
              <CategoryCard image={item.category_img} name={item.name} />
            </TouchableOpacity>
          );
        }}
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
export default ProductsScreen;
