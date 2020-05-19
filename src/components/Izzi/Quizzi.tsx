/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes.json";

type IzziState = {
  clicks: number;
};

const parent = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: "0",
  margin: "0"
});

const birthdayStyle = css({
  ":hover": {
    color: "#ce5f91;"
  }
});

// eslint-disable-next-line react/prop-types
const BirthdayButton: React.FC<{ click: Function }> = ({ click }) => {
  return (
    <button
      onClick={(): void => click()}
      css={css({ backgroundColor: "inherit", border: "none", padding: 0 })}
    >
      <code css={birthdayStyle}>Happy birthday!</code>
    </button>
  );
};

// TODO: Check this out for tips: https://www.google.com/search?q=quiz+game+library+react&rlz=1C5CHFA_enGB872GB872&oq=quiz+game+library+react&aqs=chrome..69i57j0l7.9496j0j7&sourceid=chrome&ie=UTF-8
export class Quizzi extends Component<{}, IzziState> {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
  }

  click(): void {
    const newCount = this.state.clicks + 1;
    this.setState({ clicks: newCount });
  }

  render(): JSX.Element {
    return (
      <div css={parent}>
        <div
          css={css({ fontSize: "10vw", alignSelf: "center", color: "white" })}
        >
          <span>Hey Izzi,</span>
          <br />
          {this.state.clicks >= 3 ? (
            <Link to={`${ROUTES.IZZI.ROOT}/${ROUTES.IZZI.QUIZ}`}>
              Take the quiz.
            </Link>
          ) : (
            <BirthdayButton click={this.click.bind(this)} />
          )}

          <br />
          <code style={{ fontSize: "50%" }}>Click me ^^^</code>
        </div>
      </div>
    );
  }
}
