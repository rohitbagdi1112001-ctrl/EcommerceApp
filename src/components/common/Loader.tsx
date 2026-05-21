// components/common/Loader.tsx

type LoaderProps = {

  // Dynamic Parameters
  size?: string;
  borderSize?: string;
  color?: string;
  speed?: string;
  fullScreen?: boolean;
  text?: string;
};

function Loader({

  size = "50px",
  borderSize = "5px",
  color = "#111827",
  speed = "0.8s",
  fullScreen = false,
  text = "Loading...",

}: LoaderProps) {

  return (

    <>
      {/* Animation */}

      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          .loader-spinner {
            animation: spin ${speed} linear infinite;
          }

          @media (max-width: 768px) {

            .loader-text {
              font-size: 14px;
            }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",

          minHeight: fullScreen
            ? "100vh"
            : "200px",

          width: "100%",
          padding: "20px",
        }}
      >

        {/* Spinner */}

        <div
          className="loader-spinner"
          style={{
            width: size,
            height: size,

            border: `${borderSize} solid #e5e7eb`,
            borderTop: `${borderSize} solid ${color}`,

            borderRadius: "50%",
          }}
        />

        {/* Text */}

        <p
          className="loader-text"
          style={{
            marginTop: "15px",
            fontWeight: 600,
            color,
            textAlign: "center",
          }}
        >
          {text}
        </p>

      </div>
    </>
  );
}

export default Loader;