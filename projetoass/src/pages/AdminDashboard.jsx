import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [provas, setProvas] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    data: "",
    local: "",
    descricao: "",
    distancias: "",
    link: "",
  });

  const resetForm = () => {
    setEditingId(null);
    setForm({
      nome: "",
      data: "",
      local: "",
      descricao: "",
      distancias: "",
      link: "",
    });
  };

  const authHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: token } : {};
  };

  const carregarProvas = useCallback(async () => {
    const res = await fetch("http://localhost:3000/provas");
    const data = await res.json();
    setProvas(data);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/admin");
      return;
    }

    carregarProvas();
  }, [navigate, carregarProvas]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      distancias: form.distancias
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    const url = editingId
      ? `http://localhost:3000/provas/${editingId}`
      : "http://localhost:3000/provas";

    const method = editingId ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...authHeaders(),
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Não foi possível salvar a prova");
      return;
    }

    resetForm();
    carregarProvas();
  };

  const deletarProva = async (id) => {
    const res = await fetch(`http://localhost:3000/provas/${id}`, {
      method: "DELETE",
      headers: {
        ...authHeaders(),
      },
    });

    if (!res.ok) {
      alert("Não foi possível deletar a prova");
      return;
    }

    carregarProvas();
  };

  const editarProva = (prova) => {
    setEditingId(prova.id);
    setForm({
      nome: prova.nome || "",
      data: prova.data || "",
      local: prova.local || "",
      descricao: prova.descricao || "",
      distancias: prova.distancias
        ? String(prova.distancias).split(" / ").join(", ")
        : "",
      link: prova.link || "",
    });
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Painel Admin</h1>

      <form onSubmit={handleSubmit} className="grid gap-3 mb-10">
        <input
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        <input
          placeholder="Data"
          value={form.data}
          onChange={(e) => setForm({ ...form, data: e.target.value })}
        />
        <input
          placeholder="Local"
          value={form.local}
          onChange={(e) => setForm({ ...form, local: e.target.value })}
        />
        <input
          placeholder="Descrição"
          value={form.descricao}
          onChange={(e) => setForm({ ...form, descricao: e.target.value })}
        />
        <input
          placeholder="Distâncias (separadas por vírgula)"
          value={form.distancias}
          onChange={(e) => setForm({ ...form, distancias: e.target.value })}
        />
        <input
          placeholder="Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />

        <div className="flex gap-3">
          <button className="bg-black text-white p-2 rounded">
            {editingId ? "Atualizar Prova" : "Criar Prova"}
          </button>

          {editingId && (
            <button
              type="button"
              className="border border-gray-400 p-2 rounded"
              onClick={resetForm}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {provas.map((prova) => (
        <div key={prova.id} className="border p-4 mb-2 rounded">
          <strong>{prova.nome}</strong>
          <button
            onClick={() => editarProva(prova)}
            className="ml-4 text-blue-600"
          >
            Editar
          </button>
          <button
            onClick={() => deletarProva(prova.id)}
            className="ml-4 text-red-500"
          >
            Deletar
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
