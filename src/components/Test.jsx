import React from "react";
import styled from "styled-components";

const Test = (props) => {
    const colorname = props.getWord?.(props.colors);
  return (
    <div>
      <p>色：{props.colors}</p>
      <p>{colorname}</p>
    </div>

  );
};
export default Test;