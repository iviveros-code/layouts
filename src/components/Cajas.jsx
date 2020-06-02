import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Cajas = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
      <View style={styles.caja3}></View>
      <View style={styles.caja4}></View>
    </View>
  );
};

export default Cajas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffc4a3",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  caja1: {
    padding: 20,
    backgroundColor: "#ff9a76",
  },
  caja2: {
    padding: 20,
    backgroundColor: "#f96d80",
  },
  caja3: {
    padding: 20,
    backgroundColor: "#bb596b",
  },
  caja4: {
    padding: 20,
    backgroundColor: "#ffa299",
  },
});
