import { Box, ButtonBaseProps } from "@mui/material";
import Image from "next/image";
import React from "react"
import { getButtonSx } from "./getButtonSx";

type ButtonProps = {
  readonly variant?: "normal" | "large" | "big";
  readonly hover?: boolean;
  readonly disabled?: boolean;
  readonly color?: "blue" | "yellow" | "red";
} & ButtonBaseProps

export default function Button({ variant = "normal", hover, disabled, color }: ButtonProps) {
  const imageSrc = getButtonSx({
    variant,
    hover: hover ?? false,
    disabled: disabled ?? false,
    color: color ?? "blue"
  });

  return (
    <Box
      position="relative"
    >
      <Image
        src={imageSrc}
        alt={`${variant} button`}
        width={variant === "big" ? 270 : 90}
        height={variant === "big" ? 90 : 30}
      />
    </Box>
  );
}