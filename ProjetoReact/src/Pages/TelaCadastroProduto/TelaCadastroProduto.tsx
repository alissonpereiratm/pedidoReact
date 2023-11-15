
import CadastroProduto from '../../Components/CadastroProduto/CadastroProduto';
import ListaProduto from '../../Components/ListaProduto/ListaProduto';
import './TelaCadastroProduto.css'

const Produtos = () => {
    return (
      <>      
        <header>
          <nav>
     
          </nav>
        </header>   
         
        <body>
        <div className='cadastro'>
          <CadastroProduto />
          </div>
          <div className='lista'>
          <ListaProduto />
          </div>
        </body>      
      </>      
    )
  }
  
  export default Produtos;
  