import "./Recycle.css";
import rc_01_lg from "../../images/rc-01-lg.png";
import rc_02_lg from "../../images/rc-02-lg.png";

const Recycle = () => {
  return (
    <div className="recycle-container" id="recycle">
      <div className="recycle-content">
        <div className="recycle-header-content">
          <div className="recycle-image">
            <img className="recycle-image-01" src={rc_01_lg} />
            <img className="recycle-image-02" src={rc_02_lg} />
          </div>
          <div className="recycle-header-bar">
            <div className="recycle-up-bar"></div>
            <div className="recycle-bottom-bar">
              <h2>
                Reciclagem<span>.</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="recycle-text-content">
          <h3>Promovendo a Sustentabilidade: Os Cinco Tipos de Reciclagem.</h3>
          <br />
          A reciclagem desempenha um papel crucial na promoção da
          sustentabilidade ambiental, reduzindo a quantidade de resíduos e
          preservando os recursos naturais. Este processo abrangente envolve a
          reutilização de materiais diversos, sendo classificado em cinco
          categorias principais.
          <br />
          <br />
          <b>Reciclagem de Papel:</b> A reciclagem de papel é uma prática
          fundamental, abrangendo jornais, revistas, caixas de papelão e outros
          produtos derivados. Coletar e processar papel usado contribui não
          apenas para a conservação de árvores, mas também para a redução da
          energia necessária na produção de papel virgem.
          <br />
          <br />
          <b>Reciclagem de Plástico:</b> A problemática dos plásticos tem
          ganhado destaque, e a reciclagem desse material é essencial para
          mitigar os impactos ambientais. Diferentes tipos de plásticos são
          classificados através de códigos de reciclagem, permitindo a separação
          eficiente e a criação de novos produtos plásticos, minimizando a
          poluição e o desperdício.
          <br />
          <br />
          <b>Reciclagem de Vidro:</b> A reciclagem de vidro é uma prática
          consagrada, envolvendo a coleta e o derretimento de recipientes de
          vidro descartados. Esse processo não apenas conserva recursos
          naturais, mas também reduz a emissão de gases de efeito estufa
          associados à produção de vidro a partir de matérias-primas virgens.
          <br />
          <br />
          <b>Reciclagem de Metais:</b> Metais como alumínio e aço podem ser reciclados repetidamente sem
          perder suas propriedades. A reciclagem de metais reduz a necessidade
          de mineração, economiza energia e diminui as emissões de carbono,
          contribuindo significativamente para a preservação do meio ambiente.
          <br />
          <br />
          <b>Reciclagem de Resíduos Orgânicos:</b> Os resíduos orgânicos, como
          restos de comida e materiais de jardim, podem ser reciclados por meio
          de compostagem ou produção de biogás. Além de reduzir a quantidade de
          resíduos em aterros sanitários, a reciclagem de resíduos orgânicos
          gera fertilizantes naturais que podem ser utilizados na agricultura.
          <br/><br/>
          Em síntese, a reciclagem é uma prática multifacetada que contribui
          para a preservação do planeta. Ao adotarmos esses cinco tipos de
          reciclagem em nossa vida cotidiana, podemos efetivamente minimizar a
          pressão sobre os recursos naturais e construir um futuro mais
          sustentável para as gerações vindouras. Cada pequeno gesto de
          reciclagem é um passo importante em direção a um ambiente mais
          saudável e equilibrado.
        </div>
      </div>
    </div>
  );
};

export default Recycle;
