// Styles
import { Product } from '../Product';
import './styles.css';

export const ProductRow = () => {
  return (
    <div className="container-product__row">
      <div className="title-product__row">
        <h1>Tá na promo</h1>
      </div>

      <div className="cotent-product__row">
        <Product />
      </div>
    </div>
  )
}