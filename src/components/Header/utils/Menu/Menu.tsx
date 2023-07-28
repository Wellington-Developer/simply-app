// Styles
import { useContext } from 'react';
import './styles.css'
import { GlobalContext } from '../../../context/GlobalContext';

export const Menu = () => {
  const global = useContext(GlobalContext);

  return (
    <nav className="menu">
      {
        global.allCategories && <>
          <ul>
            {global.allCategories.map((item, index) => {
              return <div key={index}>
                <li >{item}</li>
              </div>
            })}
          </ul>
        </>
      }
    </nav>
  )
}