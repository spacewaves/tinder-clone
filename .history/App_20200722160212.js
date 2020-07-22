import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Animated,
} from "react-native";

renderUsers = () => {
  return Users.map((item, i) => (
    <Animated.View
      style={{
        height: SCREEN_HEIGHT - 120,
        width: SCREEN_WIDTH,
        padding: 10,
      }}
    >
      <Image
        style={{
          flex: 1,
          height: null,
          width: null,
          resizeMode: "cover",
          borderRadius: 20,
        }}
        source={Users[0].uri}
      ></Image>
    </Animated.View>
  ));
};

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const Users = [
  { id: "1", uri: require("./src/images/1.jpg") },
  { id: "2", uri: require("./src/images/2.jpg") },
  { id: "3", uri: require("./src/images/3.jpg") },
  { id: "4", uri: require("./src/images/4.jpg") },
  { id: "5", uri: require("./src/images/5.jpg") },
];
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: 60 }}></View>
      <View style={{ flex: 1 }}></View>
      <renderUsers></renderUsers>
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
