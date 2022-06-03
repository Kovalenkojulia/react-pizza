import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="366" y="218" rx="0" ry="0" width="13" height="6" />
    <rect x="147" y="223" rx="0" ry="0" width="2" height="8" />
    <circle cx="130" cy="99" r="92" />
    <rect x="3" y="209" rx="10" ry="10" width="269" height="25" />
    <rect x="0" y="260" rx="10" ry="10" width="274" height="101" />
    <rect x="108" y="388" rx="23" ry="23" width="152" height="45" />
    <rect x="0" y="397" rx="10" ry="10" width="95" height="30" />
  </ContentLoader>
);

export default Skeleton;
