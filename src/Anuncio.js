import './Anuncio.css'
import PlayStore from './playstore.png'
import Apple from './apple.png'

function Anuncio() {
    return (
        <div className ="Total">
            <div className="Anuncio">
                <div className='Titulo'>Faça Download <br></br>do App da CPTM</div>
                <div className= 'img'><img src={PlayStore} alt="PlayStore" className="PlayStore"/><img className= "Apple" src ={Apple} alt ="Apple"/></div>
            </div>
        </div>
    );
  }
  export default Anuncio;