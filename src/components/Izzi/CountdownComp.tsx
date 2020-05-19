/** @jsx jsx */
import { Component } from "react";
import { css, jsx } from "@emotion/core";
import Countdown from "react-countdown";

const styles = {
  parent: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    padding: "10",
    margin: "0",
    backgroundColor: "#eae2b7",
    color: "#003049",
    fontSize: "4.5vw",
    fontFamily: "helvetica"
  }),
  countdown: {
    number: { color: "#d62828" }
  }
};

const renderer: ({
  days,
  hours,
  minutes,
  seconds,
  completed
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => JSX.Element = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>{"See you soon <3"}</span>;
  } else {
    return (
      <div>
        <div>
          <span style={styles.countdown.number}>{days}</span> days
        </div>
        <div>
          <span style={styles.countdown.number}>{hours}</span> hours
        </div>
        <div>
          <span style={styles.countdown.number}>{minutes}</span> minutes
        </div>
        and
        <div>
          <span style={styles.countdown.number}>{seconds}</span> seconds
        </div>
      </div>
    );
  }
};

export class CountdownComp extends Component<{}, {}> {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  render(): JSX.Element {
    return (
      <div css={styles.parent}>
        <div style={{ padding: "10px" }}>{"Hey bub!"}</div>
        <div>
          {"I hereby "}
          <strong>promise</strong>
          {" that I'll be with you in"}
        </div>
        <Countdown renderer={renderer} date={new Date(2020, 10, 19)} />
        <div style={{ padding: "20px", color: "#d62828" }}>
          {"I love you so so so so so much"}
        </div>
      </div>
    );
  }
}
