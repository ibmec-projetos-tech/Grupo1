import './Footer.css';
import Atendimento from './atendimento.png'
import Duvida from './duvidas.png'

function Footer() {
    return (
        <div className="footer_todo">
            <div className="footer">
                <div className="Fundo">
                    <button className="ft">
                        <a href="https://www.google.com" className='Icon'> <img src={Atendimento} alt="Atendimento" width ={40} height ={40} /></a>
                    </button>
                    <button className="ft">
                        <a href="https://www.google.com" className='Icon'> <img src={Duvida} alt="Duvida" width ={40} height ={40} /></a>
                    </button>
                </div>
            </div>
                <div className="copy">
                    <p>Copyright © CPTM Companhia Paulista de Trens Metropolitanos 2015 - 2023</p>
                </div>
        </div>
    );
}

export default Footer;