// components/common/Button.tsx

import type {
  CSSProperties,
  ReactNode,
} from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;

  // Dynamic Styles
  bgColor?: string;
  textColor?: string;
  width?: string;
  padding?: string;
  margin?: string;
  radius?: string;
  fontSize?: string;

  // Animation
  hoverScale?: number;

  // Responsive
  mobileWidth?: string;

  style?: CSSProperties;
};

function Button({
  children,
  onClick,
  type = "button",
  disabled = false,

  bgColor = "#111827",
  textColor = "white",
  width = "auto",
  padding = "12px 18px",
   margin= "10px 0 0 20px" ,
  radius = "10px",
  fontSize = "16px",

  hoverScale = 1.05,

  mobileWidth = "100%",

  style = {},
}: ButtonProps) {

  return (

    <>
      {/* Responsive CSS */}

      <style>
        {`
          .custom-btn {
            border: none;
            cursor: pointer;
            transition: 0.3s;
            font-weight: 600;
          }

          .custom-btn:hover {
            transform: scale(${hoverScale});
            opacity: 0.9;
          }

          .custom-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          @media (max-width: 768px) {
            .custom-btn {
              width: ${mobileWidth} !important;
              margin: 10px 0 0 0 !important;
             
            }
          }
        `}
      </style>

      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className="custom-btn"
        style={{
          background: bgColor,
          color: textColor,
          width,
          padding,
          margin,
          borderRadius: radius,
          fontSize,
          ...style,
        }}
      >
        {children}
      </button>
    </>
  );
}

export default Button;