import './Busca.css';
import React, { useState } from 'react';
import './Busca.css';

function Busca() {
    const [mode, setMode] = useState('Sim');

    const handleModeChange = () => {
        setMode(mode === 'Sim' ? 'Não' : 'Sim');
    };

    return (
        <div className="Busca">
            <div className='title'>
            PARA ONDE VOCÊ VAI?
            </div>
            <div className="Search">
                <div className="Opcoes">
                    <select className="Opc">
                        <option value="option1">Aeroporto</option>
                        <option value="option2">Agua Branca</option>
                        <option value="option3">Antonio Gianetti Neto</option>
                        <option value="option4">Aracaré</option>
                        <option value="option5">Baltazar Fidelis</option>
                        <option value="option6">Botujuru</option>
                        <option value="option7">Bras</option>
                        <option value="option8">Braz Cubas</option>
                        <option value="option9">Caideiras</option>
                        <option value="option10">Calmon Viana</option>
                    </select>
                    <select className="Opc1">
                    <option value="option1">Aeroporto</option>
                        <option value="option2">Agua Branca</option>
                        <option value="option3">Antonio Gianetti Neto</option>
                        <option value="option4">Aracaré</option>
                        <option value="option5">Baltazar Fidelis</option>
                        <option value="option6">Botujuru</option>
                        <option value="option7">Bras</option>
                        <option value="option8">Braz Cubas</option>
                        <option value="option9">Caideiras</option>
                        <option value="option10">Calmon Viana</option>
                    </select>
                    <div className='pai_texto_swift'>
                    <p className='texto'>Estaçoes com acessibilidade</p>
                    <button className="SwiftButton" onClick={handleModeChange}>
                        {mode}
                    </button>
                    </div>
                </div>
            </div>
            <button className="Botao">PESQUISAR</button>
        </div>
    );
}

export default Busca;
// function Busca() {
//     return (
//         <div className="Busca">
//             <h2 className = 'Title'>PARA ONDE VOCÊ VAI?</h2>
//             <div className = 'Search'>
//                 <div className='Opcoes'>
//                     <select className = 'Opc'>
//                         <option value="option1">Morumbi</option>
//                         <option value="option2">Guarulhos</option>
//                     </select>
//                     <select className = 'Opc1'>
//                         <option value="option1">Oregon</option>
//                         <option value="option2">Bh</option>
//                     </select>
//                 </div>
//             </div>
//             <button className='Botao'>PESQUISAR</button>
//         </div>
//     );
// }
// export default Busca;

{/* <h1 style={{ textAlign: 'center' }}>Para onde você vai?</h1>
<div style={{ display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '70%', display: 'flex', flexDirection: 'column' }}>
        <select style={{ width: '100%', height: '40%', borderRadius: '5px', marginBottom: '10px' }}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
        </select>
        <select style={{ width: '100%', height: '40%', borderRadius: '5px' }}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
        </select>
    </div>
</div>
<button style={{ display: 'block', margin: '0 auto', marginTop: '10px' }}>Buscar</button> */}
// export default Busca;
//         <input type="text" id="input" placeholder="De"/>
//         <br/>
//         <input type="text" id="input" placeholder="Para"/>
//         <br/>
//         <button id="button">Buscar</button>
//     </div>
//     );
//   }
//   export default Busca;