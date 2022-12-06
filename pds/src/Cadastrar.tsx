import './styles/cadastro.css';
import { useState } from 'react';
import ticketImage from './assets/ticket-icon.svg';

function Cadastrar() {
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState('');
    const[email, setEmail] = useState("")
    const[passowrd, setPassowrd] = useState("")

    function textChanged(text){
        setValue(text);
        if(text !==''){
            setIsActive(true);
        }else{
            setIsActive(false);
        }
    }
  
  return (
      <div className="Container">
        <div className='Container-Cadastro'>
            <div className="Cadastro-form">
                <div className="Wrap-input">
                    <div className='Wrap-Email'>
                        
                        <input 
                            type='email'
                            value={value}
                            onChange={(e) => textChanged(e.target.value)}
                        />
                        <label className={ isActive ? "Active" : ""}>
                            Email
                        </label>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Cadastrar