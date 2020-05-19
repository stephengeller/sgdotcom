import React, { Component } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

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
  },
  progressBar: { width: "80vw" }
} as { [name: string]: React.CSSProperties };

const leavingDate = new Date(2019, 12, 18);
const arrivingDate = new Date(2020, 10, 19);

const now = (): number => {
  const total = leavingDate.getTime() + arrivingDate.getTime();
  const now = Date.now();
  return Number(((now / total) * 100).toFixed(3));
};

const calculateTimePercent = (currentTime: number, totalTime: number) => {
  return Number(((currentTime / totalTime) * 100).toFixed(3));
};

export class IzziStats extends Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div style={styles.parent}>
        {/* Percentage of time since leaving until return */}
        <ProgressBar
          style={styles.progressBar}
          label={`Amount of time since leaving ${now()}%`}
          variant="success"
          now={now()}
        />
        {/* Percentage of 50 years together that we're be away */}
        <ProgressBar
          style={styles.progressBar}
          label={`% of time away from eachother / overall time together`}
          variant="success"
          now={calculateTimePercent(
            // TODO: Check the maths on this, I don't think it's right
            Date.now() - leavingDate.getTime(),
            leavingDate.getTime() + new Date(2070, 1, 1).getTime()
          )}
        />
      </div>
    );
  }
}
