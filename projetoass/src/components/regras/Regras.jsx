import { motion } from "framer-motion";

const fadeInAnimation = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

function RegrasCompeticao() {
  return (
    <section className="w-full px-4 py-12 bg-gray-100 md:py-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold tracking-widest mb-12 md:mb-16 lg:text-3xl text-black"
        >
          REGRAS DE COMPETIÇÃO
        </h1>

        <motion.div
          variants={fadeInAnimation}
          initial="hidden"
          animate="show"
          className="bg-white rounded-xl shadow-xl shadow-black/10 p-6 md:p-10 border border-gray-200"
        >
          <div className="prose prose-sm md:prose-base max-w-none text-gray-700">
            {/* Introdução */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <p className="leading-relaxed mb-4">
                As Regras de Competição da Federação Gaúcha de Triathlon –
                FGTri, são baseadas nas regras da Confederação Brasileira de
                Triathlon – CBTri, e adaptadas para a realidade do Rio Grande do
                Sul, que deverão ser adotadas na íntegra em todas as competições
                realizadas no território do Estado do Rio Grande do Sul,
                conforme Lei Federal n° 9.615, de 24 de março de 1998 e decreto
                n° 2574, de 29 de abril de 1998, capitulo I, Disposições
                Iniciais, Art. 1°, parágrafo 1°, Estatuto e Regulamentos da
                Federação Gaúcha de Triathlon, entidade estadual de
                administração do esporte.
              </p>
            </div>

            {/* OBJETIVOS */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                OBJETIVOS
              </h2>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Criar uma atmosfera de igualdade, espírito desportivo e
                  justiça entre os atletas;
                </li>
                <li>Prover segurança e proteção;</li>
                <li>
                  Enfatizar honestidade e habilidade, sem restringir a liberdade
                  de ação dos atletas;
                </li>
                <li>
                  Penalizar os atletas que procuram ganhar vantagem injusta;
                </li>
                <li>
                  Facilitar a promoção de competições em todo o território do
                  Estado do Rio Grande do Sul, elevando assim, o número e o
                  nível dos competidores;
                </li>
                <li>
                  Adequar os regulamentos de acordo com a nossa realidade;
                </li>
              </ul>
            </div>

            {/* 1 – NORMAS GERAIS */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                1 – NORMAS GERAIS
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">1.1 – GERAL</p>
              <p className="mb-4">
                Uma competição de Triathlon, Duathlon, Aquathlon, Cross
                Triathlon ou qualquer outra competição multi esportiva que
                esteja dentro da jurisdição da FGTri envolve muitos atletas. As
                táticas de competição são partes de interação entre os atletas,
                levando-os a tomar decisões instantâneas, de acordo com o
                condicionamento e a experiência de cada um. Entretanto os
                competidores deverão:
              </p>

              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Manter durante todo o tempo uma conduta esportiva;</li>
                <li>
                  Ser responsável pela sua própria segurança e a segurança de
                  outros;
                </li>
                <li>
                  Ser responsável pela compreensão e cumprimento das Regras de
                  competição e de seus Regulamentos Específicos;
                </li>
                <li>Obedecer às instruções dos árbitros;</li>
                <li>
                  Tratar os outros competidores, árbitros, voluntários e
                  espectadores com respeito e cortesia;
                </li>
                <li>Não fazer uso da linguagem vulgar ou de baixo calão;</li>
                <li>Após abandonar a competição, informar a um árbitro.</li>
              </ul>

              <p className="font-semibold text-lg mt-4 mb-2">
                1.2 – REGULAMENTO ANTIDOPING
              </p>
              <p className="mb-2">
                a – A FGTri condena o uso de substâncias ou práticas que
                artificialmente aumentem o rendimento do atleta. Os atletas, em
                todos os eventos, deverão seguir as regras antidoping, descritas
                no Manual de Controle Anti Doping da WADA e do COB;
              </p>
              <p className="mb-4">
                b – Antes de participar de eventos da jurisdição da FGTri,
                procure um médico da área esportiva e sane todas as dúvidas
                sobre doping esportivo.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">1.3 – SAÚDE</p>
              <p className="mb-2">
                a – Triathlon, Cross Triathlon, Duathlon, Aquathlon e outras
                competições multi esportivas são extenuantes. Para poderem
                participar, os competidores devem estar em excelente forma
                física. Sua saúde e bem estar são de importância fundamental.
                Antes de se inscrever em uma competição faça uma avaliação
                médica e procure um profissional para avaliar sua aptidão
                física;
              </p>
              <p className="mb-2">
                b – Todo o atleta deverá ter um plano de saúde e seguro
                apropriado;
              </p>
              <p className="mb-4">
                c – Todo atleta deverá apresentar declaração assinada de aptidão
                para participar da competição;
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                1.4 – CONDIÇÕES DE PARTICIPAÇÃO
              </p>
              <p className="mb-2">
                a – Todos os atletas com domicílio ou residência no Estado do
                Rio Grande do Sul, Brasileiro ou não deverão se federar
                obrigatoriamente na Federação Gaúcha de Triathlon;
              </p>
              <p className="mb-2">
                b – Os atletas suspensos ou expulsos por entidades filiadas a
                Federação, pela Federação, pela CBTri, ou por entidades filiadas
                a CBTri, não poderão participar dos Campeonatos Estaduais, ou em
                competições sancionadas pela Federação, pela CBTri ou por seus
                filiados direta ou indiretamente.
              </p>
            </div>

            {/* 2 – NORMAS DE COMPETIÇÃO */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                2 – NORMAS DE COMPETIÇÃO
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">2.1 – INSCRIÇÃO</p>
              <p className="mb-2">
                a – As inscrições somente serão aceitas no período informado nas
                informações do Evento, mediante o pagamento da taxa de
                inscrição, com a ficha de inscrição preenchida e assinada pelo
                atleta ou responsável;
              </p>
              <p className="mb-2">
                b – A taxa de inscrição é intransferível e sem devolução;
              </p>
              <p className="mb-2">
                c – Depois de ter sido realizada a inscrição na prova o atleta
                não poderá mais trocar de categoria;
              </p>
              <p className="mb-2">
                d – O atleta que não cumprir com todos os critérios de
                inscrição, será desqualificado a qualquer tempo;
              </p>
              <p className="mb-2">
                e – A inscrição do atleta implica em total entendimento por ele
                das regras de Competição e do regulamento específico da
                Competição, devendo qualquer dúvida ser esclarecida antes da
                prova;
              </p>
              <p className="mb-4">
                f – Todo o atleta estará sujeito às regras de Competição e do
                regulamento específico da Competição da sua inscrição ao
                encerramento da prova, após a premiação;
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">2.2 – IDIOMA</p>
              <p className="mb-2">
                a – O idioma oficial da FGTri é o português devendo ser adotado
                em Competição internacional, as línguas inglesa ou francesa como
                primeira língua seguida do português.
              </p>
              <p className="mb-4">
                b – Em caso de Campeonato Sul-americano, Latino-Americano ou
                Pan-americano, a língua oficial será o espanhol como primeira
                língua seguida do português.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">2.3 – UNIFORMES</p>
              <p className="mb-2">
                a – Os uniformes são de responsabilidade das Equipes ou dos
                atletas que deverão mostrar o nome da Equipe como item
                predominante, que deverá estar localizado na parte frontal e
                posterior superior do corpo, acima do número de competição;
              </p>
              <p className="mb-2">
                b – É permitida a propaganda, mas nunca maior que o nome da
                Equipe, ou em cores que lhe dêem mais destaque;
              </p>
              <p className="mb-2">
                c – A propaganda no material de competição é permitido;
              </p>
              <p className="mb-2">
                d – Aconselhamos o uso de uniforme de uma só peça;
              </p>
              <p className="mb-2">
                e – Se o uniforme for de 2 (duas) peças o espaço entre a parte
                superior e a inferior não deve exceder 10 cm;
              </p>
              <p className="mb-2">
                f – Se os uniformes tiverem fechos (zípers) devem ser
                localizados na parte de trás. Se o zíper for localizado na parte
                frontal do uniforme, ele deverá permanecer fechado durante toda
                a Competição;
              </p>
              <p className="mb-2">
                g – Não é permitida, em hipótese alguma, propaganda política ou
                abuso de linguagem no uniforme ou em qualquer peça do
                equipamento do competidor;
              </p>
              <p className="mb-4">
                h – Para o atleta subir no pódio de premiação, deverá estar
                devidamente uniformizado, não podendo sobre qualquer hipótese se
                apresentar com o torso nu, descalço ou portando objetos
                inadequados.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                2.4 – CONGRESSO TÉCNICO
              </p>
              <p className="mb-2">
                a – Todo o Congresso Técnico terá lista de presença;
              </p>
              <p className="mb-2">
                b – A Equipe e o atleta que não comparecerem ao Congresso
                Técnico, ou não assinar a lista de presença, não terá direito a
                Recurso;
              </p>
              <p className="mb-2">
                c – Quaisquer aspectos técnicos, dúvidas quanto ao regulamento
                ou percurso, devem ser elucidados no Congresso Técnico;
              </p>
              <p className="mb-2">
                d – Qualquer Regulamento Específico ou, mudança nas informações
                divulgadas anteriormente através de folders, Internet, correio
                eletrônico ou similar, deve ser informada aos atletas no
                Congresso Técnico;
              </p>
              <p className="mb-2">
                e – O congresso técnico deve ser conduzido pela diretoria da
                Federação e Árbitro Geral;
              </p>
              <p className="mb-4">
                f – Quando não houver congresso técnico, será obrigatória a
                entrega ao atleta das informações específica da competição junto
                com a numeração do atleta. O atleta deverá ler e tirar suas
                dúvidas antes da largada com o árbitro geral da competição.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                2.5 – ENTREGA DE KIT
              </p>
              <p className="mb-2">
                a – Os atletas individualmente, são responsáveis pela coleta de
                seus kits de Competição, salvo quando autorizar por escrito a
                retirada de seu Kit por terceiros;
              </p>
              <p className="mb-2">
                b – Os Kits só serão entregues nos horários estabelecidos nas
                Informações da Competição;
              </p>
              <p className="mb-2">
                c – O Kit deverá ser composto essencialmente por números de
                competição, alfinetes, abraçadeira plástica, touca de natação e
                Regras Específicas da Competição;
              </p>
              <p className="mb-2">
                d – Podem também compor o Kit: Camisa e bonés alusivos ao
                evento, prospectos de turismo e brindes fornecidos pelos
                patrocinadores.
              </p>
            </div>

            {/* 3 – DO FORMATO DAS COMPETIÇÕES */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                3 – DO FORMATO DAS COMPETIÇÕES
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">
                3.1 – TRIATHLON OLÍMPICO
              </p>
              <p className="mb-2">
                AS COMPETIÇÕES DE TRIATHLON OLÍMPICO ESTÃO DIVIDIDAS EM TRÊS
                ETAPAS:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <div className="grid grid-cols-4 gap-2 font-semibold text-center mb-2">
                  <div></div>
                  <div>Natação</div>
                  <div>Ciclismo</div>
                  <div>Corrida</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="font-semibold">Distâncias</div>
                  <div>1.500m</div>
                  <div>40 Km</div>
                  <div>10 Km</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center mt-2">
                  <div className="font-semibold">Número máximo de voltas</div>
                  <div>3 voltas</div>
                  <div>20 voltas</div>
                  <div>5 voltas</div>
                </div>
              </div>

              <p className="font-semibold text-lg mt-4 mb-2">
                3.2 – TRIATHLON SPRINT
              </p>
              <p className="mb-2">
                AS COMPETIÇÕES DE TRIATHLON SPRINT ESTÃO DIVIDIDAS EM TRÊS
                ETAPAS:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <div className="grid grid-cols-4 gap-2 font-semibold text-center mb-2">
                  <div></div>
                  <div>Natação</div>
                  <div>Ciclismo</div>
                  <div>Corrida</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="font-semibold">Distâncias</div>
                  <div>750m</div>
                  <div>20 Km</div>
                  <div>5 Km</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center mt-2">
                  <div className="font-semibold">Número máximo de voltas</div>
                  <div>2 voltas</div>
                  <div>10 voltas</div>
                  <div>3 voltas</div>
                </div>
              </div>

              <p className="font-semibold text-lg mt-4 mb-2">
                3.3 – TRIATHLON LONGA DISTÂNCIA
              </p>
              <p className="mb-2">
                AS COMPETIÇÕES DE TRIATHLON LONGA DISTÂNCIA ESTÃO DIVIDIDAS EM
                TRÊS ETAPAS:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <div className="grid grid-cols-4 gap-2 font-semibold text-center mb-2">
                  <div></div>
                  <div>Natação</div>
                  <div>Ciclismo</div>
                  <div>Corrida</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="font-semibold">Distâncias</div>
                  <div>3 Km</div>
                  <div>80 Km</div>
                  <div>20 Km</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center mt-2">
                  <div className="font-semibold">Número máximo de voltas</div>
                  <div>2 voltas</div>
                  <div>16 voltas</div>
                  <div>8 voltas</div>
                </div>
              </div>

              <p className="font-semibold text-lg mt-4 mb-2">
                3.4 – TRIATHLON DE VELOCIDADE
              </p>
              <p className="mb-2">
                AS COMPETIÇÕES DE TRIATHLON DE VELOCIDADE ESTÃO DIVIDIDAS EM
                TRÊS ETAPAS
              </p>
              <p className="mb-4">
                Serão realizadas em três baterias, o atleta que não realizar uma
                das baterias será desclassificado, as baterias poderão ter
                séries e quantas forem necessárias, sendo o intervalo mínimo
                entre uma bateria e outra de 15 minutos ou o tempo necessário
                para a largada após terminadas as séries daquela bateria.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4">
                <div className="grid grid-cols-4 gap-2 font-semibold text-center mb-2">
                  <div></div>
                  <div>Natação</div>
                  <div>Ciclismo</div>
                  <div>Corrida</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="font-semibold">Distâncias</div>
                  <div>250m</div>
                  <div>6 Km</div>
                  <div>1.500m</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-center mt-2">
                  <div className="font-semibold">Número máximo de voltas</div>
                  <div>1 volta</div>
                  <div>8 voltas</div>
                  <div>2 voltas</div>
                </div>
              </div>

              <p className="font-semibold text-lg mt-4 mb-2">3.5 – DUATHLON</p>
              <p className="mb-2">
                AS COMPETIÇÕES DE DUATHLON ESTÃO DIVIDIDAS EM TRÊS ETAPAS.
              </p>
              <p className="mb-2">
                Em cada etapa é permitido um número máximo de voltas:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Distâncias / Categoria</th>
                      <th className="text-center py-2">Corrida</th>
                      <th className="text-center py-2">Ciclismo</th>
                      <th className="text-center py-2">Corrida</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">
                        Mini Sprint (Infantil-Escolinha)
                      </td>
                      <td className="text-center">
                        Máx 1 Km
                        <br />1 volta
                      </td>
                      <td className="text-center">
                        Máx 6 Km
                        <br />3 voltas
                      </td>
                      <td className="text-center">
                        Máx 1 Km
                        <br />1 volta
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">
                        Sprint (Infanto-Juvenil)
                      </td>
                      <td className="text-center">
                        Máx 2.5 Km
                        <br />2 voltas
                      </td>
                      <td className="text-center">
                        Máx 20 Km
                        <br />5 voltas
                      </td>
                      <td className="text-center">
                        Máx 2.5 Km
                        <br />2 voltas
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">
                        Mundial (16 anos e acima)
                      </td>
                      <td className="text-center">
                        Máx 10 Km
                        <br />5 voltas
                      </td>
                      <td className="text-center">
                        Máx 40 Km
                        <br />
                        10 voltas
                      </td>
                      <td className="text-center">
                        Máx 5 Km
                        <br />3 voltas
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold">
                        Longa Distância (18 anos e acima)
                      </td>
                      <td className="text-center">
                        Máx 20 Km
                        <br />8 voltas
                      </td>
                      <td className="text-center">
                        Máx 120 Km
                        <br />
                        10 voltas
                      </td>
                      <td className="text-center">
                        Máx 10 Km
                        <br />4 voltas
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="font-semibold text-lg mt-4 mb-2">3.6 – AQUATHLON</p>
              <p className="mb-2">
                COMPETIÇÕES DE AQUATHLON DIVIDIDAS EM TRÊS ETAPAS.
              </p>
              <p className="mb-2">
                Em cada etapa é permitido um número máximo de voltas, natação em
                água aberta.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Distâncias / Categoria</th>
                      <th className="text-center py-2">Corrida</th>
                      <th className="text-center py-2">Natação</th>
                      <th className="text-center py-2">Corrida</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Sprint Infantil</td>
                      <td className="text-center">
                        Máx 1.250m
                        <br />1 volta
                      </td>
                      <td className="text-center">
                        Máx 500m
                        <br />1 volta
                      </td>
                      <td className="text-center">
                        Máx 1.250m
                        <br />1 volta
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">
                        Mundial (16 anos e acima)
                      </td>
                      <td className="text-center">
                        Máx 2.500m
                        <br />2 voltas
                      </td>
                      <td className="text-center">
                        Máx 1 Km
                        <br />2 voltas
                      </td>
                      <td className="text-center">
                        Máx 2.500m
                        <br />2 voltas
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold">
                        Longa Distância (18 anos e acima)
                      </td>
                      <td className="text-center">
                        Máx 5 Km
                        <br />4 voltas
                      </td>
                      <td className="text-center">
                        Máx 2 Km
                        <br />4 voltas
                      </td>
                      <td className="text-center">
                        Máx 5 Km
                        <br />4 voltas
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-2">
                COMPETIÇÕES DE AQUATHLON DIVIDIDAS EM DUAS ETAPAS.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Distâncias / Categoria</th>
                      <th className="text-center py-2">Natação</th>
                      <th className="text-center py-2">Corrida</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">Sprint Infantil</td>
                      <td className="text-center">
                        Máx 500m
                        <br />1 volta
                      </td>
                      <td className="text-center">
                        Máx 1.250m
                        <br />2 voltas
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-semibold">
                        Mundial (16 anos e acima)
                      </td>
                      <td className="text-center">
                        Máx 1 Km
                        <br />2 voltas
                      </td>
                      <td className="text-center">
                        Máx 6 Km
                        <br />6 voltas
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 font-semibold">
                        Longa Distância (18 anos e acima)
                      </td>
                      <td className="text-center">
                        Máx 2 Km
                        <br />4 voltas
                      </td>
                      <td className="text-center">
                        Máx 10 Km
                        <br />
                        10 voltas
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4 – NORMAS DE CONDUTA NA COMPETIÇÃO */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                4 – NORMAS DE CONDUTA NA COMPETIÇÃO
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">
                4.1 – CONDUTA NA LARGADA
              </p>
              <p className="mb-2">
                a – Na largada o atleta deverá estar posicionado na área de
                largada de acordo com a orientação do árbitro;
              </p>
              <p className="mb-2">
                b – O atleta que não estiver devidamente posicionado conforme
                orientação do árbitro (notificação com correção da infração ou
                desclassificação);
              </p>
              <p className="mb-2">
                c – A largada deverá ser dada com um sinal sonoro, se a largada
                for “queimada” deverá ser repetido três vezes o sinal sonoro;
              </p>
              <p className="mb-2">
                d – Quando houver uma largada “queimada” os atletas deverão
                voltar novamente para o ponto de partida conforme orientação do
                árbitro. O atleta que não retornar será desclassificado;
              </p>
              <p className="mb-4">
                e – O atleta que causar duas largadas “queimadas” será
                desclassificado;
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                4.2 – CONDUTA NA NATAÇÃO
              </p>
              <p className="mb-2">
                a – O atleta pode usar qualquer estilo para mover-se na água;
              </p>
              <p className="mb-2">
                b – O atleta pode descansar, segurando um objeto inanimado tal
                como uma bóia. Entretanto, um atleta não pode utilizar objetos
                inanimados a fim de obter vantagem (desclassificação);
              </p>
              <p className="mb-2">
                c – Em caso de emergência, o atleta deverá levantar o braço
                acima da cabeça e pedir ajuda. Recebido ajuda, o mesmo deverá se
                retirar da competição, comunicando o fato a um dos árbitros;
              </p>
              <p className="mb-2">
                d – O atleta deve usar obrigatoriamente a touca fornecida pela
                organização da Competição. (notificação com correção da infração
                ou desclassificação);
              </p>
              <p className="mb-2">
                e – Em caso de perda da mesma durante a natação de forma não
                intencional, o atleta não será penalizado;
              </p>
              <p className="mb-2">
                f – Não será permitido unhas grandes, jóias, pé de patos,
                palmares ou qualquer meio de flutuação e propulsão que traga
                vantagem desleal (notificação com correção da infração ou
                desclassificação);
              </p>
              <p className="mb-2">g – É permitido clipe de nariz;</p>
              <p className="mb-2">
                h – O uso da roupa de neoprene será determinada de acordo com a
                seguinte tabela:
              </p>

              <div className="bg-gray-50 p-4 rounded-lg my-4 overflow-x-auto">
                <p className="font-semibold mb-2">TRIATHLON OLÍMPICO</p>
                <p className="mb-2">Para a elite e sub 23:</p>
                <table className="w-full text-sm mb-4">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Distâncias</th>
                      <th className="text-center py-2">
                        Uso Proibido acima de
                      </th>
                      <th className="text-center py-2">
                        Uso Obrigatório abaixo de
                      </th>
                      <th className="text-center py-2">
                        Permanência máxima na água
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">Até 1500m</td>
                      <td className="text-center">20ºC</td>
                      <td className="text-center">14ºC</td>
                      <td className="text-center">20 min</td>
                    </tr>
                  </tbody>
                </table>

                <p className="mb-2">Para as categorias por faixas etárias:</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Distâncias</th>
                      <th className="text-center py-2">
                        Uso Proibido acima de
                      </th>
                      <th className="text-center py-2">
                        Uso Obrigatório abaixo de
                      </th>
                      <th className="text-center py-2">
                        Permanência máxima na água
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">Até 1500m</td>
                      <td className="text-center">22ºC</td>
                      <td className="text-center">14ºC</td>
                      <td className="text-center">40 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-2">
                i – Um comunicado sobre o uso de roupas de neoprene será feito
                no Congresso Técnico, ou até 1 (uma) hora antes da largada pelo
                Árbitro Geral;
              </p>
              <p className="mb-2">
                j – Se as mudanças no tempo comandarem, ou por segurança o
                Árbitro Geral, poderá alterar os limites no uso da roupa de
                neoprene bem como definir a sua utilização até uma hora antes da
                largada;
              </p>
              <p className="mb-2">
                k – A roupa de neoprene não pode exceder a espessura de 5
                milímetros. Não é permitido o uso de apenas a parte inferior da
                roupa ou aquelas que vão somente até a altura do joelho
                (desclassificação);
              </p>
              <p className="mb-2">
                l – O atleta deverá, obrigatoriamente, contornar as bóias de
                marcação do percurso conforme determinado pela organização da
                competição (notificação com correção da infração, acréscimo de
                tempo ou desclassificação);
              </p>
              <p className="mb-4">
                m – Todo atleta que ultrapassar o ponto de cronometragem da
                natação, em direção a transição, não mais poderá retornar a
                etapa de natação.(desclassificação)
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                4.3 – CONDUTA NO CICLISMO
              </p>
              <p className="mb-4">
                A Federação Gaúcha de Triathlon no Estado do Rio Grande do Sul
                está adotando a flexibilização das regras:
              </p>
              <p className="mb-2">
                Do equipamento do ciclismo, podendo o atleta competir nos
                eventos da Federação desconsiderando o item a) I, XIII, XIV, XV.
                Sendo que o atleta assume a responsabilidade por estar
                competindo com tais equipamentos.
              </p>
              <p className="mb-4">
                Do vácuo, liberado entre atletas masculino e feminino, do mesmo
                sexo, das categorias e elite, desconsiderando os itens s e t.
              </p>
              <p className="mb-4">
                Para competição de nível nacional ou em outros estados os
                atletas deverão seguir a regra de conduta no ciclismo.
              </p>

              <p className="mb-2">
                a) A bicicleta deve possuir as seguintes características,
                (desclassificação):
              </p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>
                  I. Ter um padrão tradicional, construída diretamente ao redor
                  de um quadro triangular principal, onde os elementos tubulares
                  poderão ter a forma redonda, oval, aplainada ou em gota;
                </li>
                <li>
                  II. Não mais do que 2 (dois) metros de comprimento e 50
                  (cinqüenta) centímetros de largura para as categorias elite,
                  Junior e Sub 23 e 75 centímetros de largura para as categorias
                  de faixa etárias;
                </li>
                <li>
                  III. Medir, no mínimo, 24 (vinte e quatro) cm do solo até o
                  centro do eixo do movimento central;
                </li>
                <li>
                  IV. Não podem ter carenagens que reduzam a resistência do ar;
                </li>
                <li>
                  V. As rodas devem ser do mesmo tamanho e, construídas com
                  raios ou paletas. Em competições de longa distância na roda
                  traseira são permitidas coberturas porém este critério pode
                  ser mudado pelo Árbitro Geral se houver muito vento. Nenhuma
                  roda pode conter mecanismos capazes de acelerá-las, tais como
                  pesos, etc.;
                </li>
                <li>VI. Deve ter freio em cada roda;</li>
                <li>VII. As extremidades do guidom devem estar tampadas;</li>
                <li>
                  VIII. O avanço do guidon não pode ter parafusos salientes ou
                  orifícios destampados;
                </li>
                <li>IX. Pneus bem colados em ótimas condições;</li>
                <li>X. Caixas de direção e caixa de centro bem apertadas;</li>
                <li>XI. Canote do banco apertado;</li>
                <li>XII. Rodas bem ajustadas;</li>
                <li>
                  XIII. O guidom tem que ser o guidom clássico (guidom de
                  ciclista, speed) ;
                </li>
                <li>
                  XIV. O clip não poderá estar além de 15 (quinze) centímetros à
                  frente do eixo da roda dianteira, e não mais longo que a linha
                  dianteira das manetes de freio;
                </li>
                <li>
                  XV. Não será permitido nenhum objeto na extremidade do clip,
                  que deverá ser curvados para dentro, sendo permitidos apoios
                  de cotovelos;
                </li>
                <li>
                  XVI. A parte frontal do selim não poderá exceder em mais de 5
                  cm uma linha vertical centrada no eixo do movimento central da
                  bicicleta, e nem poderá ultrapassar na parte de trás em mais
                  de 15 cm;
                </li>
                <li>
                  XVII. Bicicletas e equipamentos considerados não tradicionais
                  e pouco utilizados e que não cumpram com as características
                  mencionadas nos itens anteriores serão considerados
                  irregulares, e somente o Árbitro Geral poderá autorizar a sua
                  utilização;
                </li>
                <li>
                  XVIII. No caso de Competições com proibição de vácuo os itens
                  I, XIII e XIV não se aplicam.
                </li>
              </ul>

              <p className="mb-2">
                b) O capacete tem que ser duro, com no mínimo 2 cm de espessura,
                coberto por material sintético, que deverá ser preso à cabeça
                por tiras de material sintético de boa qualidade, providas de
                fechos de segurança. Capacetes com elásticos ou sem fecho de
                segurança são proibidos (desclassificação);
              </p>
              <p className="mb-2">
                c) É proibido a retirada da bicicleta do cavalete antes de
                colocar na cabeça o capacete e afivelá-lo (notificação com
                parada obrigatória e correção da infração, acréscimo de tempo ou
                desclassificação);
              </p>
              <p className="mb-2">
                d) É proibido pedalar com o capacete desafivelado (notificação
                com parada obrigatória e correção da infração ou
                desclassificação);
              </p>
              <p className="mb-2">
                e) Somente poderá desafivelar o capacete após a colocação da
                bicicleta no cavalete (notificação com parada obrigatória e
                correção da infração, acréscimo de tempo ou desclassificação);
              </p>
              <p className="mb-2">
                f) O número da bicicleta deverá estar obrigatoriamente no local
                determinado (notificação com correção da infração ou
                desclassificação);
              </p>
              <p className="mb-2">
                g) É da responsabilidade do atleta manter-se no percurso
                (notificação com parada obrigatória e correção da infração,
                acréscimo de tempo ou desclassificação);
              </p>
              <p className="mb-2">
                h) É da responsabilidade do atleta o controle da contagem de
                suas voltas (desclassificação);
              </p>
              <p className="mb-2">
                i) É proibido pedalar com o torso nu (desclassificação);
              </p>
              <p className="mb-2">
                j) É proibido progredir sem a bicicleta (desclassificação);
              </p>
              <p className="mb-2">
                k) O atleta que estiver na frente não deve bloquear os outros, é
                proibida a utilização do zigue zague para impedir a
                ultrapassagem do oponente (notificação com parada obrigatória,
                acréscimo de tempo ou desclassificação);
              </p>
              <p className="mb-2">
                l) Não será permitida a troca de bicicletas (desclassificação);
              </p>
              <p className="mb-2">
                m) Será permitida a troca de rodas ou pneus, porém a troca de
                rodas será na área de transição, que somente será permitida se o
                próprio atleta tiver rodas sobressalentes (desclassificação);
              </p>
              <p className="mb-2">
                n) No caso de troca de rodas, pneus ou acontecer qualquer
                problema mecânico com a bicicleta, não será permitido ajuda
                externa. O atleta deverá resolver o problema sozinho e com seu
                material (desclassificação);
              </p>
              <p className="mb-2">
                o) O atleta deve seguir os regulamentos de tráfego (notificação
                com parada obrigatória e correção da infração, acréscimo de
                tempo ou desclassificação);
              </p>
              <p className="mb-2">
                p) Qualquer atleta que aparentar aos árbitros ou ao médico da
                competição, perigo para ele mesmo ou outros, poderá ser
                desclassificado e retirado da Competição. Ex.: falta de
                coordenação motora ou imperícia com sua bicicleta;
              </p>
              <p className="mb-2">
                q) O médico da competição poderá solicitar a retirada, de todo
                atleta que estiver causando risco para sua integridade física ou
                de terceiros;
              </p>
              <p className="mb-2">
                r) Será permitida a utilização do vácuo, salvo em situações que
                o Árbitro Geral determinar o contrário por medida de segurança;
              </p>
              <p className="mb-2">
                s) Vácuo somente é permitido entre atletas do mesmo sexo
                (advertência verbal, notificação com parada obrigatória,
                acréscimo de tempo ou desclassificação);
              </p>
              <p className="mb-2">
                t) No caso de provas com vácuo liberado os atletas pedalando em
                pelotão não poderão fazer uso do Clip e deverão estar com as
                mãos nas manetes do freio ou guidom, exceto aqueles que
                estiverem à frente do pelotão (advertência verbal, notificação
                com parada obrigatória, acréscimo de tempo ou desclassificação);
              </p>
              <p className="mb-2">
                u) No caso da proibição do vácuo, os atletas terão que manter
                uma distância de 5 metros frontal e 2 metros lateral em relação
                ao outro atleta. Um atleta poderá entrar na zona de vácuo de
                outro atleta, mas deve ser visto progredindo através daquela
                zona. O máximo de 15 segundos será permitido para ultrapassar
                através da zona de vácuo de outro atleta. (advertência verbal,
                notificação com parada obrigatória, acréscimo de tempo ou
                desclassificação);
              </p>
              <p className="mb-2">
                v) Um atleta é ultrapassado, quando a roda dianteira do outro
                atleta estiver à frente da sua roda dianteira;
              </p>
              <p className="mb-2">
                w) Não é permitido pegar vácuo de veículos (notificação com
                parada obrigatória, acréscimo de tempo ou desclassificação);
              </p>
              <p className="mb-2">
                x) Não é permitida a utilização de container de vidro
                (caramanholas), bem como usar qualquer tipo de equipamento ou
                acessório que possa colocar em risco outros competidores ou a si
                próprio. Ex.: Fones de ouvido, recipientes de vidro, walkman e
                similares, jóias e etc (notificação com correção da infração, ou
                desclassificação);
              </p>
              <p className="mb-4">
                y) Todo atleta que ultrapassar o ponto de cronometragem da saída
                da transição para a etapa de corrida, não mais poderá retornar a
                etapa de ciclismo.(desclassificação)
              </p>

              <p className="font-semibold mt-4 mb-2">
                MONTAIN BIKE, a bicicleta deve possuir as seguintes
                características, (desclassificação):
              </p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>
                  I. De um padrão tradicional, construída diretamente ao redor
                  de um quadro triangular principal;
                </li>
                <li>II. Não poderá ter clip, somente barende;</li>
                <li>
                  III. Pneu de espessura igual ou superior a 1,5 polegadas.
                </li>
              </ul>

              <p className="font-semibold text-lg mt-4 mb-2">
                4.4 – CONDUTA NA CORRIDA
              </p>
              <p className="mb-2">
                a) É da responsabilidade do atleta manter-se no percurso
                (notificação com parada obrigatória, correção da infração,
                acréscimo de tempo ou desclassificação);
              </p>
              <p className="mb-2">
                b) É da responsabilidade do atleta o controle da contagem de
                suas voltas (desclassificação);
              </p>
              <p className="mb-2">
                c) O atleta pode correr ou caminhar não sendo permitido
                engatinhar ou se arrastar (desclassificação);
              </p>
              <p className="mb-2">
                d) Não é permitida outra forma de deslocamento que não seja o
                bipedismo (desclassificação);
              </p>
              <p className="mb-2">
                e) O atleta não poderá correr com o torso nu, descalço,
                (notificação com parada obrigatória e correção da infração, ou
                desclassificação);
              </p>
              <p className="mb-2">
                f) O atleta não poderá correr portando os óculos ou a touca de
                natação (notificação com correção da infração, parada
                obrigatória, acréscimo de tempo ou desclassificação);
              </p>
              <p className="mb-2">
                g) O número de competição deve ser colocado na parte da frente
                do corpo, entre o peito e a cintura de forma que fique bem
                visível (notificação com parada obrigatória, correção da
                infração ou desclassificação);
              </p>
              <p className="mb-2">
                h) O número fornecido pela organização não pode ser recortado ou
                sofrer qualquer alteração; (desclassificação)
              </p>
              <p className="mb-2">
                i) Qualquer atleta que aparentar aos árbitros ou ao médico da
                competição, perigo para ele mesmo ou outros, poderá ser
                desclassificado e retirado da Competição. Ex.: falta de
                coordenação motora;
              </p>
              <p className="mb-2">
                j) Não é permitido usar qualquer tipo de equipamento ou
                acessório que possam colocar em risco outros competidores ou a
                si próprio. Ex.: Fones de ouvido, recipientes de vidro, walkman
                e jóias, etc. (notificação com parada obrigatória, correção da
                infração ou desclassificação);
              </p>
              <p className="mb-2">
                k) O atleta deve seguir os regulamentos de tráfego (notificação
                com parada obrigatória e correção da infração, acréscimo de
                tempo ou desclassificação);
              </p>
              <p className="mb-4">
                l) O atleta não poderá receber ritmo de pessoa externa a
                competição (pacing) (desclassificação).
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                4.5 – CONDUTA NA ÁREA DE TRANSIÇÃO
              </p>
              <p className="mb-2">
                a) Será pré-estabelecido horário de abertura e fechamento da
                Área de Transição, o atleta que não comparecer neste horário
                será considerado ausente (desclassificação);
              </p>
              <p className="mb-2">
                b) Após a entrada na área de transição depois da vistoria do
                equipamento, o atleta não poderá mais sair da área de transição
                com seu material (notificação com correção da infração ou
                desclassificação);
              </p>
              <p className="mb-2">
                c) O atleta deve obrigatoriamente usar apenas o espaço a ele
                destinado (notificação com correção da infração, ou
                desclassificação);
              </p>
              <p className="mb-2">
                d) É expressamente proibido pedalar na Área de Transição
                (notificação com parada obrigatória, acréscimo de tempo ou
                desclassificação);
              </p>
              <p className="mb-2">
                e) O atleta não deve impedir o progresso de outros competidores
                na Área de Transição (notificação com parada obrigatória, ou
                desclassificação);
              </p>
              <p className="mb-2">
                f) O atleta não deve mexer ou interferir no equipamento de
                outros competidores (notificação com correção da infração,
                parada obrigatória, ou desclassificação);
              </p>
              <p className="mb-2">
                g) Durante a competição para o atleta tirar a bicicleta do local
                reservado a ele, o capacete deverá estar na cabeça e afivelado.
                O atleta só poderá desafivelar o capacete e tirar da cabeça após
                colocar a bicicleta novamente no local reservado a ele
                (notificação com parada obrigatória e correção da infração,
                acréscimo de tempo ou desclassificação);
              </p>
              <p className="mb-2">
                h) O atleta deve montar e desmontar de sua bicicleta a partir da
                faixa pré-estabelecida e devidamente marcada (notificação com
                parada obrigatória e correção da infração, acréscimo de tempo ou
                desclassificação);
              </p>
              <p className="mb-2">
                i) O atleta deverá depositar na área de transição o óculos e a
                touca de natação e a roupa de neoprene (notificação com correção
                da infração, parada obrigatória, acréscimo de tempo ou
                desclassificação);
              </p>
              <p className="mb-2">
                j) Só é permitido a presença de pessoas devidamente autorizadas
                na Área de Transição;
              </p>
              <p className="mb-2">
                k) O atleta só poderá retirar seu material da Área de Transição
                após o término da Competição, mediante a apresentação de sua
                numeração ou com autorização do Árbitro Geral. A não passagem
                pela súmula de retirada do material, causará sua
                desclassificação;
              </p>
              <p className="mb-4">
                l) Após 40 minutos da autorização da retirada do material da
                Área de Transição, todo material que não tiver sido retirado,
                será recolhido pelo árbitro de transição, e será cobrada taxa de
                transporte e armazenagem do material.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                4.6 – CONDUTA NA CHEGADA
              </p>
              <p className="mb-2">
                a) Será considerada a chegada de um atleta, quando qualquer
                parte do torso do atleta cruzar a linha de chegada
                verticalmente;
              </p>
              <p className="mb-2">
                b) O atleta deverá obrigatoriamente cruzar a linha de chegada
                entre o pórtico de chegada (desclassificação);
              </p>
              <p className="mb-2">
                c) Ao cruzar a linha de chegada o atleta assume o seu resultado
                final, não havendo qualquer possibilidade do atleta retornar a
                Competição novamente. (desclassificação);
              </p>
              <p className="mb-2">
                d) O atleta que tiver atitude não desportiva desmerecendo a
                classificação dos seus adversários (desclassificação);
              </p>
              <p className="mb-2">
                e) Se houver empate na chegada entre dois ou mais atletas, a
                classificação da chegada será decidida pelo Árbitro de Chegada,
                que poderá recorrer aos recursos de foto ou vídeo para dar seu
                parecer final.
              </p>
            </div>

            {/* 5 – ARBITRAGEM */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                5 – ARBITRAGEM
              </h2>
              <p className="mb-4">
                A função dos árbitros é conduzir a competição, fazendo cumprir
                as regras de competição da FGTri. Os árbitros são classificados
                da seguinte forma:
              </p>

              <p className="mb-2">
                a) Delegado Técnico da FGTri (DT): Indicado pela FGTri, tem como
                função assegurar que todos os pormenores do Manual de Regras da
                FGTri sejam rigorosamente cumpridos. Tendo soberania para
                tomadas de decisão antes, durante e depois da Competição;
              </p>
              <p className="mb-2">
                b) Árbitro Geral: coordena supervisiona, determina, controla,
                certifica, todos os árbitros e pronuncia o julgamento final
                sobre a violação das regras apontadas pelos árbitros, bem como
                assegurar que todos os pormenores do Manual de Regras da FGTri
                sejam rigorosamente aplicados. Tendo soberania para tomadas de
                decisão antes, durante e depois da Competição;
              </p>
              <p className="mb-2">
                c) Árbitros: todos aqueles que estiverem designados para
                trabalhar juntamente com o Árbitro Geral. Cada setor terá um
                árbitro, ou seja: árbitro de natação, árbitro de transição,
                árbitro de ciclismo, árbitro de corrida, árbitro de
                cronometragem, árbitro de chegada, que são responsáveis pelo
                cumprimento do Manual de Regras da FGTri, e tantos outros
                ajudantes quantos necessários.
              </p>
            </div>

            {/* 6 – DISCIPLINA E PENALIZAÇÕES */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                6 – DISCIPLINA E PENALIZAÇÕES
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">6.1 – OBJETIVO</p>
              <p className="mb-4">
                Regulamentar os critérios de notificação, desqualificação e
                desclassificação e punição dada a um atleta quando ele deixa de
                cumprir o Manual de Regras, sendo que todos os atletas estarão
                sujeitos ao Manual de Regras desde sua inscrição na Competição
                até o encerramento oficial após a cerimônia de premiação.
              </p>
              <p className="mb-4">
                A FGTri poderá penalizar o atleta a qualquer momento, após o
                término da competição se for constatado alguma irregularidade.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                6.2 – NOTIFICAÇÃO
              </p>
              <p className="mb-2">a) Deve ser feita a notificação quando:</p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>
                  I. A violação da regra parece não intencional e pode ser
                  corrigida após a notificação;
                </li>
                <li>
                  II. Um árbitro perceber que a violação está para acontecer;
                </li>
                <li>
                  III. O competidor esteja fazendo uso abusivo da linguagem.
                </li>
              </ul>
              <p className="mb-2">
                b) Não é obrigatório que um árbitro notifique um atleta, antes
                da desqualificação ou desclassificação;
              </p>
              <p className="mb-2">
                c) O propósito de uma notificação é alertar os atletas sobre
                possíveis violações de regras, e promover uma atitude
                preventiva;
              </p>
              <p className="mb-2">
                d) O árbitro da Competição transmite a notificação verbalmente
                ou através de um apito. Em seguida ele fala o número do atleta
                notificado e mostra o cartão amarelo. O número do atleta
                notificado é anotado;
              </p>
              <p className="mb-2">
                e) Se um árbitro não conseguir transmitir a notificação durante
                a etapa que ocorreu a irregularidade, esta poderá ser feita a
                qualquer momento da Competição;
              </p>
              <p className="mb-2">
                f) Quando um atleta for advertido com cartão amarelo, deverá
                parar de uma maneira segura e seguir as instruções do árbitro,
                Na etapa do ciclismo o atleta que for punido com Parada
                Obrigatória terá que desmontar de sua bicicleta em local
                determinado pelo árbitro, colocando os dois pés no chão de um
                mesmo lado da bicicleta e aguardar o sinal do árbitro para que
                possa montar na bicicleta e seguir na competição. O árbitro
                determinará o tempo que o atleta ficará parado (parada
                obrigatória). A Parada Obrigatória poderá ser cobrado quando o
                atleta estiver fazendo sua transição;
              </p>
              <p className="mb-4">
                g) Caso o árbitro não tenha condições de penalizar o atleta
                durante a competição, esta penalização poderá ser aplicada
                através do acréscimo de tempo ao tempo final do atleta, conforme
                avaliação do Árbitro Geral da Competição.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                6.3 – DESQUALIFICAÇÃO
              </p>
              <p className="mb-2">
                A desqualificação será aplicada nas seguintes situações e não
                limitadas a estas:
              </p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>a) Quando os requisitos de inscrição não são cumpridos;</li>
                <li>
                  b) Quando os requisitos de abertura e fechamento de Área de
                  Transição não são cumpridos;
                </li>
                <li>
                  c) Quando os requisitos de equipamentos não são cumpridos.
                </li>
              </ul>

              <p className="font-semibold text-lg mt-4 mb-2">
                6.4 – DESCLASSIFICAÇÃO
              </p>
              <p className="mb-2">
                A desclassificação será aplicada, quando uma regra tiver sido
                violada.
              </p>
              <p className="mb-2">
                a) O árbitro da Competição transmite a desclassificação
                verbalmente ou através de um apito. Em seguida ele fala o número
                do atleta desclassificado e mostra o cartão vermelho. O número
                do atleta desclassificado é anotado;
              </p>
              <p className="mb-2">
                b) Se um árbitro não conseguir transmitir a desclassificação
                durante a Competição, esta poderá ser feita após o término da
                mesma;
              </p>
              <p className="mb-2">
                c) Um competidor pode ser desclassificado ou penalizado pelas
                seguintes violações (mas pode ser também por outras):
              </p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>
                  I. Recusar-se a seguir as instruções dos árbitros de
                  Competição;
                </li>
                <li>II. Violar o regulamento de tráfego;</li>
                <li>III. Não seguir o percurso pré-estabelecido;</li>
                <li>
                  IV. Sair do percurso por motivo de segurança, e não retornar
                  pelo ponto de saída;
                </li>
                <li>
                  V. Bloquear ou obstruir ou interferir no progresso de outro
                  competidor propositadamente;
                </li>
                <li>VI. Contato desleal;</li>
                <li>
                  VII. Não estiver usando os números de competição fornecidos
                  pela organização. Alterá-los, recortá-los ou tampar o nome dos
                  patrocinadores que possam estar impressos no mesmo. Durante a
                  etapa do ciclismo deve ser usado o número da bicicleta, na
                  etapa da corrida o número deve ser usado na parte da frente do
                  atleta entre o peito e a cintura;
                </li>
                <li>
                  VIII. Usar equipamentos que possam colocar em risco outros
                  competidores ou a si próprio. Ex.: Fones de ouvido,
                  recipientes de vidro, walkman e jóias, etc.;
                </li>
                <li>
                  IX. Usar equipamento sem autorização que possa promover uma
                  vantagem, ou que possa promover perigo a si mesmo ou aos
                  outros;
                </li>
                <li>
                  X. Ter atitude não desportiva, fazer uso da linguagem vulgar
                  ou de baixo calão e gestos inadequados (também passível de
                  pedido de suspensão);
                </li>
                <li>
                  XI. Receber ajuda externa que constitua uma vantagem injusta;
                </li>
                <li>
                  XII. Descartar equipamento ou artigos pessoais no percurso da
                  Competição. Todo o equipamento deve ser descartado na área de
                  transição no local determinado para cada atleta ou em um local
                  seguro e de uma forma segura, fora do percurso da Competição
                  ou conforme determinação do Árbitro.
                </li>
              </ul>

              <p className="font-semibold text-lg mt-4 mb-2">
                6.5 – DIREITO A RECURSOS
              </p>
              <p className="mb-4">
                O competidor taxado com violação a regra tem direito de apelar
                com “Recurso”, através do representante de sua Equipe ou
                representante dos atletas se for atleta avulso, exceto no caso
                de Questão de Julgamento dos árbitros. Veja seção Recursos.
              </p>
              <p className="mb-4">
                Parágrafo Único: Somente quem participou do Congresso Técnico
                tem direito a fazer ou solicitar Recurso.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                6.6 – JÚRI DE COMPETIÇÃO
              </p>
              <p className="mb-4">
                Qualquer Recurso será analisado em primeira instância pelo Júri
                de Competição composto por (5) cinco auditores: Diretoria da
                FGTri, Delegado Técnico, Árbitro Geral, Representante do
                organizador da Prova e Representante dos Atletas. O Júri de
                Competição aprecia e faz-se pronunciar sobre os Recursos
                apresentados. Aplicará sanção decorrente a violações do Manual
                de Regras durante a competição e constantes em súmulas ou
                documentos dos árbitros e ainda decorrente de infringência ao
                regulamento específico da respectiva competição em procedimento
                sumário, observando os seguintes princípios:
              </p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>
                  a) Assegurar ampla defesa e o contraditório, creditando igual
                  peso às evidências e testemunhos prestados por qualquer um que
                  seja;
                </li>
                <li>
                  b) Creditar igual peso às evidências e testemunhos prestados
                  por qualquer um que seja;
                </li>
                <li>
                  c) Reconhecer que um testemunho honesto pode variar e ser
                  conflitante com o resultado de observação pessoal ou
                  recordação;
                </li>
                <li>
                  d) Usar de toda percepção até que todas as evidências sejam
                  avaliadas;
                </li>
                <li>
                  e) Reconhecer que um atleta é inocente até que as alegadas
                  violações possam ser estabelecidas de forma inteiramente
                  satisfatória pelo Júri de Competição.
                </li>
              </ul>

              <p className="font-semibold text-lg mt-4 mb-2">6.7 – SUSPENSÃO</p>
              <p className="mb-2">
                Essa penalidade significa que o atleta não poderá participar em
                competições sancionadas pela FGTri ou competições sancionadas
                pelas entidades direta ou indiretamente filiadas a ela, bem como
                em Competições promovidas pela CBTri ou pelas Federações a ela
                filiada, durante o período de suspensão estabelecida.
              </p>
              <p className="mb-2">
                Um competidor será suspenso por (mas não limitado a):
              </p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>I. Conduta não desportiva;</li>
                <li>
                  II. Fraude, isto é, entrar com um nome ou idade que não a do
                  atleta, falsificando uma declaração, ou dando uma informação
                  falsa;
                </li>
                <li>III. Violações repetidas das regras da FGTri;</li>
                <li>
                  IV. Uso de substância ou práticas que artificialmente aumentem
                  a performance (doping);
                </li>
                <li>
                  V. Outros atos não especificados neste Manual e devidamente
                  avaliados pelo TJD;
                </li>
                <li>
                  VI. O atleta poderá ser suspenso pelo Júri de Competição por
                  um prazo não superior a 15 (quinze) dias. Tempo suficiente
                  para a convocação da Comissão Disciplinar que, em segunda
                  instância, avaliará a punição e determinará a duração da
                  suspensão.
                </li>
              </ul>

              <p className="font-semibold text-lg mt-4 mb-2">6.8 – EXPULSÃO</p>
              <p className="mb-2">
                Esta penalidade só pode ser declarada pelo Tribunal de Justiça
                Desportiva e determina que o atleta não mais poderá participar
                de competições sancionadas pela FGTri. Pelas entidades a ela
                filiadas direta ou indiretamente, bem como em Competições
                promovidas pela CBTri ou pelas Federações a ela filiada, ou
                ainda de competições promovidas por Federações Nacionais
                filiadas a ITU.
              </p>
              <p className="mb-2">
                a) Um atleta será expulso (mas não restrito a):
              </p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>
                  I. Uma Segunda ofensa por droga como descrito nas Regras para
                  controle Anti-Doping do COI e COB;
                </li>
                <li>II. Um ato desportivo incomum ou violento;</li>
                <li>
                  III. De forma deliberada, repetidamente, desrespeitar os
                  regulamentos da FGTri;
                </li>
              </ul>

              <p className="font-semibold text-lg mt-4 mb-2">
                6.9 – NOTIFICAÇÃO DE INFRAÇÃO
              </p>
              <p className="mb-2">
                a) Quando um atleta for suspenso ou expulso o presidente da
                FGTri notificará a CBTri que informará as Federações, o COB e a
                ITU por escrito no prazo máximo de 30 dias;
              </p>
              <p className="mb-4">
                b) O atleta quando receber uma advertência em uma Competição
                poderá receber uma notificação por escrito com objetivo de
                informar qual o item do regulamento infringido e quais os
                procedimentos que ele deverá tomar para que não haja
                reincidência.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                6.10 – REINTEGRAÇÃO
              </p>
              <p className="mb-4">
                A Equipe do atleta suspenso, ou representante dos atletas em
                caso de atleta avulso, deverá solicitar através de ofício, ao
                Presidente da FGTri, a reintegração do atleta após o término de
                sua punição.
              </p>
            </div>

            {/* 7 – RECURSOS */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                7 – RECURSOS
              </h2>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.1 – PRIMEIRA INSTÂNCIA
              </p>
              <p className="mb-2">
                a) O “Recurso” é uma reclamação formal de uma Equipe ou um
                competidor contra a conduta de um outro competidor, árbitro ou
                ainda contra condições de competição;
              </p>
              <p className="mb-2">
                b) Em primeira instância, o “Recurso” será encaminhado ao Júri
                de Competição;
              </p>
              <p className="mb-2">
                c) Recursos somente poderão ser apresentados pelo representante
                da Equipe ou pelo representante dos atletas se for atleta
                avulso, em formulário próprio e entregues ao Árbitro Geral;
              </p>
              <p className="mb-2">
                d) O Árbitro Geral, caso o “Recurso” não se enquadre no critério
                de “Validade de um Recurso” poderá indeferí-lo sem ter a
                necessidade de encaminhá-lo ao Júri de Competição;
              </p>
              <p className="mb-2">
                e) “Recursos” referentes a inelegibilidade de um competidor
                deverão ser entregues ao Árbitro Geral. O Competidor afetado
                poderá competir. A decisão do recurso será tomada antes do
                anúncio do resultado final;
              </p>
              <p className="mb-2">
                f) “Recursos” de um competidor contra outro, de equipamentos
                utilizados na competição ou contra a arbitragem devem ser
                entregues ao Árbitro Geral no máximo 30 minutos após a chegada
                do último atleta;
              </p>
              <p className="mb-2">
                g) “Recurso” referente ao percurso, devem ser entregues ao
                Árbitro Geral até 120 minutos após o Congresso Técnico ou 24
                horas antes da largada da Competição;
              </p>
              <p className="mb-2">
                h) “Recursos” contra a Cronometragem devem ser entregues Árbitro
                Geral, até 30 minutos após a apresentação dos resultados
                extra-oficiais;
              </p>
              <p className="mb-2">
                i) Juntamente ao “Recurso” deve-se fazer um pagamento
                compulsório de 4 (quatro) vezes o valor da taxa de federação de
                atleta por Equipe na FGTri, montante este que será devolvido
                caso o “Recurso” seja deferido;
              </p>
              <p className="mb-2">
                j) A Equipe ou o atleta avulso através do representante dos
                atletas poderá recorrer, em segunda instância, sobre a decisão
                do Júri de Competição;
              </p>
              <p className="mb-2">
                k) A Equipe ou o atleta avulso através do representante dos
                atletas terá um prazo máximo de 14 dias para recorrer, em
                segunda instância, sobre a decisão do Júri de Competição;
              </p>
              <p className="mb-4">
                l) Para encaminhar um “Recurso” para a segunda instância a
                Equipe ou o atleta avulso através do representante dos atletas,
                deverá enviar ofício ao Presidente da FGTri requerendo o
                encaminhamento, anexando ao mesmo o Formulário para Recurso.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.2 – SEGUNDA INSTÂNCIA
              </p>
              <p className="mb-4">
                À Comissão Disciplinar, segunda instância de julgamento da
                FGTri, formada por 5 (cinco) membros nomeados pelo presidente do
                TJD, cabendo julgar todos os “Recursos” que assim segue:
              </p>
              <p className="mb-2">
                a) Os “Recursos” somente serão julgados pela “Comissão
                Disciplinar” após terem sido analisados e julgados, em primeira
                instância, pelo Júri de Competição;
              </p>
              <p className="mb-2">
                b) O “Recurso” deverá ser encaminhado ao Presidente da FGTri em
                um prazo máximo de 14 dias após decisão do julgamento em
                primeira instância;
              </p>
              <p className="mb-2">
                c) Juntamente ao requerimento do “Recurso” deve-se fazer o
                pagamento de 8 (oito) vezes o valor da taxa de federação de
                atleta por Equipe na FGTri;
              </p>
              <p className="mb-2">
                d) Junto ao encaminhamento deve ser enviado o Formulário para
                Recurso devidamente preenchido;
              </p>
              <p className="mb-2">
                e) A Federação poderá recorrer, em terceira instância, sobre a
                decisão da Comissão Disciplinar;
              </p>
              <p className="mb-2">
                f) A Federação terá um prazo máximo de 14 dias para recorrer, em
                terceira instância, sobre a decisão da Comissão Disciplinar;
              </p>
              <p className="mb-4">
                g) Para encaminhar um “Recurso” para a terceira instância, a
                Equipe ou o atleta avulso através do representante dos atletas
                deverá enviar um ofício ao Presidente da FGTri requerendo o
                encaminhamento, anexando ao mesmo o Formulário para Recurso.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.3 – TERCEIRA INSTÂNCIA
              </p>
              <p className="mb-4">
                O Tribunal de Justiça Desportiva – TJD, terceira instância de
                julgamento da FGTri, formada por 9 (nove) membros que são:
              </p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>– 2 (dois) indicados pela FGTri;</li>
                <li>
                  – 2 (dois) indicados pelas Entidades de Participação do
                  Desporto;
                </li>
                <li>– 2 (dois) indicados pela OAB;</li>
                <li>
                  – 1 (um) representante dos árbitros, por estes indicados;
                </li>
                <li>
                  – 2 (dois) representantes dos atletas, por estes indicados.
                </li>
              </ul>
              <p className="mb-2">
                a) Os “Recursos” só serão julgados pela “TJD”, após ter sido
                analisado e julgado, em segunda instância, pela Comissão
                Disciplinar;
              </p>
              <p className="mb-2">
                b) O “Recurso” deverá ser encaminhado ao Presidente da FGTri em
                um prazo máximo de 14 dias após decisão do julgamento em segunda
                instância;
              </p>
              <p className="mb-2">
                c) Junto ao encaminhamento deve ser enviado o Formulário para
                Recurso devidamente preenchido;
              </p>
              <p className="mb-4">
                d) Juntamente ao requerimento do “Recurso” deve-se fazer o
                pagamento de 20 (vinte) vezes o valor da taxa de federação de
                atleta por Equipe na FGTri.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.4 – CONTEÚDO DE UM RECURSO
              </p>
              <ul className="list-disc pl-10 space-y-1 mb-4">
                <li>
                  a) Nome da Entidade ou do Representante dos Atletas e atleta
                  requerente;
                </li>
                <li>b) Nome do atleta envolvido, se for o caso;</li>
                <li>c) Nome da competição, local e data;</li>
                <li>
                  d) Nome e endereço das pessoas envolvidas, inclusive
                  testemunhas;
                </li>
                <li>
                  e) Uma breve explanação dos fatos relativos ao “Recurso”.
                </li>
              </ul>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.5 – VALIDADE DE UM RECURSO
              </p>
              <p className="mb-4">
                O “Recurso” não poderá ser formulado contra questões de
                julgamento dos árbitros, tais como: pegar vácuo, bloquear
                adversário e conduta não desportiva.
              </p>

              <p className="font-semibold text-lg mt-4 mb-2">
                7.6 – RECURSO AO PODER JUDICIÁRIO
              </p>
              <p className="mb-4">
                O recurso ao Poder Judiciário só poderá ser impetrado após ter
                encerrado todo o processo da Justiça Desportiva.
              </p>
            </div>

            {/* 8 – CONSIDERAÇÕES FINAIS */}
            <div className="mb-8 pb-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-secondary mb-3">
                8 – CONSIDERAÇÕES FINAIS
              </h2>
              <p className="mb-4">
                As Competições terão Regulamentos Específicos, os mesmos em seu
                período de vigência, será parte integrante das Regras de
                Competição, devendo ser aplicado e cumprindo por todos.
              </p>
              <p className="mb-4">
                O não cumprimento do Regulamento dos Campeonatos Estaduais e
                Ranking da Federação, das Regras de Competição e Regulamento
                Específico é passível de notificação e encaminhamento do caso ao
                TJD.
              </p>
            </div>

            {/* Aprovação */}
            <div className="mt-8 pt-4 text-center">
              <p className="text-secondary font-semibold text-lg">
                As Regras de Competição foram aprovadas pelo Conselho Técnico em
                reunião.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default RegrasCompeticao;
