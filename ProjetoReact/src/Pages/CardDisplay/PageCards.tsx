import Logo from '../../assets/logotipo.png'
import XSaladaImage from '../../assets/X-Salada.png'
import XBaconImage from '../../assets/X-Bacon.jpg'
import TFrios from '../../assets/tabua de frios.jpg'
import ProductCard from '../../Components/ProductCard/ProductCard'
import './PageCards.css'
import CadastroProduto from '../../Components/CadastroProduto/CadastroProduto'

const PageCards = () => {
    return (
      <>      
        <header>
        
        </header>   
         
        <body>
          
          <div className='products-display'>
           
            <ProductCard
              image={XBaconImage}
              description="Esse é um delicioso X-Bacon"
              whereToGo="Adicionar"
              cardTitle="X-Bacon"
            />
            <ProductCard
              image={TFrios}
              description="Essa é para a turma toda"
              whereToGo="Adicionar"
              cardTitle="X-Salada"
            />          
          </div>
        </body>      
      </>      
    )
  }
  
  export default PageCards;
  