import './styles/cadastro.css';
import { useState } from 'react';
import ticketImage from './assets/ticket-icon.svg';

function Cadastrar() {
    const[email, setEmail] = useState("")
    const[passowrd, setPassowrd] = useState("")
  
  return (
      <div className="Container">
        <div className='Container-Cadastro'>
            <div className="Cadastro-form">
                <div className="Wrap-input">
                    <input 
                    className={email !== "" ? "has-val Input" : "Input"} 
                    type="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <span className="Focus-input" data-placeholder="Email"> </span>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Cadastrar