import "./SustainableEnergy.css";
import es_01_lg from "../../images/es-01-lg.png";
import es_02_lg from "../../images/es-02-lg.png";

const SustainableEnergy = () => {
  return (
    <div className="sustainable-energy-container" id="sustainableEnergy">
      <div className="sustainable-energy-content">
        <div className="sustainable-energy-header-content">
          <div className="sustainable-energy-header-bar">
            <div className="up-bar"></div>
            <div className="bottom-bar">
              <h2>
                Energia Sustentável<span>.</span>
              </h2>
            </div>
          </div>
          <div className="sustainable-energy-image">
            <img src={es_01_lg} />
          </div>
        </div>
        <div className="sustainable-energy-text-content">
          A energia sustentável, também conhecida como energia renovável, é
          aquela obtida a partir de fontes que são naturalmente reabastecidas,
          tornando-as virtualmente inesgotáveis a longo prazo. <br />
          <br />
          Duas formas notáveis de energia sustentável são a{" "}
          <b>energia eólica</b> e a <b>energia solar.</b>
          <br />
          <br />
          A energia sustentável, também conhecida como energia renovável, é
          aquela obtida a partir de fontes que são naturalmente reabastecidas,
          tornando-as virtualmente inesgotáveis a longo prazo.
          <br />
          <br />
          <br />
          <b>
            <h3>Energia Eólica:</h3>
          </b>
          <br />
          <li>
            <b>Funcionamento:</b> A energia eólica é gerada pela conversão da
            energia cinética do vento em eletricidade. Isso é feito por meio de
            turbinas eólicas que possuem lâminas que giram quando expostas ao
            vento. O movimento rotacional dessas lâminas aciona um gerador
            elétrico, produzindo eletricidade.
          </li>
          <br />
          <li>
            <b>Vantagens:</b> Não emite gases de efeito estufa durante a geração
            de eletricidade. A fonte de energia (o vento) é inesgotável. Reduz a
            dependência de fontes não renováveis.
          </li>
          <br />
          <li>
            <b>Desafios:</b> A localização geográfica é crítica; nem todos os
            lugares têm ventos consistentes o suficiente para produção
            eficiente. Impactos visuais e potenciais impactos ambientais locais.
            Variabilidade da produção dependendo das condições do vento.
          </li>
          <div className="sustainable-solar-energy-content">
            <div className="sustainable-solar-energy-image">
              <img src={es_02_lg} />
            </div>
            <div className="sustainable-solar-energy-content-bar">
              <div className="up-solar-energy-content-bar"></div>
              <div className="bottom-solar-energy-content-bar">
                <h3>
                  Energia Solar<span>.</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="sustainable-solar-energy-text-content">
            <h3><b>Funcionamento:</b></h3> 
            <br/>
            A energia solar é gerada através da
            conversão da luz solar em eletricidade. Painéis solares
            fotovoltaicos contêm células que absorvem fótons da luz solar,
            gerando uma corrente elétrica. Essa eletricidade pode ser usada
            diretamente ou armazenada em baterias para uso posterior. 
            <br/><br/>
            <b>Vantagens:</b> Energia solar é abundante e amplamente distribuída. Redução nas
            emissões de gases de efeito estufa. Baixos custos operacionais após
            a instalação. 
            <br/><br/>
            <b>Desafios:</b> A produção é afetada pela disponibilidade de
            luz solar. Os custos iniciais de instalação de painéis solares podem
            ser altos. A eficiência dos painéis solares pode ser afetada por
            condições climáticas e poluição atmosférica. Ambas as formas de
            energia são cruciais para a transição para um sistema de energia
            mais sustentável e com menor impacto ambiental. A pesquisa e o
            desenvolvimento contínuos têm levado a avanços significativos na
            eficiência e na redução de custos dessas tecnologias, tornando-as
            cada vez mais competitivas em comparação com fontes de energia
            tradicionais. O uso combinado de diferentes fontes de energia
            sustentável é frequentemente chamado de "mix energético" e é uma
            estratégia comum para garantir uma oferta constante e confiável de
            eletricidade.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainableEnergy;
