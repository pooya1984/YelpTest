import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.styleInput}
        placeholder="Serach"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#e0e0e0",
    height: 50,
    borderRadius: 5,
    marginTop: 6,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  styleInput: {
    flex: 1,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
