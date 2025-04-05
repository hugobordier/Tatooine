const CurvedDivider = ({
  position = "bottom",
  color = "#000",
  inverted = false,
  height = 50,
}) => {
  // SVG paths for different curve styles
  const curves = {
    wave: inverted
      ? "M0,0 C30,${height/2} 70,0 100,${height/2} L100,0 L0,0 Z"
      : "M0,${height} C30,${height/2} 70,${height} 100,${height/2} L100,${height} L0,${height} Z",

    simple: inverted
      ? "M0,0 L0,0 C50,${height} 50,${height} 100,0 L100,0 Z"
      : "M0,${height} L0,${height} C50,0 50,0 100,${height} L100,${height} Z",

    pointed: inverted
      ? "M0,0 L50,${height} L100,0 Z"
      : "M0,${height} L50,0 L100,${height} Z",

    rounded: inverted
      ? "M0,0 Q50,${height} 100,0"
      : "M0,${height} Q50,0 100,${height}",
  };

  // Replace height variable in SVG path strings
  const getPath = (pathTemplate: any) => {
    return pathTemplate.replace(/\${height}/g, height);
  };

  return (
    <div
      className="curved-divider"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        [position]: 0,
        height: `${height}px`,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 100 ${height}`}
        preserveAspectRatio="none"
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <path d={getPath(curves.rounded)} fill={color} />
      </svg>
    </div>
  );
};

export default CurvedDivider;
