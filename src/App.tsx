// Styles
import './App.css'

// React Context
import { GlobalStorage } from './components/context/GlobalContext'

// React Components
import { Header } from './components/Header'
import { Home } from './components'

// React Router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CategoryProduct } from './components/CategoryProducts';
import { Footer } from './components/Footer';
import { ProductPage } from './components/ProductPage';
import { Termos } from './components/Termos';


function App() {

  return (
    <GlobalStorage>
      <BrowserRouter>
          <div className="container">
            <Header/>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/category/:id" element={ <CategoryProduct /> } />
              <Route path="/product/:id" element={ <ProductPage /> } />
              <Route path="/termos" element={ <Termos /> } />
            </Routes>
          </div>
            <Footer />
      </BrowserRouter>
    </GlobalStorage>
  )
}

export default App
