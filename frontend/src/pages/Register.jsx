import { useState } from "react";
import axios from "axios";

const Register = () => {
  const apiUrl = "http://localhost:9191/api/v1/users/user";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(apiUrl, formData);
      setMessage(response.data.response || "Usuário registrado com sucesso!");
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.response || "Erro ao registrar usuário.");
      } else {
        setMessage("Erro de conexão com o servidor.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <h2>Registrar Usuário</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="firstName"
          placeholder="Primeiro nome"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Sobrenome"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Registrar
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
      <p className="mt-4">Voltar a tela de <a href="/login">login.</a></p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "3rem auto",
    padding: "2rem",
    border: "1px solid #ddd",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.8rem",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  message: {
    marginTop: "1rem",
    color: "#333",
    fontWeight: "500",
  },
};

export default Register;
