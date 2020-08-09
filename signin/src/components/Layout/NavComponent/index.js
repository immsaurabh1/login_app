import React from "react";
import ImgComponent from "../../Base/ImgComponent";
export default function() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flexStart",
        alignItems: "center",
        padding: "16px",
        width: "100%",
        boxShadow: "0 5px 5px -4px #b4b4b4"
      }}
    >
      <ImgComponent
        alt={"Healthifyme"}
        src={`https://s3.ap-south-1.amazonaws.com/tpng-images/random/original/6be52f0b-56bf-4fdc-abd3-0bec9e58610c.png`}
      />
      <span
        style={{
          fontSize: "16px",
          borderLeft: "1px solid #b4b4b4",
          paddingLeft: "8px"
        }}
      >
        Accounts
      </span>
    </div>
  );
}
