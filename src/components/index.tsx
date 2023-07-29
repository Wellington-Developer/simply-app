import { BannerContainer } from "./Banner"
import { Categories } from "./Categories"
import { ProductRowCategories } from "./ProductRow/ProductRowCategories"

export const Home = () => {
  return (
    <>
      <BannerContainer />
      <Categories />
      <ProductRowCategories />
    </>
  )
}