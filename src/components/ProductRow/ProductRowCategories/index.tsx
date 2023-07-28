// Styles
import './styles.css';

// React Hooks
import { useContext } from "react"

// React Context
import { GlobalContext } from "../../context/GlobalContext"

// React Components
import { ProductRow } from '..';



export const ProductRowCategories = () => {
  const { allCategories } = useContext(GlobalContext);

  return (
    <>
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