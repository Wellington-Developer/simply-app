// Styles
import { BannerType } from '../../../../types/components/BannerType';
import './styles.css';

export const Banner = ({ image }: BannerType) => {
    return (
        <div className="banner">
            <div className="image-product__banner">
                <img src={image} />
            </div>
        </div>
    )
}