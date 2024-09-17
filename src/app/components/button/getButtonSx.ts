type GetButtonSxParams = {
  readonly variant: "normal" | "large" | "big";
  readonly hover: boolean;
  readonly disabled: boolean;
  readonly color: "blue" | "yellow" | "red";
};

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const getButtonSx = ({
  variant,
  hover,
  disabled,
  color,
}: GetButtonSxParams): string => {
  let baseName = "";

  // Gestione del bottone disabilitato
  if (disabled) {
    if (variant === "large") return "/images/button/Button_Disable_3Slides.png";
    if (variant === "big") return "/images/button/Button_Disable_9Slides.png";
    return "/images/button/Button_Disable.png"; // Path corretto
  }

  // Bottone non disabilitato
  baseName = `Button_`;

  if (hover) {
    baseName += "_Pressed";
  }

  if (variant === "large") {
    baseName += "_3Slides";
  }

  if (variant === "big") {
    baseName += "_9Slides";
  }

  // Se il bottone non è né hover né disabilitato, ritorniamo l'immagine di hover.
  if (!hover && !disabled) {
    baseName = `Button_`;

    if (variant === "large") {
      baseName += "_3Slides";
    }

    if (variant === "big") {
      baseName += "_9Slides";
    }
  }

  return `/images/button/${baseName}.png`;
};