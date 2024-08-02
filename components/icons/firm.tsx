// components/icons/firm.tsx
import type {IconSvgProps} from "@/types";
import React from "react";

export const FirmIcon: React.FC<IconSvgProps> = ({size = 32, width, height, ...props}) => (
  <img
    src="/images/logo.png"
    alt="Trai Logo"
    width={size || width}
    height={size || height}
    {...props}
  />
);
