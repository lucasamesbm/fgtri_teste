import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();

app.use(cors());
app.use(express.json());

function autenticar(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  if (!token) {
    return res.status(401).json({ erro: "Sem token" });
  }

  try {
    jwt.verify(token, "SEGREDO");
    next();
  } catch {
    return res.status(401).json({ erro: "Token inválido" });
  }
}

// LISTAR PROVAS
app.get("/provas", async (req, res) => {
  const result = await pool.query("SELECT * FROM provas");
  res.json(result.rows);
});

// CRIAR PROVA
app.post("/provas", autenticar,async (req, res) => {
  const { nome, data, local, descricao, distancias, link } = req.body;
  const distanciasFormatadas = Array.isArray(distancias)
    ? distancias.join(" / ")
    : distancias;

  const result = await pool.query(
    `INSERT INTO provas (nome, data, local, descricao, distancias, link)
     VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
    [nome, data, local, descricao, distanciasFormatadas, link]
  );

  res.json(result.rows[0]);
});

app.put("/provas/:id", autenticar, async (req, res) => {
  const { id } = req.params;
  const { nome, data, local, descricao, distancias, link } = req.body;
  const distanciasFormatadas = Array.isArray(distancias)
    ? distancias.join(" / ")
    : distancias;

  await pool.query(
    `UPDATE provas 
     SET nome=$1, data=$2, local=$3, descricao=$4, distancias=$5, link=$6
     WHERE id=$7`,
    [nome, data, local, descricao, distanciasFormatadas, link, id]
  );

  res.json({ mensagem: "Atualizado com sucesso" });
});

app.delete("/provas/:id", autenticar, async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM provas WHERE id=$1", [id]);

  res.json({ mensagem: "Deletado com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

const admin = {
  email: "admin@fgtri.com",
  senha: "$2b$10$dWISKTitwrxInGLpFUt98.hGckHNJk0iIoCzMFmWPo6dQXymp3D7u"
};

app.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  if (email !== admin.email) {
    return res.status(401).json({ erro: "Usuário inválido" });
  }

  const senhaValida = await bcrypt.compare(senha, admin.senha);

  if (!senhaValida) {
    return res.status(401).json({ erro: "Senha inválida" });
  }

  const token = jwt.sign({ email }, "SEGREDO", {
    expiresIn: "1d",
  });

  res.json({ token });
});
