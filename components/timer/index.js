import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.timer}>25:00</Text>
        </View>
        <View style={styles.lower}>
          <Text>Button Here!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eb4d4b",
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  timer: {
    color: "white",
    fontSize: 110,
  },
});
