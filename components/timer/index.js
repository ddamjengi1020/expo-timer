import { connect } from "react-redux";
import Timer from "./presenter";
import { actionCreators } from "../../store";

const mapStateToProps = (state) => {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startTimer: () => dispatch(actionCreators.startTimer()),
    restartTimer: () => dispatch(actionCreators.restartTimer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
