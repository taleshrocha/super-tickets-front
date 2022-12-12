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

    const[nomeTicket, setTicket] = useState("")
    const[quantidadeTicket, setQuantidadeTicket] = useState("")
    const[valorTicket, setValorTicket] = useState("")
    const[idadeEvento, setIdade] = useState("")
    const[detalhesTicket, setTicketDetalhes] = useState("")
    const[inicioTicket, setInicioTicket] = useState("")
    const[horaInicioTicketo, setHoraInicioTicket] = useState("")
    const[fimTicket, setFimTicket] = useState("")
    const[horaFimTicket, setHoraFimTicket] = useState("")

    const[localEvento, setLocal] = useState("")
    const[cepEvento, setCEP] = useState("")
    const[enderecoEvento, setEndereco] = useState("")
    const[numeroLocal, setNumeroLocal] = useState("")
    const[cidedadeEvento, setCidade] = useState("")
    const[complemtnetoLocal, setComplemento] = useState("")
    const[estadoLocal, setEstado] = useState("")
    
    return(
        <div className='Barra'>
            <div className='BarraCima'>
                <span className="Logo-img"> <img src={barra} alt='' /> </span>
                <text className='txt1'> Comece a vender seus ingressos</text>
                <text className='txt2'> Crie o evento do seu jeito</text>
            </div>
            <div className='Infos-Box'>
                <form className='Form-Infos'>
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

            <div className='Ticket-Box'>
                <form className='Form-Ticket'>
                    <text className='textTicketEventos'>Criar Ingresso</text>
                    <text className='textNomeTicket'>Nome do Ingresso</text>
                    <div className='Box-Nome-Ticket'>
                        <div className='Nome-Ticket-Input'>
                            <input 
                            className='Nome-Ticket-Input' 
                            type="Ticket-Nome" 
                            value={nomeTicket}
                            onChange={e => setTicket(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textQuantidadeTicket'>Quantidade</text>
                    <div className='Box-Quantidade-Ticket'>
                        <div className='Quantidade-Ticket-Input'>
                            <input 
                            className='Quantidade-Ticket-Input' 
                            type="Ticket-Quantidade" 
                            value={quantidadeTicket}
                            onChange={e => setQuantidadeTicket(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textValorTicket'>Valor</text>
                    <div className='Box-Valor-Ticket'>
                        <div className='Valor-Ticket-Input'>
                            <input 
                            className='Valor-Ticket-Input' 
                            type="Ticket-Valor" 
                            value={valorTicket}
                            onChange={e => setValorTicket(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textIdadeTicket'>Limite de idade</text>
                    <div className='Box-Idade-Ticket'>
                        <input className='Idade-Input'
                        type="Idade-Ticket" 
                        value={idadeEvento}
                        onChange={e => setIdade(e.target.value)}
                        />
                    </div>

                    <text className='Ticket-Detalhes-txt'>Detalhes do evento</text>
                    <div className='Ticket-Detalhes-Box'> 
                        <input className='Ticket-Detalhes-Input'
                        type="Ticket-Detalhes" 
                        value={detalhesTicket}
                        onChange={e => setTicketDetalhes(e.target.value)}
                        />
                    </div>

                    <text className='Ticket-Inicio-txt'>Data de Inicio</text>
                    <div className='Ticket-Inicio-Box'> 
                        <input className='Ticket-Inicio-Input'
                        type="Ticket-Inicio-Input" 
                        value={inicioTicket}
                        onChange={e => setInicioTicket(e.target.value)}
                        />
                    </div>
                    <div className='Ticket-Hora-Inicio-Box'> 
                        <input className='Ticket-Hora-Inicio-Input'
                        type="Hora-Inicio-Ticket" 
                        value={horaInicioTicketo}
                        onChange={e => setHoraInicioTicket(e.target.value)}
                        />
                    </div>

                    <text className='Ticket-Fim-txt'>Data de Final do Evento</text>
                    <div className='Ticket-Fim-Box'> 
                        <input className='Ticket-Fim-Input'
                        type="Ticket-Fim-Input" 
                        value={fimTicket}
                        onChange={e => setFimTicket(e.target.value)}
                        />
                    </div>
                    <div className='Ticket-Hora-Fim-Box'> 
                        <input className='Ticket-Hora-Fim-Input'
                        type="Hora-Fim-Ticket" 
                        value={horaFimTicket}
                        onChange={e => setHoraFimTicket(e.target.value)}
                        />
                    </div>
                </form>
                
            </div>

            <div className='Local-Box'>
                <form className='Form-Local'>
                    <text className='textLocal'>Endereço do Evento</text>
                    <text className='textLocalEvento'>Nome do Evento</text>
                    <div className='Box-Local-Evento'>
                        <div className='Local-Input'>
                            <input 
                            className='Local-Input' 
                            type="Local" 
                            value={localEvento}
                            onChange={e => setLocal(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textCEPEvento'>CEP</text>
                    <div className='Box-CEP-Evento'>
                        <div className='CEP-Input'>
                            <input 
                            className='CEP-Input' 
                            type="CEP" 
                            value={cepEvento}
                            onChange={e => setCEP(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textEnderecoEvento'>Endereço</text>
                    <div className='Box-Endereco-Evento'>
                        <div className='Endereco-Input'>
                            <input 
                            className='Endereco-Input' 
                            type="Endereco" 
                            value={enderecoEvento}
                            onChange={e => setEndereco(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textNumeroEvento'>Numero</text>
                    <div className='Box-Numero-Evento'>
                        <div className='Numero-Input'>
                            <input 
                            className='Numero-Input' 
                            type="Numero" 
                            value={numeroLocal}
                            onChange={e => setNumeroLocal(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textComplementoEvento'>Complemento</text>
                    <div className='Box-Complemento-Evento'>
                        <div className='Complemento-Input'>
                            <input 
                            className='Complemento-Input' 
                            type="Complemento" 
                            value={complemtnetoLocal}
                            onChange={e => setComplemento(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textCidadeEvento'>Cidade</text>
                    <div className='Box-Cidade-Evento'>
                        <div className='Cidade-Input'>
                            <input 
                            className='Cidade-Input' 
                            type="Cidade" 
                            value={cidedadeEvento}
                            onChange={e => setCidade(e.target.value)}/>
                        </div>
                    </div>

                    <text className='textEstadoEvento'>Estado</text>
                    <div className='Box-Estado-Evento'>
                        <div className='Estado-Input'>
                            <input 
                            className='Estado-Input' 
                            type="Estado" 
                            value={estadoLocal}
                            onChange={e => setEstado(e.target.value)}/>
                        </div>
                    </div>

                </form>
                
            </div>
        </div>
    )
}

export default CreateEvent