import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  time -= minutes * 60;
  let seconds = parseInt(time % 60, 10);
  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};

export default class extends React.Component {
  // 타임랩스 재생 || 멈춤
  componentDidUpdate({ isPlaying }) {
    const { isPlaying: _isPlaying, addSecond } = this.props;
    if (!isPlaying && _isPlaying) {
      const timerInterval = setInterval(() => {
        addSecond();
      }, 1000);
      this.setState({
        timerInterval,
      });
    } else if (isPlaying && !_isPlaying) {
      clearInterval(this.state.timerInterval);
    }
  }
  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
    } = this.props;
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.timer}>
            {formatTime(timerDuration - elapsedTime)}
          </Text>
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
