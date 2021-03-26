import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ProductCard from "../Components/ProductCard";

const CategoryScreen = ({ route }) => {
  const { img } = route.params;
  const { products } = route.params;
  const category_products = products;
  return (
    <View style={styles.container}>
      <Image source={{ uri: `${img}`, width: "100%", height: "35%" }} />
      <FlatList
        data={category_products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ProductCard
                name={item.name}
                price={item.price}
                img={item.product_img}
                weight={item.weight}
              />
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

export default CategoryScreen;
