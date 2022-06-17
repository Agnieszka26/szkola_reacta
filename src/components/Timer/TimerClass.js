import React from "react";
class TimerClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {time: 0};
      }
  componentDidMount() {
    setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
      console.log(this.state.time)
    }, 1000);
  }
  render() {
    return <h2>It is {this.state.time}.</h2>;
  }
}

export default TimerClass;
