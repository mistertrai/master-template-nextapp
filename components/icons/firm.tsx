// components/icons/firm.tsx
import React from "react";

interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: number;
}

export const FirmIcon: React.FC<ImgProps> = ({ size = 32, width, height, ...props }) => (
  <img
    src="/images/logo.png"
    alt="Trai Logo"
    width={size || width}
    height={size || height}
    {...props}
  />
);
