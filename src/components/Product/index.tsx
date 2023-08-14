// Styles
import { useContext } from 'react';
import './styles.css';

// React Icons
import { BiCartAdd } from 'react-icons/bi';
import { GlobalContext } from '../context/GlobalContext';

import { Link } from 'react-router-dom';
import { Popup } from '../Popup';

type IProduct = {
  image: string,
  title: string,
  price: number,
  id?: number
}

export const Product = ({ title, price, image, id }: IProduct) => {

  const { setProductToCart, refWidth, showPopup } = useContext(GlobalContext);
  const widthRecalculedImage = ((refWidth - 72) / 3)
  const style = {
    maxWidth: Number(widthRecalculedImage), 
    height: Number(widthRecalculedImage + 200),
  }

  const options = { style: 'currency', currency: 'BRL' }
  const formatNumber = new Intl.NumberFormat('pt-BR', options)

  return (
    <div className="container-single__product" >
      <Popup message="Produto adicionado ao carrinho!" show={showPopup}/>
      <div className="content-single__product">

        <div className="discount-product">
          - 25%
        </div>
        <Link to={`/product/${id}`}>
          <div className="container-image__product" style={ style }>
            <img src={image} alt={title} />
          </div>
        </Link>

        <div className="container-info__product">
          <Link to={`/product/${id}`}>
            <div className="info-product">
              <p>{title}</p>
              <div className="price">
                <h2>{formatNumber.format(price)}</h2>
                <p>{formatNumber.format(price - 5)}</p>
              </div>
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