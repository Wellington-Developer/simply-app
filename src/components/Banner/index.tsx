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
                <Banner image="https://images.alphacoders.com/111/thumb-1920-1113834.png"/>

                <Banner image="https://images.alphacoders.com/111/thumb-1920-1113834.png"/>
            </div>
            <div className="button-product__banner">
                <button onClick={ handleLeftClick }><AiOutlineArrowLeft /></button>
                <button onClick={ handleRightClick }><AiOutlineArrowRight  /></button>
            </div>
        </div>
    )
}