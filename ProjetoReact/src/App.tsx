import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//import PageAutor from './Pages/AutorInfos/PageAutor';
import AdminPage from './Pages/AdminPage/AdminPage';
import CadastroProduto from './Components/CadastroProduto/CadastroProduto';
import ListaProduto from './Components/ListaProduto/ListaProduto';
import TelaCadastroProduto from './Pages/TelaCadastroProduto/TelaCadastroProduto';
const App = () => {
  return (
    <Router>      
      <Routes>      
       {/* <Route path="/autor" element={<PageAutor/>}/> */}
        <Route path="/admin" element={<AdminPage/>}/>  
        <Route path="/teste" element={<CadastroProduto/>}/>    
        <Route path="/teste2" element={<ListaProduto/>}/> 
        <Route path="/teste1" element={<TelaCadastroProduto/>}/>    
      </Routes>           
    </Router>      
  )
}
export default App
