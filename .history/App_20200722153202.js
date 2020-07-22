import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const SCREEN_HEIGHT = dimensions.get("window").height;
const SCREEN_WIDTH = dimensions.get("window").width;
const Users = [
  { id: "1", uri: require("./src/images/1.jpg") },
  { id: "2", uri: require("./src/images/1.jpg") },
  { id: "3", uri: require("./src/images/1.jpg") },
  { id: "4", uri: require("./src/images/1.jpg") },
  { id: "5", uri: require("./src/images/1.jpg") },
];
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 60 }}></View>
      <View style={{ flex: 1 }}></View>
      <View style={{ height: 60 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
