import './styles/cadastro.css';
import { useState } from 'react';
import ticketImage from './assets/ticket-icon.svg';


function Cadastrar() {
    const [name, setName] = useState('');
    const[email, setEmail] = useState("")
    const[passowrd, setPassowrd] = useState("")
    const[document, setDocument] = useState("")

  return (
      <div className="Container">
        <div className='Container-Cadastro'>
            <div className="Cadastro-form">
                <div className='Title'>
                    <text className='Cadastro'>Cadastro</text>
                </div>
                <div className="Wrap-Cadastro">
                        <div className='Wrap-Email'>
                            <input 
                                className={email !== "" ? "has-val Input" : "Input"} 
                                type="Email" 
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className="Focus-input" data-placeholder="Email"> </span>
                        </div>

                        <div className='Wrap-Name'>
                            <input 
                                className={name !== "" ? "has-val Input" : "Input"} 
                                type="Name" 
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                            <span className="Focus-input" data-placeholder="Name"> </span>
                        </div>

                        <div className='Wrap-Password'>
                            <input 
                                className={passowrd !== "" ? "has-val Input" : "Input"} 
                                type="Password" 
                                value={passowrd}
                                onChange={e => setPassowrd(e.target.value)}
                            />
                            <span className="Focus-input" data-placeholder="Password"> </span>
                        </div>

                        <div className='Wrap-Document'>
                            <input 
                                className={document !== "" ? "has-val Input" : "Input"} 
                                type="Document" 
                                value={document}
                                onChange={e => setDocument(e.target.value)}
                            />
                            <span className="Focus-input" data-placeholder="Document"> </span>
                        </div>
                        <div className="Contairn-form-cads-btn">
                            <button className="Form-cads-btn"> Cadastrar</button>
                        </div>             
                </div>
            </div>
        </div>
      </div>
  )
}

export default Cadastrar