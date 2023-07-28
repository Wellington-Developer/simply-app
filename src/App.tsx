import './App.css'
import { Header } from './components/Header'
import { BannerContainer } from './components/Banner'
import { Categories } from './components/Categories'
import { GlobalStorage } from './components/context/GlobalContext'
import { ProductRowCategories } from './components/ProductRow/ProductRowCategories'

function App() {

  return (
    <div className="container">
      <GlobalStorage>
        <Header/>
        <BannerContainer />
        <Categories />
        <ProductRowCategories />
      </GlobalStorage>
    </div>
  )
}

export default App
