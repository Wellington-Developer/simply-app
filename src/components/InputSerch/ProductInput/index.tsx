// Styles
import { GlobalContext } from '../../context/GlobalContext';
import { useContext } from 'react';
import { BiCartAdd } from 'react-icons/bi';
import './styles.css';

export const ProductInput = ({ title, id, image, price }) => {
  const { setProductToCart } = useContext(GlobalContext);
  
  
  return (
    <div className="container-product__input">
      <div className="left-side">
        <img src={image} alt={ title } />
        <h1>{ title }</h1>
      </div>

      <div className="right-side">
        <h3>R$ { price }</h3>
        <button onClick={() => setProductToCart(id)} className='add-to__cart'><BiCartAdd /></button>
      </div>
    </div>
  )
}