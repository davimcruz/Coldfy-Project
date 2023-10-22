import React from "react";
import { useMediaQuery } from "react-responsive";

const Mobile = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <>
      {isMobile && (
        <div className="mobile-text">
          <h2>A versão para Mobile está sendo desenvolvida!</h2>
          <h3>Acesse pelo Computador</h3>
        </div>
      )}
    </>
  );
};

export default Mobile;
