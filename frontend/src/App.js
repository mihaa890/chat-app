import './App.css';
import { BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import { Home } from './home/Home'; 
import {Chat} from './chat/Chat'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact={true} element={<Home/>} />
      <Route path="/:roomId/:username" element={<Chat/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;
