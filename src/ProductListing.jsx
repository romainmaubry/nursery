import { Link } from "react-router-dom"
import './ProductListing.css'
import logo from './Paradise.png'
import Card from './Card.jsx'
import img1 from './plant1.jpeg'
import img2 from './ficus.jpeg'
import img3 from './monstera.jpeg'
import cart from './cart.jpeg'
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice'; // Assuming you have action creators for increasing and decreasing item quantity

const purifyingList = [
    {
        id: 1,
        image: img1,
        name: "Banana plant",
        description: "Perfect plant to keep in the house",
        price: 15
    },
    {
        id: 2,
        image: img2,
        name: "Ficus plant",
        description: "Beautiful plant to warm the house",
        price: 18
    },
    {
        id: 3,
        image: img3,
        name: "Monstera plant",
        description: "Purifies the house",
        price: 20
    }
]

const aromaticList = [
    {
        id: 1,
        image: img1,
        name: "Banana plant",
        description: "Perfect plant to keep in the house",
        price: 15
    },
    {
        id: 2,
        image: img2,
        name: "Ficus plant",
        description: "Beautiful plant to warm the house",
        price: 18
    },
    {
        id: 3,
        image: img3,
        name: "Monstera plant",
        description: "Purifies the house",
        price: 20
    }
]

function ProductListing() {

    {/*}
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleRemoveItem = itemId => {
        dispatch(removeItemFromCart(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleIncreaseQuantity = itemId => {
        dispatch(increaseItemQuantity(itemId));
    };

    const handleDecreaseQuantity = itemId => {
        dispatch(decreaseItemQuantity(itemId));
    };
*/}
const totalAmount=0
    return (
        <main className="main-product">
            <nav className="nav">
                <ul className="ul">
                    <li className="li1">
                        <Link to="/">
                            <img className="image" src={logo} />
                        </Link>
                    </li>
                    <li className="li2">
                        Paradise Nursery<br />
                        Where Green Meets serenity
                    </li>
                    <li className="li3">Plants</li>
                    <li className="li4">
                        <Link to="/cart">
                            <div className="container">
                                <img className="cart" src={cart} />
                                <div className="counter">{totalAmount}</div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="div">
                <h2>Air Purifying plants</h2>
                <div className="purifying">

                    {purifyingList.map(function (data) {
                        return (
                            <Card
                                key={data.id}
                                image={data.image}
                                name={data.name}
                                description={data.description}
                                price={data.price} />
                        )
                    })}

                </div>

                <h2 >Aromatic fragrant plants</h2>
                <div className="aromatic">
                    {aromaticList.map(function (data) {
                        return (
                            <Card
                                key={data.id}
                                image={data.image}
                                name={data.name}
                                description={data.description}
                                price={data.price} />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}
export default ProductListing