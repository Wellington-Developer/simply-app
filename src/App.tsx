import './App.css'
import { Header } from './components/Header'
import { BannerContainer } from './components/Banner'
import { Categories } from './components/Categories'
import { ProductRow } from './components/ProductRow'

function App() {

  return (
    <div className="container">
      <Header/>
      <BannerContainer />
      <Categories />
      <ProductRow />
    </div>
  )
}

export default App
