import React from "react";
import styled from "styled-components";

function MultithemeMenu({ theme }) {
  return (
    <Container>
      <a onClick={() => theme("livesport")}>
        <span>LIVE SPORTS</span>
      </a>

      <a onClick={() => theme("breakingnews")}>
        <span>BREAKING NEWS</span>
      </a>

      <a onClick={() => theme("liveevents")}>
        <span>LIVE EVENTS</span>
      </a>
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100px;
  justify-content: flex-start;
  cursor: pointer;
  width: 50%;
  border: 1px dashed yellow;
  margin-right: auto;
  margin-left: 50px;
  z-index: 5;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      letter-spacing: 0px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      @media screen and (max-width: 800px) {
        font-size: 10px;
      }
      @media screen and (min-width: 800px) and (max-width: 1500px) {
        font-size: 20px;
      }
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

export default MultithemeMenu;
