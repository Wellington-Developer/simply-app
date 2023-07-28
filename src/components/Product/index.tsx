// Styles
import { useContext } from 'react';
import './styles.css';

// React Icons
import { BiCartAdd } from 'react-icons/bi';
import { GlobalContext } from '../context/GlobalContext';

type IProduct = {
  image: string,
  title: string,
  price: number,
  id?: number
}

export const Product = ({ title, price, image, id }: IProduct) => {
  const { setProductToCart } = useContext(GlobalContext);

  return (
    <div className="container-single__product">
      <div className="content-single__product">
        <div className="container-image__product">
          <img src={image} alt={title} />
        </div>

        <div className="container-info__product">
          <div className="info-product">
            <p>{title}</p>
            <h2>R$ {price}</h2>
          </div>

          <div className="add-to__cart" onClick={ () => setProductToCart(id) }>
            <BiCartAdd/>
          </div>
        </div>
      </div>
    </div>
  )
}