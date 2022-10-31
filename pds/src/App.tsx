import './styles/main.css';

import ticketImage from './assets/ticket-icon.svg';

function App() {
  
  return (
    <div className="flex flex-col items-center gap-[256px]">
      <div className=" flex flex-row my-[64px]">
        <img src={ticketImage} style={{width: 32, height: 32}} alt="" />
        <h1 className="text-3xl text-white font-black">Super Tickets</h1>
      </div>
    </div>
  )
}

export default App
