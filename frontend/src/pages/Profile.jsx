import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

const Profile = ({ userId }) => {
  const { user } = useContext(AppContext);
  const [editing, setEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
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

  

  if (!user) return <p>{message || "Carregando perfil..."}</p>;

  return (
    <div style={styles.container}>
      <h2>Perfil de {user.firstName} {user.lastName}</h2>

      {editing ? (
        <div style={styles.form}>
          <input name="firstName" value={updatedUser.firstName} onChange={handleChange} />
          <input name="lastName" value={updatedUser.lastName} onChange={handleChange} />
          <input name="email" value={updatedUser.email} onChange={handleChange} />
          <input name="address" value={updatedUser.address || ""} onChange={handleChange} />
          <button onClick={handleUpdate}>Salvar</button>
          <button onClick={() => setEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Endereço:</strong> {user.address || "Não informado"}</p>

          <button onClick={() => setEditing(true)}>Editar</button>
          <button onClick={handleDelete} style={styles.deleteBtn}>Excluir Conta</button>
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
