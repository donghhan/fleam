import styled from "styled-components";
import { breakpoint } from "../styles/breakpoint";
import HeroSection from "../components/home/HeroSection";

const Wrapper = styled.div`
  padding: 10% 5%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function HomePage() {
  return (
    <Wrapper>
      <HeroSection />
    </Wrapper>
  );
}
