import React, { useEffect, useState } from 'react';

export const GlobalContext = React.createContext(null);

export const GlobalStorage = ({ children }) => {
  const [ allProducts, setAllProducts ] = useState([])
  const [ allCategories, setAllCategories ] = useState()
  const [ cart, setCart ] = useState([])
  const [ refWidth, setRefWidth ] = useState()
  const [ productsCategory, setProductCategory ] = useState()


  const getAllProducts = () => {
    fetch('https://fakestoreapi.com/products')
    .then(r => r.json())
    .then(r => setAllProducts(r))
  }

  const getAllCategories = () => [
    fetch('https://fakestoreapi.com/products/categories')
    .then(r => r.json())
    .then(r => setAllCategories(r))
  ]

  const getRefToSetWidthProduct = (ref) => {
    setRefWidth(ref)
  }

  const getProductsPerCategory = (category) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(r => r.json())
    .then(response => setProductCategory(response))
  }

  const setProductToCart = (id) => {
      const product = allProducts.find((product) => product.id === id);
      const isProductAlready = cart.some(carting => carting.id === product.id);

      if(!isProductAlready) {
        setCart([...cart, product])
      }
  }

  const deleteProductToCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id)
    setCart(newCart)
  }


  useEffect(() => {
    getAllProducts()
    getAllCategories()
  }, [])

  return (
    <GlobalContext.Provider value={ { allProducts, allCategories, setProductToCart, cart, deleteProductToCart, getRefToSetWidthProduct, refWidth, getProductsPerCategory, productsCategory } }>{children}</GlobalContext.Provider>
  )
}