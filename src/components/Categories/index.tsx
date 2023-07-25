import { useEffect, useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export const Categories = () => {
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
        <div className="categories">
            {
                data && <div className="categories-container__top">
                    {data.map((item, index) => {
                        return <>
                            <div className="category-circle">
                            <div className="circle"></div>
                                <p>{item}</p>
                            </div>
                        </>
                    })}
                </div>
            }
        </div>
    )
}