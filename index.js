// import a library to help create a component
import React from "react";
import { Text, AppRegistry } from "react-native";

// Create a componet
const App = () => <Text>Some text</Text>;
//render to the device/
AppRegistry.registerComponent("albums", () => App);
