import { useState } from 'react';
import './styles/createEvent.css';
import barra from './assets/barra.png';

function CreateEvent(){
    const[nomeEvento, setNome] = useState("")
    const[urlEvento, setURL] = useState("")
    const[detalhesEvento, setDetalhes] = useState("")
    const[inicioEvento, setInicio] = useState("")
    const[horaInicioEvento, setHoraInicio] = useState("")
    const[fimEvento, setFim] = useState("")
    const[horaFimEvento, setHoraFim] = useState("")
    
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

                    <text className='Evento-Inicio-txt'>Data de Inicio</text>
                    <div className='Evento-Inicio-Box'> 
                        <input className='Inicio-Input'
                        type="Inicio" 
                        value={inicioEvento}
                        onChange={e => setInicio(e.target.value)}
                        />
                    </div>
                    <div className='Evento-Hora-Inicio-Box'> 
                        <input className='Hora-Inicio-Input'
                        type="Hora-Inicio" 
                        value={horaInicioEvento}
                        onChange={e => setHoraInicio(e.target.value)}
                        />
                    </div>

                    <text className='Evento-Fim-txt'>Data de Final do Evento</text>
                    <div className='Evento-Fim-Box'> 
                        <input className='Fim-Input'
                        type="Fim" 
                        value={fimEvento}
                        onChange={e => setFim(e.target.value)}
                        />
                    </div>
                    <div className='Evento-Hora-Fim-Box'> 
                        <input className='Hora-Fim-Input'
                        type="Hora-Fim" 
                        value={horaFimEvento}
                        onChange={e => setHoraFim(e.target.value)}
                        />
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default CreateEvent