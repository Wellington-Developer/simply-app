// Styles
import './styles.css';

// React Hooks
import { useContext } from 'react';

// React Context Components
import { GlobalContext } from '../context/GlobalContext';


export const Categories = () => {
    const global = useContext(GlobalContext);

    return (
        <div className="categories">
            {
                global.allCategories && <div className="categories-container__top">
                    {global.allCategories.map((item, index) => {
                        return <div key={index}>
                            <div className="category-circle" >
                            <div className="circle"></div>
                                <p>{item}</p>
                            </div>
                        </div>
                    })}
                </div>
            }
        </div>
    )
}