import { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const productUrl = "http://localhost:9191/api/v1/products/add";
  const imageUrl = "http://localhost:9191/api/v1/images/upload";
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    inventory: "",
    description: "",
    category: "",
  });
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Atualiza campos de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Atualiza arquivos selecionados
  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // 1️⃣ Cria o produto
      const { data } = await axios.post(productUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const productId = data.data.id; // pega o ID retornado
      setMessage("✅ Produto criado! Agora enviando imagens...");

      // 2️⃣ Envia as imagens, se houver
      if (files.length > 0) {
        const imageFormData = new FormData();
        for (let i = 0; i < files.length; i++) {
          imageFormData.append("files", files[i]);
        }
        imageFormData.append("productId", productId);

        await axios.post(imageUrl, imageFormData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });
        setMessage("✅ Produto e imagens adicionados com sucesso!");
      } else {
        setMessage("✅ Produto adicionado (sem imagens).");
      }

      // Limpa o formulário
      setFormData({
        name: "",
        brand: "",
        price: "",
        inventory: "",
        description: "",
        category: "",
      });
      setFiles([]);
    } catch (error) {
      console.error(error);
      setMessage("❌ Erro ao adicionar produto ou imagens.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={styles.container}>
      <h2>Adicionar Novo Produto com Imagem</h2>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Nome do produto"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="brand"
          placeholder="Marca"
          value={formData.brand}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Preço"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="inventory"
          placeholder="Estoque"
          value={formData.inventory}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Categoria (ex: Electronics)"
          value={formData.category}
          onChange={handleChange}
          required
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Adicionar Produto"}
        </button>
      </form>

      {message && <p>{message}</p>}
    </section>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "2rem auto",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fafafa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  },
};

export default AddProductForm;
