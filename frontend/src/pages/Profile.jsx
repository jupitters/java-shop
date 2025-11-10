import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useContext(AppContext);
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (userId) => {
    try {
      const res = await axios.put(
        `http://localhost:9191/api/v1/users/user/${userId}`,
        updatedUser
      );
      setEditing(false);
      setMessage("Perfil atualizado!");
    } catch (err) {
      setMessage("Erro ao atualizar perfil: ", err);
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm("Tem certeza que deseja excluir sua conta?")) return;
    try {
      await axios.delete(`http://localhost:9191/api/v1/users/user/${userId}`);
      setMessage("Conta excluída com sucesso!");
      logout();
      navigate("/login");
    } catch (err) {
      setMessage("Erro ao excluir conta: ", err);
    }
  };

  if (!user) return <p>{message || "Carregando perfil..."}</p>;

  return (
    <div style={styles.container}>
      <h2>Perfil de {user.firstName} {user.lastName}</h2>

      {editing ? (
        <div style={styles.form}>
          <input placeholder={user.firstName} name="firstName" value={updatedUser.firstName} onChange={handleChange} />
          <input placeholder={user.lastName} name="lastName" value={updatedUser.lastName} onChange={handleChange} />
          <input placeholder={user.email} name="email" value={updatedUser.email} onChange={handleChange} />
          <input placeholder={user.address} name="address" value={updatedUser.address || ""} onChange={handleChange} />
          <Button onClick={handleUpdate(user.id)}>Salvar</Button>
          <Button onClick={() => setEditing(false)}>Cancelar</Button>
        </div>
      ) : (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Endereço:</strong> {user.address || "Não informado"}</p>

          <Button onClick={() => setEditing(true)} >Editar</Button>
          <Button onClick={() => handleDelete(user.id)} style={{backgroundColor: "red"}}>Excluir Conta</Button>
        </>
      )}

      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "3rem auto",
    padding: "2rem",
    border: "1px solid #ddd",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  deleteBtn: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "1rem",
  },
};

export default Profile;
