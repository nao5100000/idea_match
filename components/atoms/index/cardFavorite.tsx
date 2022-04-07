import { BsHeart } from "react-icons/bs";


type Props = {
    favorite: number
}
const CardFavorite = (props: Props) => {
    return (
        <div className="flex jutify-center items-center">
            <BsHeart className="text-dark-gray03 mr-1" />
            <p className="text-dark-gray03 text-xs font-light">{props.favorite}</p>
        </div>
    )
}
export default CardFavorite;