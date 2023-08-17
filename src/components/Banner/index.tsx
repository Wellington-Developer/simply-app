// Styles
import './styles.css';

// React Hooks
import { useRef, useState } from 'react'

// React Component
import { Banner } from './Utils/Banner';

export const BannerContainer = () => {
    const carousel = useRef<HTMLDivElement>(null)

    const [ classActive, setClassActive ] = useState('')

    const handleClickIndexImage = (index) => {
        const indexedImage = index * carousel.current!.offsetWidth
        console.log(indexedImage)
        carousel && (carousel.current!.scrollLeft = indexedImage)
        setClassActive("active")
    }

    const linkImages = ["https://casamobilia.simply.app.br/arquivo_back/9155/banner/5399d3b4e1c769b23e4caa9f5b0917f820230721174635.webp", "https://casamobilia.simply.app.br/arquivo_back/9155/banner/fb3118396607bf3d70271ee61a5b6dd720230721174610.webp", "https://casamobilia.simply.app.br/arquivo_back/9155/banner/fb3118396607bf3d70271ee61a5b6dd720230721174610.webp"]

    return (
        <div className="principal-container__banner" >
            <div className="banners" ref={ carousel }>
                {
                    linkImages && linkImages.map((imageLink, index) => {
                        return <Banner image={imageLink} key={index}/>
                    })
                }
            </div>
            <div className="button-product__banner">
                {
                    linkImages.map((item, index) => {
                        return <div className={`dot-banner ${item}`} onClick={ () => handleClickIndexImage(index) }></div>
                    })
                }
            </div>
        </div>
    )
}