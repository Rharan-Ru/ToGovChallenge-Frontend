import React from "react";

const NotFound: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "100px", fontWeight: "bold" }}>404</h1>
      <h3>Página não encontrada</h3>
      <p>Desculpe, a página que você está procurando não existe.</p>
    </div>
  );
};

export default NotFound;
