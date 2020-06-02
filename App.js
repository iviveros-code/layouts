import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Cajas from "./src/components/Cajas";
import Layaouts from "./src/components/Layaouts";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Cajas /> */}
      <Layaouts />
    </View>
  );
}

const styles = StyleSheet.create({});
