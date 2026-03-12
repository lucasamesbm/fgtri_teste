import { motion } from "framer-motion";

const fadeInAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function RegulamentoCampeonatos() {
  return (
    <section className="w-full px-4 py-12 bg-gray-100 md:py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold tracking-widest mb-12 md:mb-16 lg:text-3xl text-black"
        >
          REGULAMENTO DOS CAMPEONATOS ESTADUAIS E RANKING
        </h1>

        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          animate="show"
          className="bg-white rounded-xl shadow-xl shadow-black/10 p-6 md:p-10 border border-gray-200"
        >
          <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
            {/* 1º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                1º) COMPETIÇÕES OFICIAIS
              </h2>
              <p className="mb-4">
                SÃO DISPUTADAS QUATRO COMPETIÇÕES OFICIAIS DA FEDERAÇÃO GAÚCHA
                DE TRIATHLON.
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">
                    Campeonato Estadual de Triathlon,
                  </span>{" "}
                  compreendendo competições de Triathlon
                  (natação/ciclismo/corrida).
                </li>
                <li>
                  <span className="font-semibold">
                    Campeonato Estadual de Triathlon de Longa Distância,
                  </span>{" "}
                  compreendendo competições de Triathlon
                  (natação/ciclismo/corrida).
                </li>
                <li>
                  <span className="font-semibold">
                    Campeonato Estadual de Cross Triathlon,
                  </span>{" "}
                  compreendendo competições de Cross Triathlon (natação/mountain
                  bike/corrida cross).
                </li>
                <li>
                  <span className="font-semibold">
                    Campeonato Estadual de Duathlon,
                  </span>{" "}
                  compreendendo competições de Duathlon
                  (corrida/ciclismo/corrida).
                </li>
                <li>
                  <span className="font-semibold">
                    Campeonato Estadual de Aquathlon,
                  </span>{" "}
                  compreendendo competições de Aquathlon (natação/corrida) e
                  (corrida/natação/corrida).
                </li>
                <li>
                  <span className="font-semibold">
                    Ranking da Federação Gaúcha de Triathlon,
                  </span>{" "}
                  englobando as competições dos Campeonatos Estaduais de
                  Triathlon, Triathlon Longa Distância, Cross Triathlon,
                  Duathlon e Aquathlon.
                </li>
              </ul>
            </div>

            {/* 2º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                2º) SOLICITAÇÃO PARA REALIZAÇÃO DE EVENTOS
              </h2>
              <p className="leading-relaxed">
                A solicitação para realização de evento oficial dos Campeonatos
                Estaduais ou oficializado, por Equipes Filiadas ou Organizadores
                de Eventos deverão ser solicitados por escrito com a descrição
                do evento com antecedência mínima de 03 (três) meses. Obedecendo
                aos critérios mínimos para realização de eventos.
              </p>
            </div>

            {/* 3º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                3º) ARBITRAGEM
              </h2>
              <p>
                As provas dos Campeonatos Estaduais, somente poderão ser
                arbitradas por árbitros da Federação Gaúcha de Triathlon.
              </p>
            </div>

            {/* 4º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                4º) CONDIÇÕES DE PARTICIPAÇÃO
              </h2>

              <p className="mb-2">
                a – Só pontuarão nos Campeonatos Estaduais, e Ranking da
                Federação Gaúcha de Triathlon, equipes filiadas a Federação, e
                os atletas federados a Federação e a Confederação Brasileira de
                Triathlon – CBTri, que deverão estar com sua RENOVAÇÃO, ou
                FEDERAÇÃO e taxa da Confederação Brasileira de Triathlon, em dia
                até a data de inscrição na prova, somando os pontos somente a
                partir da data de sua federação ou renovação. Os atletas não
                federados, participam normalmente das provas integrantes dos
                Campeonatos Estaduais, porém não pontuam nos mesmos.
              </p>

              <p className="mb-2">
                b – Na Elite, só poderão participar atletas federados na
                Federação Gaúcha de Triathlon e atletas de outros Estados, em
                dia com a sua Federação e CBTri.
              </p>

              <p className="mb-2">
                c – Os atletas suspensos ou expulsos por entidades filiadas a
                Federação, pela Federação, pela CBTri, ou por entidades filiadas
                a CBTri, não poderão participar dos Campeonatos Estaduais, ou em
                competições sancionadas pela Federação, pela CBTri ou por seus
                filiados direta ou indiretamente.
              </p>
            </div>

            {/* 5º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                5º) CATEGORIAS
              </h2>
              <p className="mb-4">
                Os atletas serão divididos nas seguintes categorias, nos
                Campeonatos Estaduais, Ranking da Federação e nas provas
                integrantes das mesmas:
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                5.1 – ELITE MASCULINA E FEMININA:
              </p>
              <p className="mb-2">
                a – Formada pelos 5 primeiros atletas federados na geral, no
                Ranking da Federação, nos Campeonatos Estaduais e nas suas
                respectivas provas, com a idade mínima de 16 anos. Os atletas
                que se classificarem na categoria Elite, não participam na
                categoria por Faixa Etária;
              </p>
              <p className="mb-4">
                b – Nas provas dos Campeonatos Estaduais, o atleta se inscreve
                na categoria por faixa etária, a Elite será formada pelos 5
                primeiros atletas federados na geral, com a idade mínima de 16
                anos. Os atletas que se classificarem na categoria Elite, não
                participam na categoria por Faixa Etária.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                5.2 – ESCOLINHA MASCULINO E FEMININO:
              </p>
              <p className="mb-2">
                – 10 anos a 11 anos, 12 anos a 13 anos, 14 anos a 15 anos
              </p>
              <p className="text-sm italic bg-gray-50 p-3 rounded">
                OBSERVAÇÃO: Os atletas das categorias Escolinha 10 anos a 11
                anos, 12 anos a 13 anos, 14 anos a 15 anos, só poderão competir
                em provas com distâncias de no máximo: Triathlon 300m de
                natação, 6Km de ciclismo e 1Km de corrida, Duathlon 1Km corrida,
                6Km ciclismo e 1Km corrida, Aquathlon 500m natação 2.500m
                corrida ou 1.250m corrida, 500m natação, 1.250m corrida. Atletas
                que violarem esta regra, federados ou não serão notificados e o
                assunto será encaminhado ao Tribunal de Justiça Desportiva para
                tomar as providências cabíveis.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                5.3 – INFANTO-JUVENIL MASCULINO E FEMININO:
              </p>
              <p className="mb-2">– 14 anos a 15 anos</p>
              <p className="text-sm italic bg-gray-50 p-3 rounded">
                OBSERVAÇÃO: Os atletas da categoria Infanto-Juvenil 14 anos a 15
                anos, só poderão competir em provas com distâncias de no máximo:
                Triathlon 750m de natação, 20Km de ciclismo e 5Km de corrida,
                Duathlon 2.500m corrida, 20Km ciclismo e 2.500m corrida,
                Aquathlon 750m natação 5Km corrida ou 2.500m corrida, 1Km
                natação, 2.500m corrida. Atletas que violarem esta regra,
                federados ou não serão notificados e o assunto será encaminhado
                ao Tribunal de Justiça Desportiva para tomar as providências
                cabíveis.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                5.4 – FAIXAS ETÁRIAS:
              </p>

              <p className="font-semibold mt-3">MASCULINO:</p>
              <p className="mb-3">
                16 anos a 17 anos, 18 anos a 19 anos, 20 anos a 24 anos, 25 anos
                a 29 anos, 30 anos a 34 anos, 35 anos a 39 anos, 40 anos a 44
                anos, 45 anos a 49 anos, 50 anos a 54 anos, 55 anos a 59 anos,
                60 anos ou mais, Mountain Bike (categoria única, Triathlon e
                Duathlon), Revezamento (Duathlon e Aquathlon composta por dois
                atletas, Triathlon composta por dois ou três atletas).
              </p>

              <p className="font-semibold mt-3">FEMININO:</p>
              <p className="mb-3">
                16 anos a 17 anos, 18 anos a 19 anos, 20 anos a 24 anos, 25 anos
                a 29 anos, 30 anos a 34 anos, 35 anos ou mais, Mountain Bike
                (categoria única, Triathlon e Duathlon), Revezamento (Duathlon e
                Aquathlon composta por dois atletas, Triathlon composta por dois
                ou três atletas).
              </p>

              <p className="text-sm italic bg-gray-50 p-3 rounded mt-3">
                OBSERVAÇÃO: Os atletas da categoria Júnior 16 anos a 17 anos,
                não poderão competir em distância superior a 750m de natação,
                20Km de ciclismo, 5Km de corrida. Atletas que violarem esta
                regra, filiados ou não serão notificados e o assunto será
                encaminhado ao Tribunal de Justiça Desportiva para tomar as
                providências cabíveis.
              </p>

              <p className="mt-3">
                <span className="font-semibold">Mountain Bike,</span> nesta
                categoria somente poderão participar bicicletas com pneu de
                espessura igual ou superior a 1,5 polegadas, não podendo ter
                clip.
              </p>

              <p className="mt-2">
                <span className="font-semibold">Revezamento,</span> nesta
                categoria as Equipes participantes dos Campeonatos Estaduais
                filiam suas equipes e os participantes das equipes podem ser
                trocados e não é necessário que os participantes sejam
                federados. Equipe Mista compete no naipe masculino.
              </p>

              <p className="mt-2">
                A participação dos atletas nas categorias Escolinhas,
                Infanto-Juvenil, Júnior e Faixas Etárias, sua idade será
                limitada no dia 31 de dezembro.
              </p>
            </div>

            {/* 6º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                6º) INSCRIÇÃO
              </h2>

              <p className="mb-2">
                a – Depois de ter sido realizada a inscrição na prova, o atleta
                não poderá mais trocar de categoria.
              </p>
              <p className="mb-4">
                b – As inscrições somente serão aceitas no prazo indicado em
                cada evento, mediante o pagamento da taxa de inscrição, com a
                ficha de inscrição preenchida e assinada pelo atleta e
                responsável.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                6.1 – TAXA DE INSCRIÇÃO:
              </p>
              <p className="mb-2">
                a – Nos eventos oficiais da Federação, deverá haver uma
                diferença de no mínimo de 40% (quarenta por cento), entre a taxa
                de inscrição dos atletas federados e não federados.
              </p>
              <p className="mb-2">
                b – A taxa de inscrição é intransferível e sem devolução.
              </p>
            </div>

            {/* 7º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                7º) PREMIAÇÃO
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.1 – AOS ATLETAS:
              </p>
              <p className="mb-2">
                a – Nas provas, os 05 (cinco) primeiros colocados das categorias
                Elite, Infantil, Infanto Juvenil, Júnior e Faixas Etárias, no
                masculino e feminino receberão troféus ou medalhas.
              </p>
              <p className="mb-2">
                b – Nos campeonatos Estaduais, serão premiados os 5 (cinco)
                primeiros colocados na categoria Elite e os três primeiros
                colocados das categorias Infantil, Infanto Juvenil, Júnior e
                Faixas Etárias, no masculino e feminino recebendo diploma
                alusivo ao feito, ou com troféus ou medalhas.
              </p>
              <p className="mb-2">
                c – Quando houver premiação em dinheiro, esta será distribuída
                prioritariamente na categoria Elite masculina e feminina,
                conforme tabela abaixo.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <h3 className="font-semibold text-center mb-3">
                  PREMIAÇÃO EM DINHEIRO
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-semibold">Colocação</p>
                    <p>ATÉ O 3° LUGAR</p>
                    <p>ATÉ O 5° LUGAR</p>
                  </div>
                  <div>
                    <p className="font-semibold">1° LUGAR</p>
                    <p>50%</p>
                    <p>32%</p>
                  </div>
                  <div>
                    <p className="font-semibold">2° LUGAR</p>
                    <p>30%</p>
                    <p>26%</p>
                  </div>
                  <div>
                    <p className="font-semibold">3° LUGAR</p>
                    <p>20%</p>
                    <p>19%</p>
                  </div>
                  <div>
                    <p className="font-semibold">4° LUGAR</p>
                    <p>–</p>
                    <p>13%</p>
                  </div>
                  <div>
                    <p className="font-semibold">5° LUGAR</p>
                    <p>–</p>
                    <p>10%</p>
                  </div>
                </div>
              </div>

              <p className="mb-2">
                d – Os prêmios em dinheiro, troféus, medalhas e outros, serão
                entregues em uma única cerimônia, exceto prêmios especiais que
                não possam ser conduzidos ao local da premiação. Neste caso
                far-se-á uma premiação simbólica.
              </p>
              <p className="text-sm italic mb-4">
                OBSERVAÇÃO: somente será entregue a premiação ao atleta presente
                a solenidade.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.2 – POR EQUIPE NAS PROVAS DOS CAMPEONATOS ESTADUAIS:
              </p>
              <p className="mb-2">
                a – Somente pontuarão as Equipes filiadas e seus atletas
                federados. A pontuação de cada Equipe é o somatório dos pontos
                dos seus cinco primeiros atletas melhores classificados na geral
                no naipe masculino e suas três primeiras atletas melhores
                classificadas na geral no naipe feminino, mais a pontuação de
                uma equipe do revezamento no naipe masculino e feminino com a
                pontuação de 30% (trinta por cento), vencendo a equipe com maior
                número de ponto;
              </p>
              <p className="mb-2">
                b – Será premiada com troféu a Equipe classificada em primeiro
                lugar.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.3 – POR EQUIPE NOS CAMPEONATOS ESTADUAIS:
              </p>
              <p className="mb-4">
                – Será premiada a Equipe Campeã e Vice Campeã de cada Campeonato
                Estadual.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.4 – PREMIAÇÃO EXTRA:
              </p>
              <p className="mb-2">
                a – O atleta campeão na geral masculino e feminino de cada
                Campeonato Estadual, terá no ano seguinte, direito a inscrição
                gratuita nas provas dos respectivos Campeonatos Estaduais;
              </p>
              <p className="mb-2">
                b – No Ranking da Federação Gaúcha de Triathlon, o atleta
                campeão na geral masculino e feminino, terá direito a inscrição
                gratuita em todas as provas oficiais da Federação no ano
                seguinte;
              </p>
              <p className="mb-2">
                c – Sempre quando houver recursos e não tiver seletiva, o atleta
                que estiver liderando o Campeonato Estadual no masculino e
                feminino e estiver em plena forma física, serão enviados aos
                Campeonatos Brasileiros por conta da Federação.
              </p>
              <p className="text-sm italic">
                OBSERVAÇÃO: somente terá direito a esta premiação, o atleta
                federado a Federação Gaúcha de Triathlon no ano em que desfrutar
                a premiação.
              </p>
            </div>

            {/* 8º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                8º) PONTUAÇÃO NOS CAMPEONATOS ESTADUAIS
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">
                8.1 – INDIVIDUAL:
              </p>
              <p className="mb-2">
                a – A pontuação nos Campeonatos Estaduais, se dará pelo
                somatório da pontuação de cada prova, na classificação geral dos
                atletas federados masculino e feminino sendo: 1º lugar 100
                pontos, 2° lugar 90 pontos, 3° lugar 82 pontos, 4° lugar 75
                pontos, 5° lugar 69 pontos, 6° lugar 64 pontos, 7° lugar 60
                pontos, 8° lugar 57 pontos, 9° lugar 54 pontos, 10° lugar 52
                pontos, 11° lugar 50 pontos e cada colocação subsequente
                decrescida de um ponto até o 60º lugar, que juntamente com os
                demais atletas que concluírem a prova, receberão um ponto;
              </p>
              <p className="mb-2">
                b – As provas dos Campeonatos Estaduais, de Triathlon, Duathlon
                e Aquathlon, quando tiver duas distâncias, a distância maior
                terá o peso de 2 (dois) na pontuação, ou peso maior conforme a
                distância, que será determinado pelo departamento técnico da
                Federação, e a distância menor peso 1 (um) na pontuação (este
                critério não é válido para as distâncias das categorias
                Escolinhas e Infanto-Juvenil);
              </p>
              <p className="mb-4">
                c – A primeira e a última etapa dos Campeonatos Estaduais, terão
                um acréscimo de 0.5 (zero ponto cinco) a mais em sua pontuação.
                Este critério não se aplica quando o Campeonato Estadual for em
                etapa única, e quando o Campeonato Estadual for em duas etapas
                este critério se aplica somente na última etapa.
              </p>
              <p className="text-sm italic mb-4">
                OBSERVAÇÃO: o atleta que trocar da categoria Mountain Bike para
                a categoria por Faixas Etárias levará sua pontuação, não
                acontecendo o inverso.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">8.2 – EMPATE:</p>
              <p className="mb-2">
                – No caso de empate entre dois ou mais atletas, são os seguintes
                critérios de desempates:
              </p>
              <p className="mb-2">
                a – A melhor classificação nas provas do referido Campeonato;
              </p>
              <p className="mb-4">
                b – Persistindo o empate, o melhor resultado da última prova do
                campeonato, mantendo o empate a penúltima prova e assim
                sucessivamente.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">8.3 – DESCARTE:</p>
              <p className="mb-4">
                – Nos Campeonatos Estaduais será descartado a partir da 5ª
                (quinta) etapa, o pior resultado das provas realizadas ou uma
                prova não realizada.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                8.4 – BONIFICAÇÃO:
              </p>
              <p className="mb-2">
                a – Os atletas que participarem de todas as provas do referido
                Campeonato, terão uma bonificação de 30 (trinta) pontos no final
                do mesmo, quando o Campeonato tiver somente uma etapa não será
                aplicada a bonificação;
              </p>
              <p className="mb-4">
                b – A primeira e a última etapa dos Campeonatos Estaduais, terão
                um acréscimo de 0.5 (zero ponto cinco) a mais em sua pontuação.
                Este critério não se aplica quando o Campeonato Estadual for em
                etapa única.
              </p>

              <p className="font-semibold">OBSERVAÇÕES:</p>
              <p className="mb-2">
                a – O atleta que não participar em alguma prova dos Campeonatos,
                por estar representando o Estado em provas de nível nacional, ou
                internacional homologada pela CBTri, continuará recebendo a
                bonificação;
              </p>
              <p className="mb-2">
                b – Se o atleta tiver que abandonar a prova por motivo de força
                maior justificada após a largada, será considerada a prova como
                realizada, com o atleta continuando a receber a bonificação;
              </p>
              <p className="mb-4">
                c – O atleta desclassificado não terá direito a bonificação.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                8.5 – POR EQUIPE:
              </p>
              <p className="mb-2">
                – Será o somatório dos pontos que a Equipe obtiver nas provas do
                campeonato estadual.
              </p>
              <p>
                – Em caso de uma prova do Campeonato Estadual não poder ser
                realizada em sua combinação original, esta terá sua pontuação
                válida para o referido Campeonato Estadual.
              </p>
            </div>

            {/* 9º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                9º) RANKING DA FEDERAÇÃO GAÚCHA DE TRIATHLON
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">
                9.1 – INDIVIDUAL:
              </p>
              <p className="mb-2">
                – A classificação do Ranking será o somatório dos pontos das
                provas dos Campeonatos Estaduais sem descarte, os cinco
                primeiros atletas na geral serão classificados na Elite, sendo:
              </p>

              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Campeonato Estadual de Triathlon, peso três;</li>
                <li>
                  Campeonato Estadual de Triathlon de Longa Distância, peso um e
                  meio;
                </li>
                <li>Campeonato Estadual de Cross Triathlon, peso um;</li>
                <li>Campeonato Estadual de Duathlon, peso dois;</li>
                <li>Campeonato Estadual de Aquathlon, peso um.</li>
              </ul>

              <p className="font-semibold text-lg mt-4 mb-2">
                9.2 – POR EQUIPE:
              </p>
              <p>
                – Será o somatório dos pontos que a Equipe obtiver nos
                campeonatos estaduais.
              </p>
            </div>

            {/* 10º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                10º) REPRESENTANTE DOS ATLETAS
              </h2>
              <p className="mb-2">
                – O representante dos atletas, atleta federado a Federação
                Gaúcha de Triathlon, tem como função representar os atletas nas
                questões técnicas e administrativas, junto a Federação, durante
                os Eventos ou fora.
              </p>
              <p>
                – O representante dos Atletas, terá direito à inscrição gratuita
                em todas as provas oficiais ou oficializadas pela Federação.
              </p>
            </div>

            {/* 11º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                11º) TRANSFERÊNCIA DE ATLETAS
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">
                11.1 – TRANSFERÊNCIA ESTADUAL:
              </p>
              <p className="mb-4">
                – Todo atleta federado a uma Equipe, estará vinculado a esta.
                Caso o atleta queira abandonar ou trocar de Equipe, deverá
                solicitar a Federação sua transferência como segue.
              </p>

              <p className="mb-2">
                a – De Equipe filiada para Equipe filiada: A Equipe de destino
                deverá solicitar a transferência do atleta mediante ofício,
                apresentando a liberação do atleta de sua Equipe de origem,
                juntamente com a taxa de transferência.
              </p>

              <p className="mb-2">
                b – De Equipe filiada para a condição de atleta com federação
                avulsa: O atleta solicita sua transferência mediante ofício,
                apresentando a liberação de sua Equipe, juntamente com a taxa de
                transferência.
              </p>

              <p className="mb-2">
                c – De atleta com federação avulsa para Equipe filiada: A Equipe
                de destino deverá solicitar a transferência do atleta mediante
                ofício, esta transferência está livre do pagamento de taxa.
              </p>

              <p className="mb-2">
                d – Nos itens 1 e 2, em caso de negativa da transferência a
                Equipe de origem deverá apresentar os motivos desta.
              </p>

              <p className="mb-2">
                e – Quando o atleta for menor de idade, seu pedido de
                transferência deverá vir acompanhado da competente autorização
                da pessoa sob cuja guarda e dependência estiver o mesmo, com a
                respectiva comprovação.
              </p>

              <p className="mb-2">
                f – Toda a documentação deverá ser apresentada de uma só vez.
              </p>

              <p className="mb-2">
                g – Caso uma Entidade filiada venha solicitar licença,
                desfiliação, fechar, ou for desfiliada pela Federação, o atleta
                que estiver filiado a esta, estará isento da taxa de
                transferência.
              </p>

              <p className="mb-2">
                h – O atleta somente será considerado transferido após a
                liberação da Federação por ofício.
              </p>

              <p className="mb-2">
                i – A pontuação obtida até o momento da transferência do atleta
                fica com o atleta, da equipe fica com a equipe de origem.
              </p>

              <p className="mb-4">
                j – Os casos omissos serão decididos pela diretoria da
                Federação, com direito a recurso ao Tribunal de Justiça
                Desportiva – TJD da Federação.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                11.2 – TRANSFERÊNCIA NACIONAL:
              </p>
              <p>
                – Deverá ser solicitada a Federação Gaúcha de Triathlon, que
                encaminhará a Confederação Brasileira de Triathlon e a Federação
                de destino, com o pagamento da taxa devida.
              </p>
            </div>

            {/* 12º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                12º) OS MELHORES DO ANO
              </h2>
              <p className="mb-4">
                – Ao final dos Campeonatos, a Federação irá indicar a Equipe e
                os nomes dos atletas com seu histórico, conforme os parâmetros
                abaixo para a Comissão Técnica que em reunião elegerá o MELHOR
                ATLETA, o DESTAQUE INTERNACIONAL, NACIONAL, ESTADUAL e a
                REVELAÇÃO, masculino e feminino do ano, MELHOR EVENTO de cada
                modalidade e EVENTO DESTAQUE.
              </p>

              <p className="font-semibold">CRITÉRIOS</p>

              <p className="mt-3">
                <span className="font-semibold">MELHOR EQUIPE:</span> É a Equipe
                que tiver o maior número de vitórias nas provas dos Campeonatos
                Estaduais, em caso de empate o maior número de segundo lugares e
                assim sucessivamente.
              </p>

              <p className="mt-2">
                <span className="font-semibold">MELHOR ATLETA:</span> É o atleta
                que participou da competição mais importante do ano, levado em
                conta os títulos obtidos e seu desempenho técnico.
              </p>

              <p className="mt-2">
                <span className="font-semibold">
                  DESTAQUE INTERNACIONAL, NACIONAL E ESTADUAL:
                </span>{" "}
                É o atleta que tenha conquistado título de relevância, ou tenha
                participado de competição importante.
              </p>

              <p className="mt-2">
                <span className="font-semibold">REVELAÇÃO:</span> É o atleta que
                tenha se revelado no esporte.
              </p>
            </div>

            {/* 13º */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                13º) CRITÉRIO DE PARTICIPAÇÃO EM EVENTOS NACIONAIS E
                INTERNACIONAIS
              </h2>
              <p className="mb-4">
                – A Federação Gaúcha de Triathlon, somente autorizará a
                participação de atletas do Rio Grande do Sul, em competição
                oficial de âmbito nacional e internacional, que estejam
                federados a Federação e Confederação Brasileira de Triathlon,
                participando do Campeonato Estadual da modalidade e da sua
                seletiva quando houver.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                13.1 – CONDIÇÕES DE PARTICIPAÇÃO:
              </p>
              <p className="mb-2">
                a – Todos os atletas deverão estar federados a FGTri e
                confederados a CBTri;
              </p>
              <p className="mb-2">
                b – Os atletas, sob suspensão ou expulsos por entidade filiada a
                CBTri, ou pela CBTri não poderão participar de competições
                sancionadas por ela ou por afiliadas direta ou indiretamente;
              </p>
              <p className="mb-2">
                c – Somente atleta brasileiro ou naturalizado brasileiro, pode
                competir ao título de campeão brasileiro e representar o Brasil
                em competições internacionais;
              </p>
              <p className="mb-4">
                d – Um atleta que possua dupla nacionalidade, poderá representar
                apenas um dos países (que ele escolher) durante o calendário do
                mesmo ano;
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                13.2 – INSCRIÇÃO:
              </p>
              <p className="mb-4">
                Somente será autorizada a inscrição em prova oficial da CBTri,
                ou em competição internacional, o atleta federado e confederado
                que estiver participando do Campeonato Estadual da modalidade e
                da sua seletiva quando houver.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                13.3 – CONGRESSO TÉCNICO:
              </p>
              <p className="mb-4">
                Será obrigatório o comparecimento do atleta no Congresso
                Técnico.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                13.4 – ENTREGA DE KIT:
              </p>
              <p className="mb-2">
                a – Somente o competidor ou o representante da Federação, poderá
                retirar o Kit de competição;
              </p>
              <p className="mb-4">
                b – Os Kits só serão entregues nos horários estabelecidos nas
                informações da Prova.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                13.5 – UNIFORMES:
              </p>
              <p className="mb-4">
                Nos Campeonatos Brasileiros, os atletas deverão utilizar o
                uniforme, símbolos e cores de sua Federação, salvo quando
                liberados por escrito pela Federação para utilizarem seus
                próprios uniformes;
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                13.6 – RECURSOS:
              </p>
              <p>
                Somente a Federação, poderá entrar com recurso contra a decisão
                do árbitro, ou da organização da prova.
              </p>
            </div>

            {/* Aprovação */}
            <div className="mt-8 pt-4 text-center">
              <p className="text-secondary font-semibold text-lg">
                O Regulamento dos Campeonatos Estaduais, Ranking e critério de
                participação dos atletas do Rio Grande do Sul em Eventos
                oficiais de âmbito Nacional e Internacional, foram aprovados
                pelo Conselho Técnico em reunião.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default RegulamentoCampeonatos;
