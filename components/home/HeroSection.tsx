import styled from "styled-components";
import { breakpoint } from "../../styles/breakpoint";
import Button from "../common/Button";

const HeroSectionWrapper = styled.section`
  width: 100%;
  height: 100%;
  border: 0.2em solid ${(props) => props.theme.color.black};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const LeftGridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  border-right: 0.2em solid ${(props) => props.theme.color.black};

  .text-area {
    padding: 5%;

    h1 {
      font-size: 12vw;
      text-transform: uppercase;
      font-weight: 500;
    }

    span {
      text-transform: uppercase;
      font-size: 1.5rem;
    }
  }

  .blank {
    border-top: 0.2em solid ${(props) => props.theme.color.black};
  }
`;

const RightGridWrapper = styled.div``;

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <LeftGridWrapper>
        <div className="text-area">
          <h1>fleam</h1>
          <span className="text">
            while you were dividing the world into black and white, i just took
            and did the right stuff for my people.
          </span>
          <Button to="/" text="shop now" buttonType="colored" />
        </div>
        <div className="blank"></div>
      </LeftGridWrapper>
      <RightGridWrapper></RightGridWrapper>
    </HeroSectionWrapper>
  );
}
