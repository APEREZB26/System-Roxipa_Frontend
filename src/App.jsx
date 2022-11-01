import './css/App.css';
import fritolay from "./assets/fritolay.png"
import { RegForm } from "./components/Register/RegForm.jsx"
import { Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
      <Route path='/'/>
      <Route path='/register' element={<RegForm/>}/>
      </Routes>
      <img src={fritolay} alt='fritolay' className='frito'></img>
    </div>
  );
}

export default App;
