import './Carrosel.css';
import skip from './skip.png';

function Carrosel() {
    return (
        <div className="Slider">
            <div className="Linha">
                <div className="Cor">
                    <div className="ColumnBar"></div>
                </div>
                <div className="Container">
                    <div className="NomeBolinha">
                        <div className="Nome">CORAL</div>
                        <div className="Bolinha"></div>
                    </div>
                    <div className="Descricao">Linha 7</div>
                    <div className="Situacao">Operante</div>
                </div>
            </div>
            <div className="Linha">
                <div className="Cor">
                    <div className="ColumnBar1"></div>
                </div>
                <div className="Container">
                    <div className="NomeBolinha">
                        <div className="Nome1">RUBY</div>
                        <div className="Bolinha"></div>
                    </div>
                    <div className="Descricao">Linha 12</div>
                    <div className="Situacao">Operante</div>
                </div>
            </div>
            <div className="Linha">
                <div className="Cor">
                    <div className="ColumnBar2"></div>
                </div>
                <div className="Container">
                    <div className="NomeBolinha">
                        <div className="Nome2">JADE</div>
                        <div className="Bolinha"></div>
                    </div>
                    <div className="Last">Linha 9</div>
                    <div className="Skip" ><img src={skip} alt="skip" width={15} height={25}/></div>
                    <div className="Situacao">Operante</div>
                </div>
            </div>
        </div>
    );
  }
  export default Carrosel;