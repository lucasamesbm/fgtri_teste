import { motion } from "framer-motion";

const fadeInAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function TaxasMultas() {
  return (
    <section className="w-full px-4 py-12 bg-gray-100 md:py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold tracking-widest mb-12 md:mb-16 lg:text-3xl text-black"
        >
          REGULAMENTO DE TAXAS E MULTAS
        </h1>

        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          animate="show"
          className="bg-white rounded-xl shadow-xl shadow-black/10 p-6 md:p-10 border border-gray-200"
        >
          <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
            <div className="bg-secondary/5 p-6 rounded-lg border-l-4 border-secondary mb-8">
              <p className="text-lg font-semibold text-secondary">
                Aprovado em Assembleia no dia 04 de novembro de 2024
              </p>
            </div>

            {/* Artigo 1 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">Art. 1º</h2>
              <p className="text-gray-700 leading-relaxed">
                AS TAXAS E MULTAS DEVIDAS A FEDERAÇÃO GAÚCHA DE TRIATHLON, SERÃO
                COBRADAS DE ACORDO COM ESTE REGULAMENTO
              </p>
            </div>

            {/* Artigo 2 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 2º – TAXAS DE FILIAÇÃO:
              </h2>

              <div className="mb-4">
                <p className="font-semibold text-lg mt-4 mb-2">
                  ENTIDADES CONSTITUÍDAS JURIDICAMENTE – R$400,00
                </p>
                <p className="font-semibold mb-2">Procedimentos:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>
                    a – Ofício à Federação Gaúcha de Triathlon, solicitando
                    filiação;
                  </li>
                  <li>b – Preencher Cadastro de filiação;</li>
                  <li>
                    c – Anexar:
                    <ul className="list-circle pl-6 mt-1 space-y-1">
                      <li>– relação da Diretoria atual;</li>
                      <li>– ata de eleição;</li>
                      <li>– Estatuto;</li>
                    </ul>
                  </li>
                  <li>d – Pagar a taxa devida.</li>
                </ul>

                <p className="font-semibold text-lg mt-6 mb-2">
                  ENTIDADES SEM CONSTITUIÇÃO JURÍDICA – R$450,00
                </p>
                <p className="font-semibold mb-2">Procedimentos:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    a – Ofício à Federação Gaúcha de Triathlon, solicitando
                    filiação;
                  </li>
                  <li>b – Preencher Cadastro de filiação;</li>
                  <li>d – Pagar a taxa devida;</li>
                </ul>

                <p className="italic text-gray-600 mt-4">
                  Para filiação pagar taxa de filiação e anuidade.
                </p>
              </div>
            </div>

            {/* Artigo 3 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 3º – TAXAS DE ANUIDADE:
              </h2>

              <div className="mb-4">
                <p className="font-semibold text-lg mt-4 mb-2">
                  ENTIDADES CONSTITUÍDAS JURIDICAMENTE – R$550,00
                </p>
                <p className="font-semibold mb-2">Procedimentos:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    a – Ofício à Federação Gaúcha de Triathlon, solicitando
                    renovação anual, preenchendo a ficha devida;
                  </li>
                  <li>b – Pagar a taxa devida;</li>
                </ul>

                <p className="font-semibold text-lg mt-6 mb-2">
                  ENTIDADES SEM CONSTITUIÇÃO JURÍDICA – R$600,00
                </p>
                <p className="font-semibold mb-2">Procedimentos:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    a – Ofício à Federação Gaúcha de Triathlon, solicitando
                    renovação anual, preenchendo a ficha devida;
                  </li>
                  <li>b – Pagar a taxa devida.</li>
                </ul>
              </div>
            </div>

            {/* Artigo 4 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                ART. 4º – TAXAS DE FEDERAÇÃO OU RENOVAÇÃO ANUAL ATLETAS:
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                (Já incluída Taxa de Confederação)
              </p>

              <p className="text-2xl font-bold text-secondary my-4">
                – R$180,00
              </p>

              <p className="font-semibold mb-2">Procedimentos:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>a – Preencher ficha de inscrição na página da FGTri;</li>
                <li>b – Pagar a taxa devida.</li>
              </ul>
            </div>

            {/* Artigo 5 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 5º – REGISTO DE TÉCNICO / TREINADOR – ANUIDADE:
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">
                NA FEDERAÇÃO – R$200,00
              </p>

              <p className="text-gray-700 italic">
                Por determinação da Confederação Brasileira de Triathlon, todo o
                Técnico / Treinador que se registrar na Federação deverá
                recolher a taxa da Confederação.
              </p>
            </div>

            {/* Artigo 6 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 6º – TAXA DE TRANSFERÊNCIA:
              </h2>
              <p className="font-semibold mb-2">NACIONAL / INTERNACIONAL</p>
              <p className="text-gray-700">
                Será determinada na data da transferência, conforme determinação
                da CBTri.
              </p>
            </div>

            {/* Artigo 7 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 7º – TAXAS DE EVENTOS:
              </h2>

              <div className="space-y-4">
                <p className="font-semibold text-lg mt-4 mb-2">
                  PERMITI (DAYT USE) PARA A PARTICIPAÇÃO DE ATLETAS NÃO
                  FEDERADO, NOS EVENTOS NO ESTADO DO RIO GRANDE DO SUL, ACIMA DA
                  TAXA DE INSCRIÇÃO – R$50,00
                </p>

                <p className="font-semibold text-lg">
                  PERMITI PARA EVENTO DE ÂMBITO INTERNACIONAL – R$6.000,00
                </p>

                <p className="font-semibold text-lg">
                  PERMITI PARA EVENTO DE ÂMBITO NACIONAL – R$4.000,00
                </p>

                <p className="font-semibold text-lg">
                  PERMITI PARA EVENTO DE ÂMBITO ESTADUAL
                </p>
                <p className="pl-4">
                  15% sobre o valor total dos inscritos, ou 15% da taxa de
                  federação de atleta, por atleta inscrito quando não houver
                  taxa de inscrição.
                </p>
              </div>
            </div>

            {/* Artigo 8 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 8º – MULTAS
              </h2>

              <div className="space-y-2">
                <p className="font-semibold text-lg">
                  POR NÃO REALIZAÇÃO DE EVENTO – R$800,00
                </p>
                <p className="font-semibold text-lg">
                  POR TRANSFERÊNCIA DE DATA – R$200,00
                </p>
              </div>
            </div>

            {/* Artigo 9 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 9º – RECURSO EM PRIMEIRA INSTÂNCIA:
              </h2>
              <p className="text-lg">
                PAGAMENTO NO ATO, 4 (quatro) vezes o valor da taxa de federação
                de atleta.
              </p>
            </div>

            {/* Artigo 10 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 10º – RECURSO EM SEGUNDA INSTÂNCIA:
              </h2>
              <p className="text-lg">
                PAGAMENTO NO ATO, 8 (oito) vezes o valor da taxa de federação de
                atleta.
              </p>
            </div>

            {/* Artigo 11 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 11º – RECURSO EM TERCEIRA INSTÂNCIA:
              </h2>
              <p className="text-lg">
                PAGAMENTO NO ATO, 20 (vinte) vezes o valor da taxa de federação
                de atleta.
              </p>
            </div>

            {/* Artigo 12 */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                Art. 12º – CASOS OMISSOS:
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Os casos omissos ao presente serão resolvidos pela Diretoria da
                Federação Gaúcha de Triathlon.
              </p>
            </div>

            {/* Data de aprovação */}
            <div className="mt-8 pt-4 text-center">
              <p className="text-secondary font-semibold text-lg">
                O Regulamento de Taxas e Multas foi aprovado em Assembleia no
                dia 04 de novembro de 2024.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default TaxasMultas;
