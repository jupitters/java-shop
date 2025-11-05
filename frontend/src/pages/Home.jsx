import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user, fetchUser } = useContext(AppContext)

  useEffect(()=>{
    fetchUser(token)
  }, [])

  return (
    <Container className="mt-5">
      {user ? (
        <>
          <h2>Bem-vindo, {user.firstName}!</h2>
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
