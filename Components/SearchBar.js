import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchTerm, onTermChange, onSearch }) => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={searchTerm}
        onChangeText={onTermChange}
        onEndEditing={() => onSearch(searchTerm)}
      />
      <Feather style={styles.iconStyle} name="search" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "white",
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    marginLeft: 4,
  },
  iconStyle: {
    color: "#62A7D7",
    fontSize: 35,
    alignSelf: "flex-end",
    marginHorizontal: 15,
  },
});
export default SearchBar;
