import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const user = location.state?.user;

  return (
    <Container className="mt-5">
      {user ? (
        <>
          <h2>Bem-vindo, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <Button variant="secondary" onClick={() => navigate("/")}>
            Sair
          </Button>
        </>
      ) : (
        <>
          <h2>Nenhum usuário logado.</h2>
          <Button variant="primary" onClick={() => navigate("/")}>
            Voltar ao login
          </Button>
        </>
      )}
    </Container>
  );
};

export default Home;
