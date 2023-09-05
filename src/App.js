import React from "react";
import "./styles.css";
import ReactMarkdown from "react-markdown";
import MathJax from "react-mathjax";
import RemarkMathPlugin from "remark-math";
//var Latex = require("react-latex");

export default function App(props) {
  const newProps = {
    ...props,
    plugins: [RemarkMathPlugin],
    renderers: {
      ...props.renderers,
      math: props => <MathJax.Node formula={props.value} />,
      inlineMath: props => <MathJax.Node inline formula={props.value} />
    }
  };
  return (
    <MathJax.Provider input="tex">
      <ReactMarkdown {...newProps} />
    </MathJax.Provider>
  );
}
