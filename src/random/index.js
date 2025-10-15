import React from "react";
import ReactDOM from "react-dom";

const Heading = React.createElement(
    "h1",
    {id: "heading"},
    "I am heading Element"
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>)