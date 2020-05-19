import React, { Component } from "react";
import Countdown from "react-countdown";
import ProgressBar from "react-bootstrap/ProgressBar";

const leavingDate = new Date(2019, 12, 18);
const arrivingDate = new Date(2020, 10, 19);

const warmerColour = "#e76f51";
const styles = {
  parent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100vh",
    margin: "0",
    backgroundColor: "#264653",
    color: "#f4a261",
    fontSize: "4.5vw",
    fontFamily: "helvetica"
  },
  countdownNumber: {
    color: warmerColour,
    fontWeight: "bold"
  }
} as { [name: string]: React.CSSProperties };

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
          <span style={styles.countdownNumber}>{days}</span> days
        </div>
        <div>
          <span style={styles.countdownNumber}>{hours}</span> hours
        </div>
        <div>
          <span style={styles.countdownNumber}>{minutes}</span> minutes
        </div>
        and
        <div>
          <span style={styles.countdownNumber}>{seconds}</span> seconds
        </div>
      </div>
    );
  }
};

const now = (): number => {
  const total = leavingDate.getTime() + arrivingDate.getTime();
  const now = Date.now();
  return Number(((now / total) * 100).toFixed(3));
};

export class CountdownComp extends Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div style={styles.parent}>
        <div style={{ paddingBottom: "10px", fontWeight: "bold" }}>
          {"Hey bub!"}
        </div>
        <div>{"I hereby promise that I'll be with you in"}</div>
        <Countdown renderer={renderer} date={arrivingDate} />
        <div style={{ paddingTop: "20px", color: warmerColour }}>
          {"I love you so so so so so much"}
          <ProgressBar label={`${now()}%`} variant="success" now={now()} />
        </div>
      </div>
    );
  }
}
