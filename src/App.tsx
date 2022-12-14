import reactLogo from './assets/react.svg'
import wave from './assets/layered-waves-haikei.svg'
import './App.css'

function App() {

  return (
    <div className='relative'>
      <div className="flex flex-col items-center min-h-[600px] bg-[#6A45AB] -z-10"></div>
      <div
        style={{ backgroundImage: "url(" + wave + ")" }}
        className="w-full aspect-[960/300] bg-cover bg-center bg-no-repeat z-10"
      ></div>
    </div>
  );
}

export default App
