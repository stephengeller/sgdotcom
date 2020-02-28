/** @jsx jsx */
import React, { ReactElement, useState } from "react";
import { css, jsx } from "@emotion/core";

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

const BirthdayButton: React.FC<{ onClick?: Function }> = props => {
  return (
    <button
      onClick={() => console.log("foo")}
      css={css({ backgroundColor: "inherit", border: "none", padding: 0 })}
    >
      <code css={birthdayStyle}>Happy birthday!</code>
    </button>
  );
};

export const Izzi: React.FC = (): ReactElement => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div css={parent}>
      <div css={css({ fontSize: "10vw", alignSelf: "center" })}>
        <span>Hey Izzi,</span>
        <br />
        <BirthdayButton />

        <br />
        <code style={{ fontSize: "50%" }}>Click me ^^^</code>
      </div>
    </div>
  );
};
