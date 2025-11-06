import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import Products from "../components/Products";
import Modal from "../components/Modal";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { user, fetchUser, showModal } = useContext(AppContext)

  useEffect(()=>{
    fetchUser(token)
  }, [])

  return (
    <div className="p-3">
      {user ? (
        <>
          <h5>Bem-vindo, {user.firstName}!</h5>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <>
          <h2>Nenhum usuário logado.</h2>
          <Button variant="primary" onClick={() => navigate("/")}>
            Voltar ao login
          </Button>
        </>
      )}

      <Products />
      {showModal && <Modal />}
    </div>
  );
};

export default Home;
