import styled from "styled-components";
import { MagicLabelProps } from "./MagicLabelProps";

interface WordProps {
  color?: MagicLabelProps["labelColor"] | MagicLabelProps["magicWordColor"];
  opacityLabel?: MagicLabelProps["opacityLabel"];
  magicAnimation?: boolean;
  enterAnimation?: MagicLabelProps["animation"];
  animationDelay?: MagicLabelProps["animationDelay"];
  size?: MagicLabelProps["size"];
  padding?: MagicLabelProps["padding"];
  clickable?: boolean;
}

interface AnimatedProps {
  enterAnimation?: MagicLabelProps["animation"];
  animationDelay?: MagicLabelProps["animationDelay"];
}

export const Word = styled.div`
  font-size: ${(props: WordProps) => (props.size === "small" ? 4 : 7)}rem;
  line-height: ${(props: WordProps) => (props.size === "small" ? 3 : 6)}rem;
  font-weight: 700;
  transition: transform 0.1s ease-in-out;
  cursor: ${(props: WordProps) => (props.clickable ? "pointer" : "auto")};
  letter-spacing: ${(props: WordProps) =>
    props.size === "small" ? -0.2 : -0.4}rem;
  display: flex;
  overflow: hidden;
  width: fit-content;
  padding-right: 7rem;
  color: ${(props: WordProps) => (props.color ? props.color : "inherit")};
  opacity: ${(props: WordProps) => (props.opacityLabel ? 0.5 : 1)};
  transform: ${(props: WordProps) =>
    props.magicAnimation ? "translateX(2rem)" : "none"};
  padding: ${(props: WordProps) => props.padding};
  transition: ${(props: WordProps) =>
    `transform ${props.magicAnimation ? 0.3 : 0.1}s ease-in-out`};

  @media (max-width: 768px) {
    font-size: ${(props: WordProps) => (props.size === "small" ? 3 : 5)}rem;
    line-height: ${(props: WordProps) => (props.size === "small" ? 3 : 4)}rem;
    letter-spacing: ${(props: WordProps) =>
      props.size === "small" ? -0.2 : -0.3}rem;
  }
  @media (max-width: 480px) {
    font-size: ${(props: WordProps) => (props.size === "small" ? 2 : 4)}rem;
    line-height: ${(props: WordProps) => (props.size === "small" ? 2 : 3)}rem;
    letter-spacing: ${(props: WordProps) =>
      props.size === "small" ? -0.1 : -0.25}rem;
  }
`;

export const Animated = styled.div`
  transform: ${(props: AnimatedProps) =>
    props.enterAnimation === false ? "translateY(0rem)" : `translateY(8rem)`};
  animation: ${(props: AnimatedProps) =>
    props.enterAnimation === false
      ? "none"
      : `appearing 0.5s ease-in-out forwards`};
  animation-delay: ${(props: AnimatedProps) =>
    props.animationDelay ? props.animationDelay : 0}s;
  @keyframes appearing {
    from {
      transform: translateY(8rem);
    }
    to {
      transform: translateY(0);
    }
  }
`;
