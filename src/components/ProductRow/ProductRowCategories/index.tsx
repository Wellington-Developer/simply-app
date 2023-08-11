// Styles
import './styles.css';

// React Hooks
import { useContext, useState, useEffect } from "react"

// React Context
import { GlobalContext } from "../../context/GlobalContext"

// React Components
import { ProductRow } from '..';
import { Product } from '../../Product';

export const ProductRowCategories = () => {
  const { allCategories } = useContext(GlobalContext);
  const [ productsLocal, setProductsLocal ] = useState<any>()

  const fetchLocalStorageProducts = () => {
    const localStorageProducts = JSON.parse(localStorage.getItem("produtos"));
    setProductsLocal(localStorageProducts);
  }

  useEffect(() => {
    fetchLocalStorageProducts()
  }, [])


  return (
    <>
      <div className="products-new">
        {
          productsLocal && productsLocal.map((item, index) => {
            return <Product image={item.image} title={item.title} price={item.price} id={index}/>
          })
        }
      </div>
      {
        allCategories &&
        allCategories.map((category, index) => {
          return <div className="product-category__row" key={index}>
            <h1>{category}</h1>
            <div className="product-content__row">
              <ProductRow category={category}/>
            </div>
          </div>
        })
      }
    </>
  )
}