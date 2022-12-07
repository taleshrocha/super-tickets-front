import { useState } from 'react';
import './styles/createEvent.css';
import barra from './assets/barra.png';

function CreateEvent(){
    const[nomeEvento, setNome] = useState("")
    const[urlEvento, setURL] = useState("")
    const[detalhesEvento, setDetalhes] = useState("")
    
    return(
        <div className='Barra'>
            <div className='BarraCima'>
                <span className="Logo-img"> <img src={barra} alt='' /> </span>
                <text className='txt1'> Comece a vender seus ingressos</text>
                <text className='txt2'> Crie o evento do seu jeito</text>
            </div>
            <div className='Infos-Box'>
                <form>
                    <text className='textInfoEventos'>Informações do Evento</text>
                    <text className='textNomeEvento'>Nome do Evento</text>
                    <div className='Box-Nome-Evento'>
                        <div className='Nome-Input'>
                            <input 
                            className='Nome-Input' 
                            type="Nome" 
                            value={nomeEvento}
                            onChange={e => setNome(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textURLEvento'>URL do Evento</text>
                    <div className='Box-URL-Evento'>
                        <input className='URL-Input'
                        type="URL" 
                        value={urlEvento}
                        onChange={e => setURL(e.target.value)}
                        />
                    </div>

                    <text className='Evento-Detalhes-txt'>Detalhes do evento</text>
                    <div className='Evento-Detalhes-Box'> 
                        <input className='Detalhes-Input'
                        type="Detalhes" 
                        value={detalhesEvento}
                        onChange={e => setDetalhes(e.target.value)}
                        />
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default CreateEvent