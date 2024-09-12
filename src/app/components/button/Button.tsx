import { Button as MuiButton, ButtonBaseProps, ButtonBase } from "@mui/material";
import React, { useMemo, useState } from "react";
import { getButtonSx } from "./getButtonSx";

type ButtonProps = {
  readonly variant?: "normal" | "large" | "big";
  readonly hover?: boolean;
  readonly disabled?: boolean;
  readonly color?: "blue" | "yellow" | "red";
  readonly width?: number | string;
  readonly height?: number | string;
} & ButtonBaseProps;

export default function Button({ variant = "normal", hover, disabled, color, width, height }: ButtonProps) {
  // Usa useMemo per memorizzare il valore di imageSrc
  console.log("Button render");
  const [buttonHover, setButtonHover] = useState(false);
  const imageSrc = ({ variant, hover, disabled, color }:ButtonProps) => getButtonSx({
    variant: variant ?? "normal",
    hover: hover ?? false,
    disabled: disabled ?? false,
    color: color ?? "blue",
  })
  console.log(imageSrc({ variant, hover: buttonHover, disabled, color }))
  return (
    <ButtonBase
      onMouseEnter={() => setButtonHover(true)}
      onMouseLeave={() => setButtonHover(false)}
      sx={{
        backgroundImage: `url(${imageSrc({ variant, hover: buttonHover, disabled, color })})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        transformOrigin: "center",
        backgroundPosition: "center",
        width: width ?? 50,
        height: width ?? 50,
      }}
      disabled={disabled}
    >
    </ButtonBase>
  );
}