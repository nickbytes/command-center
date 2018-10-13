import * as React from "react";

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          background: "black",
          display: "flex",
          flex: "1 0 auto",
          padding: "4em"
        }}
      >
        <h2 style={{ color: "#e64ee5", fontFamily: "monospace" }}>
          <span style={{ fontSize: "22px" }}>☻</span> Systems Ready
        </h2>
      </div>
    );
  }
}
