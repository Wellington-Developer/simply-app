// Styles
import { useEffect, useState } from 'react';
import './styles.css'

export const Menu = () => {
  const [data, setData] = useState<[]>([]);

  const searchCategories = () => {
      fetch('https://fakestoreapi.com/products/categories')
      .then(r => r.json())
      .then(newResponse => setData(newResponse))
  }

  useEffect(() => {
    searchCategories()
  }, [])

  return (
    <nav className="menu">
      {
        data && <>
          <ul>
            {data.map((item, index) => {
              return <>
                <li key={index}>{item}</li>
              </>
            })}
          </ul>
        </>
      }
    </nav>
  )
}