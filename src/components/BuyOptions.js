import React from "react";
import Title from "./Title";
import buyLinks from "../constants/buyLinks";
import styled from "styled-components";

function BuyOptions({ className }) {
  return (
    <section className={className}>
      <Title center>
        <h2>Buy “The Three Invaders”</h2>
      </Title>
      <div className="container">
        {buyLinks.map((item, index) => {
          return (
            <div className="linkWrapper" key={index}>
              <a className="link" href={item.url}>
                <div className="linkText">{item.text}</div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default styled(BuyOptions)`
  max-width: 1100px;
  margin: 90px auto;
  padding-bottom: 25px;
  border-bottom: 1px solid #c5c5c5;
  .container {
    display: flex;
    flex-wrap: wrap;
    max-width: 980px;

    margin: auto;
    justify-content: space-around;
  }
  .link {
    font-size: 16px;
    text-transform: uppercase;
    color: var(--textColor);
    width: 100%;
    text-align: center;
    text-decoration: none;
  }
  .linkWrapper {
    font-size: 16px;
    border: 1.2px solid var(--textColor);
    border-radius: 3px;
    width: 200px;
    margin: 8px;
  }
  .linkText {
    width: 100%;
    padding: 3px 0;
  }
`;
