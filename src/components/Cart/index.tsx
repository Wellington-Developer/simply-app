// Styles
import { Input } from './Utils/Input';
import './styles.css';

// React Icons
import { BiX } from 'react-icons/bi';

export const Cart = ({ modal } : any) => {
  return (
    <div className="section-side__cart">
      <div className="content-side__cart">
        <div className="left-side__cart">
          <div className="logo">
            <h1>Simply</h1>
          </div>

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