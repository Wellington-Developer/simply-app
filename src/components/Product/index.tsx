// Styles
import { useContext } from 'react';
import './styles.css';

// React Icons
import { BiCartAdd } from 'react-icons/bi';
import { GlobalContext } from '../context/GlobalContext';

import { Link } from 'react-router-dom';

type IProduct = {
  image: string,
  title: string,
  price: number,
  id?: number
}

export const Product = ({ title, price, image, id }: IProduct) => {
  const { setProductToCart, refWidth } = useContext(GlobalContext);
  const widthRecalculedImage = ((refWidth - 72) / 3)
  const style = {
    maxWidth: Number(widthRecalculedImage), 
    height: Number(widthRecalculedImage + 200),
  }

  return (
    <div className="container-single__product" >
      <div className="content-single__product">
        <Link to={`/product/${id}`}>
          <div className="container-image__product" style={ style }>
            <img src={image} alt={title} />
          </div>
        </Link>

        <div className="container-info__product">
          <Link to={`/product/${id}`}>
            <div className="info-product">
              <p>{title}</p>
              <h2>R$ {price}</h2>
            </div>
          </Link>

          <div className="add-to__cart" onClick={ () => setProductToCart(id) }>
            <BiCartAdd/>
          </div>
        </div>
      </div>
    </div>
  )
}