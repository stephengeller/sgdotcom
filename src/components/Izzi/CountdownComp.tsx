/** @jsx jsx */
import { Component } from "react";
import { css, jsx } from "@emotion/core";
import Countdown from "react-countdown";

const parent = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: "0",
  margin: "0",
  backgroundColor: "black",
  color: "white"
});

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
          <span style={{ color: "lightgreen" }}>{days}</span> days
        </div>
        <div>
          <span style={{ color: "lightgreen" }}>{hours}</span> hours
        </div>
        <div>
          <span style={{ color: "lightgreen" }}>{minutes}</span> minutes
        </div>
        <div>
          <span style={{ color: "lightgreen" }}>{seconds}</span> seconds
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
      <div css={parent}>
        <Countdown renderer={renderer} date={new Date(2020, 10, 19)} />
      </div>
    );
  }
}
