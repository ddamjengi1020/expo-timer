import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";

export default class extends React.Component {
  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.timer}>25:00</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying ? (
            <Button iconName={"play"} onPress={() => startTimer()} />
          ) : (
            <Button iconName={"pausecircle"} onPress={() => restartTimer()} />
          )}
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
    fontWeight: "100",
  },
});
