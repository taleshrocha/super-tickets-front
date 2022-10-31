import './styles/main.css';

import ticketImage from './assets/ticket-icon.svg';
import { useState } from 'react';

function App() {
  const[email, setEmail] = useState("")
  const[passowrd, setPassowrd] = useState("")
  
  return (
      <div className="Container">
        <div className="Container-login">
          <div className="Wrap-login">
            <form className="Form-logo">
              <div className="Logo">
                <span className="Logo-img"> <img src={ticketImage} alt='' /> </span>

                <span className="Logo-title"> Super Tickets </span>
              </div>

              <div className="Wrap-input">
                <input 
                className={email !== "" ? "has-val Input" : "Input"} 
                type="Email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <span className="Focus-input" data-placeholder="Email"> </span>
              </div>

              <div className="Wrap-input">
                <input 
                className={passowrd !== "" ? "has-val Input" : "Input"} 
                type="Passowrd" 
                value={passowrd}
                onChange={e => setPassowrd(e.target.value)}
                />
                <span className="Focus-input" data-placeholder="Passowrd"> </span>
              </div>

              <div className="Contairn-form-acess-btn">
                <button className="Form-acess-btn"> Acessar</button>
              </div>

              <div className="Container-create-acount">
                <span className="txt1"> Não possui conta</span>

                <a className="txt2" href='#'> Criar Conta</a>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default App
