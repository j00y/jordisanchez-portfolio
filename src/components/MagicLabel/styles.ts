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
  font-size: ${(props: WordProps) => (props.size === "small" ? 4 : 10)}rem;
  line-height: ${(props: WordProps) => (props.size === "small" ? 3 : 8)}rem;
  letter-spacing: ${(props: WordProps) =>
    props.size === "small" ? -0.2 : -0.4}rem;
  font-weight: 700;
  transition: transform 0.1s ease-in-out;
  cursor: ${(props: WordProps) => (props.clickable ? "pointer" : "auto")};
  display: flex;
  overflow-x: hidden;
  width: fit-content;
  color: ${(props: WordProps) => (props.color ? props.color : "inherit")};
  opacity: ${(props: WordProps) => (props.opacityLabel ? 0.5 : 1)};
  transform: ${(props: WordProps) =>
    props.magicAnimation ? "translateX(2rem)" : "none"};
  padding: ${(props: WordProps) => props.padding};
  transition: ${(props: WordProps) =>
    `transform ${props.magicAnimation ? 0.3 : 0.1}s ease-in-out`};

  @media (max-width: 768px) {
    font-size: ${(props: WordProps) => (props.size === "small" ? 3 : 7)}rem;
    line-height: ${(props: WordProps) => (props.size === "small" ? 3 : 6)}rem;
    letter-spacing: ${(props: WordProps) =>
      props.size === "small" ? -0.2 : -0.3}rem;
  }
  @media (max-width: 480px) {
    font-size: ${(props: WordProps) => (props.size === "small" ? 2 : 5)}rem;
    line-height: ${(props: WordProps) => (props.size === "small" ? 2 : 4)}rem;
    letter-spacing: ${(props: WordProps) =>
      props.size === "small" ? -0.1 : -0.25}rem;
  }
`;

export const Animated = styled.div`
  transform: ${(props: AnimatedProps) =>
    props.enterAnimation === false ? "translateY(0rem)" : `translateY(10rem)`};
  animation: ${(props: AnimatedProps) =>
    props.enterAnimation === false
      ? "none"
      : `appearing .6s cubic-bezier(0.2, 0.6, 0.2, 1) forwards`};
  animation-delay: ${(props: AnimatedProps) =>
    props.animationDelay ? props.animationDelay : 0}s;
  @keyframes appearing {
    from {
      transform: translateY(10rem);
    }
    to {
      transform: translateY(0);
    }
  }
`;
