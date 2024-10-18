import React from "react";
import { BallTriangle } from "react-loader-spinner";
import { StyledLoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      )
    </StyledLoaderWrapper>
  );
};

export default Loader;
