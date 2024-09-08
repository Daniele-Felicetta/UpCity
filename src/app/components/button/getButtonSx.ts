type GetButtonSxParams = {
  variant: "normal" | "large" | "big";
  hover: boolean;
  disabled: boolean;
  color: "blue" | "yellow" | "red";
}

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getButtonSx = ({
    variant, 
    hover, 
    disabled, 
    color,
  }:GetButtonSxParams) => {
    let baseName = "";

    if (disabled) {
      if (variant === "large") return "/images/Button_Disable_3Slides.png";
      if (variant === "big") return "/images/Button_Disable_9Slides.png";
      return "/images/Button_Disable.png";
    }

    baseName = `Button_${capitalize(color)}`;

    if (hover) {
      baseName += "_Pressed";
    }

    if (variant === "large") {
      baseName += "_3Slides";
    }

    if (variant === "big") {
      baseName += "_9Slides";
    }

    if (!hover && !disabled) {
      baseName = `Button_Hover`;

      if (variant === "large") {
        baseName += "_3Slides";
      }

      if (variant === "big") {
        baseName += "_9Slides";
      }
    }

    return `/images/${baseName}.png`;
  };