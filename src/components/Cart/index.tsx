// Styles
import { useContext } from 'react';
import { Input } from './Utils/Input';
import './styles.css';

// React Icons
import { BiX } from 'react-icons/bi';
import { GlobalContext } from '../context/GlobalContext';
import { ProductCart } from './Utils/ProductCart';

export const Cart = ({ modal } : any) => {
  const {cart} = useContext(GlobalContext);

  return (
    <div className="section-side__cart">
      <div className="content-side__cart">
        <div className="left-side__cart">

          <div className="info-contact__cart">
            <h3>Informações de Entrega</h3>
          </div>

          <div className="form">
            <Input />
          </div>

          <div className="payment-method__cart">
            <h3>Forma de Pagamento</h3>

            <div className="box-payment__cart">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
        <div className="right-side__cart">
          <div className="product-container__cart">
            <h3>Resumo do pedido</h3>
            <div className="product-content__cart">
              {
                cart.length > 0 ?
                (
                  cart.map((product, index) => {
                    return <ProductCart title={product.title} image={product.image} id={product.id} price={product.price} key={index} />
                  })
                ) : (
                  <p>Adicione produtos ao carrinho.</p>
                )
              }
            </div>
          </div>
          <div className="product-discount__cart">

          </div>
          <div className="quicly-resume__cart">

          </div>
        </div>
      <div className="content-close__cart" onClick={modal}>
        <BiX />
      </div>
      </div>
    </div>
  )
}