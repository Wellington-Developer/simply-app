// Styles
import './styles.css';

// React Components
import { Product } from '../Product';

// React Hooks
import { useState, useEffect, useRef } from 'react';

// React Icons
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

export const ProductRow = ({ category }) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;
  const [ productsPerCategory, setProductsPerCategory ] = useState([]);
  const refWidth = useRef(null);

  const handleLeftClickButton = () => {
    refWidth.current.scrollLeft -= (refWidth.current.offsetWidth + 24);
  }

  const handleRightClickButton = () => {
    refWidth.current.scrollLeft += (refWidth.current.offsetWidth + 24);
  }

  const fetchProductsPerCategory = () => {
    fetch(url)
    .then(r => r.json())
    .then(r => setProductsPerCategory(r))
  }

  useEffect(() => {
    fetchProductsPerCategory();
  }, [])

  return (
    <div className="product-container__row" ref={refWidth}>
      <div className="container-button">
        <button onClick={handleLeftClickButton}><BsArrowLeftShort/></button>
        <button onClick={handleRightClickButton}><BsArrowRightShort/></button>
      </div>
      {
        productsPerCategory.map((product, index) => {
          return <div className="product-content__row" key={index}>
            <Product image={product.image} title={product.title} price={product.price} id={product.id}/>
          </div>
        })
      }
    </div>
  )
}