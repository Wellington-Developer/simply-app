// Styles
import './styles.css';

// React Hooks
import { useRef } from 'react'

// React Component
import { Banner } from './Utils/Banner';

// React Icons
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const BannerContainer = () => {
    const carousel = useRef<HTMLDivElement>(null)

    const handleLeftClick = () => {
        carousel && (carousel.current!.scrollLeft -= carousel.current!.offsetWidth + 24)
    }

    const handleRightClick = () => {
        carousel && (carousel.current!.scrollLeft += carousel.current!.offsetWidth + 24)
    }

    return (
        <div className="principal-container__banner" >
            <div className="banners" ref={ carousel }>
                <Banner image="https://casamobilia.simply.app.br/arquivo_back/9155/banner/5399d3b4e1c769b23e4caa9f5b0917f820230721174635.webp"/>

                <Banner image="https://casamobilia.simply.app.br/arquivo_back/9155/banner/fb3118396607bf3d70271ee61a5b6dd720230721174610.webp"/>
            </div>
            <div className="button-product__banner">
                <button onClick={ handleLeftClick }><AiOutlineArrowLeft /></button>
                <button onClick={ handleRightClick }><AiOutlineArrowRight  /></button>
            </div>
        </div>
    )
}