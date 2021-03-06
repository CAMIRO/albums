// import a library to help create a component
import React from "react";
import { AppRegistry, View } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";

// Create a componet
const App = () => (
  <View>
    <Header headerText={"Albums"} />
    <AlbumList />
  </View>
);

//render to the device/
AppRegistry.registerComponent("albums", () => App);
