import { motion } from "framer-motion";
import { useState } from "react";

const fadeInAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const formAnimation = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
};

function CadastroFederado() {
  const [formData, setFormData] = useState({
    renovacao: "sim",
    nome: "",
    sexo: "",
    email: "",
    nascimento: "",
    rua: "",
    bairro: "",
    cidade: "",
    estado: "",
    cep: "",
    pais: "Brasil",
    celular: "",
    telefone: "",
    cpf: "",
    altura: "",
    peso: "",
    tamanhoCamisa: "",
    calcado: "",
    tipoSanguineo: "",
    nomePai: "",
    nomeMae: "",
    equipe: "",
    patrocinador: "",
    responsavel: "",
    formaPagamento: "",
    especie: "",
    valorDeposito: "",
    dataDeposito: "",
    comprovante: null,
  });

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setErro("");

    // Validar campos obrigatórios
    const camposObrigatorios = [
      "nome",
      "sexo",
      "email",
      "nascimento",
      "celular",
      "cpf",
      "altura",
      "peso",
      "tamanhoCamisa",
      "calcado",
      "formaPagamento",
    ];

    for (let campo of camposObrigatorios) {
      if (!formData[campo]) {
        alert(`O campo ${campo} é obrigatório!`);
        setEnviando(false);
        return;
      }
    }

    // Preparar dados para envio
    const formDataToSend = new FormData();

    // Adicionar todos os campos ao FormData
    Object.keys(formData).forEach((key) => {
      if (key === "comprovante" && formData[key]) {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key] || "");
      }
    });

    // Adicionar campo de formulário para identificar no Formspree
    formDataToSend.append(
      "_subject",
      `Novo Cadastro Federado - ${formData.nome}`,
    );

    try {
      // Substitua esta URL pela sua URL do Formspree
      const response = await fetch("https://formspree.io/f/maqdrzlv", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setEnviado(true);
        // Limpar formulário após envio bem-sucedido
        setFormData({
          renovacao: "sim",
          nome: "",
          sexo: "",
          email: "",
          nascimento: "",
          rua: "",
          bairro: "",
          cidade: "",
          estado: "",
          cep: "",
          pais: "Brasil",
          celular: "",
          telefone: "",
          cpf: "",
          altura: "",
          peso: "",
          tamanhoCamisa: "",
          calcado: "",
          tipoSanguineo: "",
          nomePai: "",
          nomeMae: "",
          equipe: "",
          patrocinador: "",
          responsavel: "",
          formaPagamento: "",
          especie: "",
          valorDeposito: "",
          dataDeposito: "",
          comprovante: null,
        });
      } else {
        const data = await response.json();
        setErro(data.error || "Erro ao enviar formulário. Tente novamente.");
      }
    } catch (error) {
      setErro("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="w-full px-4 py-12 bg-gray-100 md:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl font-semibold tracking-widest mb-12 md:mb-16 lg:text-3xl text-black">
          SEJA UM ATLETA FEDERADO!
        </h1>

        {enviado ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-xl p-8 text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Formulário Enviado com Sucesso!
            </h2>
            <p className="text-gray-600 mb-6">
              Seu cadastro de atleta federado foi recebido. Em breve entraremos
              em contato pelo e-mail {formData.email}.
            </p>
            <button
              onClick={() => setEnviado(false)}
              className="bg-secondary text-white px-6 py-2 rounded-lg hover:bg-hovers transition-colors"
            >
              Fazer Novo Cadastro
            </button>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Coluna da Esquerda - Texto Informativo */}
            <motion.div
              variants={fadeInAnimation}
              initial="hidden"
              animate="show"
              className="lg:w-1/2 bg-white rounded-xl shadow-xl shadow-black/10 p-6 md:p-8 border border-gray-200"
            >
              <div className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-4">
                <p>
                  A Federação Gaúcha de Triathlon coordena no Estado do Rio
                  Grande do Sul o esporte TRIATHLON e todas suas variações,
                  tratando também dos assuntos pertinentes à legislação do
                  esporte e dos atletas.
                </p>

                <p>
                  Ao federar-se à Federação Gaúcha de Triathlon, você estará
                  contribuindo com o Triathlon Gaúcho. A Federação existe para
                  incentivar e desenvolver o esporte em nosso Estado,
                  regulamentando a atividade de acordo com a orientação da
                  Confederação Brasileira de Triathlon e legislação em vigor,
                  onde todos participam sob a mesma regulamentação, assim
                  podendo o atleta buscar os seus melhores resultados de acordo
                  com seus objetivos.
                </p>

                <p>
                  Ao federar-se, sua motivação será participar dos Campeonatos
                  Estaduais de Triathlon, Triathlon Longa Distância, Duathlon,
                  Aquathlon e Cross Triathlon, e de suas provas. Seja qual for
                  seu resultado, você terá a certeza da satisfação da conquista
                  pessoal, da melhoria do condicionamento físico, do incremento
                  no relacionamento social, conhecendo novas pessoas e novos
                  lugares, assim combatendo o "estresse" do dia-a-dia, se
                  tornando uma pessoa mais saudável através da atividade física.
                  Ou sendo um atleta de alto rendimento superando seus limites e
                  tentando conquistar títulos nacionais e internacionais.
                </p>

                <p>
                  Para incentivar sua Federação, somente pontuam nos Campeonatos
                  Estaduais os atletas federados. Regionalmente permitimos a
                  participação de atletas não filiados nas provas, pois todos
                  são sempre bem-vindos. Lembramos que apenas os atletas
                  federados na Federação e na Confederação disputam os títulos
                  oficiais concedidos, podendo participar dos Campeonatos
                  Brasileiros e Competições Internacionais.
                </p>

                <p>
                  Aconselhamos a todos que procurem se federar por uma Equipe
                  que seja filiada à Federação, ou se desejarem, se reúnam e
                  organizem uma Equipe e a filiem à Federação. Assim, todos
                  terão as vantagens de atleta federado por Equipe.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                  <p className="font-semibold">
                    1°) Todo atleta para ter direito a inscrição de atleta
                    federado e somar pontos no Campeonato Estadual, deverá estar
                    com sua RENOVAÇÃO, ou FEDERAÇÃO e taxa da Confederação
                    Brasileira de Triathlon, em dia até a data de inscrição na
                    prova, somando os pontos somente a partir da data de sua
                    federação ou renovação.
                  </p>
                </div>

                <p className="text-sm italic">
                  OBSERVAÇÃO: A renovação é anual valendo para todos os
                  Campeonatos Estaduais: Triathlon, Triathlon Longa Distância,
                  Cross Triathlon, Duathlon, Aquathlon e Ranking.
                </p>

                <h3 className="text-lg font-bold text-secondary mt-6">
                  2°) PROCEDIMENTOS:
                </h3>
                <ul className="list-decimal pl-5 space-y-2">
                  <li>Preencher a ficha de renovação ou federação ao lado.</li>
                  <li>
                    Atletas que farão a renovação anual ou federação por Equipes
                    filiadas à Federação deverão preencher a ficha ao lado
                    colocando o nome da Equipe.
                  </li>
                  <li>
                    Atletas Avulsos (sem Equipe) deverão preencher a ficha ao
                    lado colocando em Equipe "AVULSO".
                  </li>
                  <li>
                    Pagamento da taxa devida: Atletas de 12 a 17 anos e PCD
                    estão isentos da taxa de Federação, tendo que preencher a
                    ficha ao lado, colocando no comprovante de pagamento cópia
                    da carteira de identidade.
                  </li>
                </ul>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="font-semibold">Federação por Equipe:</span>{" "}
                    R$180,00
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="font-semibold">Federação Avulso:</span>{" "}
                    R$180,00
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="font-semibold">Renovação por Equipe:</span>{" "}
                    R$180,00
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="font-semibold">Renovação Avulso:</span>{" "}
                    R$180,00
                  </div>
                </div>

                <p className="text-green-700 font-semibold">
                  Atletas acima de 60 anos – 50% de desconto no valor do
                  Registro Federativo (conforme art. 4° e 5° do Regimento de
                  Taxas).
                </p>

                <div className="bg-secondary/10 p-4 rounded-lg border border-secondary">
                  <h4 className="font-bold text-secondary">
                    PROCEDIMENTOS PARA PAGAMENTO:
                  </h4>
                  <p className="mt-2">
                    Faça o pagamento da taxa devida conforme orientação abaixo:
                  </p>
                  <p className="font-mono bg-white p-2 rounded mt-2">
                    PIX: fgtri@fgtri.org.br – FEDERAÇÃO GAÚCHA DE TRIATHLON
                  </p>
                  <p className="mt-2">Ou depósito bancário:</p>
                  <p>
                    Banco: C6 BANCO
                    <br />
                    Agência: 0001
                    <br />
                    Conta: 36099513-6
                    <br />
                    CNPJ: 97.002.364/0001-42
                  </p>
                  <p className="font-semibold text-red-600 mt-2">
                    ATENÇÃO: primeiro faça o PIX ou depósito e depois preencha a
                    ficha de inscrição, que deve conter os dados do depósito
                    (para PIX é obrigatório o horário que foi realizado).
                  </p>
                </div>

                <p className="font-semibold text-red-600 mt-4">
                  ATENÇÃO: somente será aceita a RENOVAÇÃO ou FEDERAÇÃO,
                  mediante o envio da ficha de INSCRIÇÃO DE ATLETA, preenchida,
                  com todas as taxas devidas pagas.
                </p>
              </div>
            </motion.div>

            {/* Coluna da Direita - Formulário */}
            <motion.div
              variants={formAnimation}
              initial="hidden"
              animate="show"
              className="lg:w-1/2 bg-white rounded-xl shadow-xl shadow-black/10 p-6 md:p-8 border border-gray-200"
            >
              <h2 className="text-xl md:text-2xl font-bold text-secondary mb-6 text-center">
                FORMULÁRIO CADASTRO FEDERADO
              </h2>

              {erro && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {erro}
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                encType="multipart/form-data"
              >
                {/* Dados CBTri/FGTri */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">
                    CBTri / FGTri
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Renovação (obrigatório)
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="renovacao"
                          value="sim"
                          checked={formData.renovacao === "sim"}
                          onChange={handleChange}
                          className="mr-2"
                          required
                        />{" "}
                        Sim
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="renovacao"
                          value="nao"
                          checked={formData.renovacao === "nao"}
                          onChange={handleChange}
                          className="mr-2"
                        />{" "}
                        Não
                      </label>
                    </div>
                  </div>
                </div>

                {/* Dados Pessoais */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome (obrigatório)
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Sexo (obrigatório)
                    </label>
                    <select
                      name="sexo"
                      value={formData.sexo}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                      <option value="">Selecione</option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail (obrigatório)
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Data de Nascimento (obrigatório)
                    </label>
                    <input
                      type="date"
                      name="nascimento"
                      value={formData.nascimento}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Endereço */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">
                    Endereço
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rua
                      </label>
                      <input
                        type="text"
                        name="rua"
                        value={formData.rua}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bairro e Complemento
                      </label>
                      <input
                        type="text"
                        name="bairro"
                        value={formData.bairro}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cidade
                      </label>
                      <input
                        type="text"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Estado
                      </label>
                      <input
                        type="text"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Código Postal
                      </label>
                      <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        País
                      </label>
                      <input
                        type="text"
                        name="pais"
                        value={formData.pais}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                </div>

                {/* Contato */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Celular (obrigatório)
                    </label>
                    <input
                      type="tel"
                      name="celular"
                      value={formData.celular}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                {/* Documentos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CPF (obrigatório)
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo Sanguíneo
                    </label>
                    <input
                      type="text"
                      name="tipoSanguineo"
                      value={formData.tipoSanguineo}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                {/* Dados Físicos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Altura (obrigatório)
                    </label>
                    <input
                      type="text"
                      name="altura"
                      value={formData.altura}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Peso (obrigatório)
                    </label>
                    <input
                      type="text"
                      name="peso"
                      value={formData.peso}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Número Calçado (obrigatório)
                    </label>
                    <input
                      type="text"
                      name="calcado"
                      value={formData.calcado}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Vestuário */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tamanho Camisa (obrigatório)
                    </label>
                    <select
                      name="tamanhoCamisa"
                      value={formData.tamanhoCamisa}
                      onChange={handleChange}
                      required
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                    >
                      <option value="">Selecione</option>
                      <option value="PP">PP</option>
                      <option value="P">P</option>
                      <option value="M">M</option>
                      <option value="G">G</option>
                      <option value="GG">GG</option>
                      <option value="XG">XG</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo Sanguíneo
                    </label>
                    <input
                      type="text"
                      name="tipoSanguineo"
                      value={formData.tipoSanguineo}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                {/* Filiação */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome do Pai
                    </label>
                    <input
                      type="text"
                      name="nomePai"
                      value={formData.nomePai}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome da Mãe
                    </label>
                    <input
                      type="text"
                      name="nomeMae"
                      value={formData.nomeMae}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                {/* Equipe e Patrocínio */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Equipe
                    </label>
                    <input
                      type="text"
                      name="equipe"
                      value={formData.equipe}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Patrocinador
                    </label>
                    <input
                      type="text"
                      name="patrocinador"
                      value={formData.patrocinador}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Responsável (para menores)
                  </label>
                  <input
                    type="text"
                    name="responsavel"
                    value={formData.responsavel}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>

                {/* Informações de Pagamento */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-secondary mb-3">
                    Informações de Pagamento
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Forma de pagamento (obrigatório)
                      </label>
                      <select
                        name="formaPagamento"
                        value={formData.formaPagamento}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-secondary focus:border-transparent"
                      >
                        <option value="">Selecione</option>
                        <option value="pix">PIX</option>
                        <option value="deposito">Depósito Bancário</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Espécie
                      </label>
                      <input
                        type="text"
                        name="especie"
                        value={formData.especie}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Valor do depósito
                      </label>
                      <input
                        type="text"
                        name="valorDeposito"
                        value={formData.valorDeposito}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Data do Depósito
                      </label>
                      <input
                        type="date"
                        name="dataDeposito"
                        value={formData.dataDeposito}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Envio do Comprovante (obrigatório)
                      </label>
                      <input
                        type="file"
                        name="comprovante"
                        onChange={handleChange}
                        required
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full p-2 border border-gray-300 rounded"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Máx. tamanho do arquivo: 128 MB. Formatos aceitos: PDF,
                        JPG, PNG
                      </p>
                    </div>
                  </div>
                </div>

                {/* Botão de Envio */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={enviando}
                    className={`bg-secondary text-white px-8 py-3 rounded-lg font-bold text-lg tracking-wider hover:bg-hovers transition-colors shadow-lg ${enviando ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {enviando ? "Enviando..." : "Enviar Cadastro"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default CadastroFederado;
