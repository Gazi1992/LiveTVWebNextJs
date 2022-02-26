import styled from "styled-components";
import Header from "../Header";

export default function HomeHeader({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
