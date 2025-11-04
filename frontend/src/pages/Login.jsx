import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        const response = await axios.post("http://localhost:9191/api/v1/auth/login", {email: email, password: senha,} )
        const token = response.data.data.token;
        const userId = response.data.data.userId;
        
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);

        navigate("/", { replace: true });
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <Container className="mt-5" style={{boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", padding: "30px", backgroundColor: "#fff", maxWidth: "400px" }}>
      <h3 className="text-center mb-3">Login</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Entrar
        </Button>
      </Form>
      <p className="mt-3">Não possui cadastro? Registre-se <a href="/register">aqui!</a></p>
    </Container>
  );
};

export default Login;
