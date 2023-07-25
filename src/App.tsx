import './App.css'
import { Header } from './components/Header'
import { BannerContainer } from './components/Banner'
import { Categories } from './components/Categories'

function App() {

  return (
    <div className="container">
      <Header/>
      <BannerContainer />
      <Categories />
    </div>
  )
}

export default App
