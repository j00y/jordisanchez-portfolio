import { useState } from "react";
import { MagicLabelProps } from "./MagicLabelProps";
import { Animated, Word } from "./styles";

export const MagicLabel = (props: MagicLabelProps) => {
  const {
    label,
    magicWord,
    onClick,
    labelColor,
    magicWordColor,
    showMagicWord,
    opacityLabel,
    padding,
    animation,
    animationDelay,
    size,
  } = props;
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  if (!hovered && !showMagicWord) {
    return (
      <Word
        onMouseEnter={handleMouseEnter}
        color={labelColor}
        opacityLabel={opacityLabel}
        onClick={onClick}
        size={size}
        clickable={!!onClick}
        padding={padding}
      >
        <Animated animationDelay={animationDelay} enterAnimation={animation}>
          {label}
        </Animated>
      </Word>
    );
  }

  return (
    <Word
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      clickable={!!onClick}
      color={magicWordColor}
      magicAnimation={true}
      size={size}
      padding={padding}
    >
      <Animated animationDelay={animationDelay} enterAnimation={animation}>
        {magicWord}
      </Animated>
    </Word>
  );
};
