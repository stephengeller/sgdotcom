/** @jsx jsx */
import React, { Component } from "react";
import { css, jsx } from "@emotion/core";

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
      onClick={() => click()}
      css={css({ backgroundColor: "inherit", border: "none", padding: 0 })}
    >
      <code css={birthdayStyle}>Happy birthday!</code>
    </button>
  );
};

export class Izzi extends Component<{}, IzziState> {
  private clicks: number;
  constructor({}) {
    super({});
    this.clicks = 0;
  }

  click(): void {
    const currentClicks = this.clicks;
    this.setState({
      clicks: currentClicks + 1
    });
    console.log("clicked!", this.clicks);
  }

  render() {
    return (
      <div css={parent}>
        <div css={css({ fontSize: "10vw", alignSelf: "center" })}>
          <span>Hey Izzi,</span>
          <br />
          {this.clicks < 3 ? (
            <BirthdayButton click={this.click.bind(this)} />
          ) : (
            "done"
          )}

          <br />
          <code style={{ fontSize: "50%" }}>Click me ^^^</code>
        </div>
      </div>
    );
  }
}

// export const Izzi: React.FC = (): ReactElement => {
//   const [count, setCount] = useState(0);
//   console.log(count);
//   return (
//     <div css={parent}>
//       <div css={css({ fontSize: "10vw", alignSelf: "center" })}>
//         <span>Hey Izzi,</span>
//         <br />
//         <BirthdayButton />
//
//         <br />
//         <code style={{ fontSize: "50%" }}>Click me ^^^</code>
//       </div>
//     </div>
//   );
// };
