import React from "react";
import styled from "styled-components";
const Title = ({ children, className }) => {
  return <span className={className}>{children}</span>;
};

export default styled(Title)`
  text-align: ${(props) => (props.center ? "center" : "left")};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 24px;
    color: var(--TextColor);
    font-weight: 400;
    line-height: 3;
    letter-spacing: 3;
    text-transform: uppercase;
    border-bottom: 1px solid #636365;
    color: ${(props) =>
      props.lite ? "var(--textColorLight)" : "var(--textColor);"};
  }
`;
