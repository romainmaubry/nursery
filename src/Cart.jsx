import { Link } from "react-router-dom"
import './Cart.css'
import logo from './Paradise.png'
import cart from './cart.jpeg'
import { useSelector } from 'react-redux';

function Cart() {
    const myAlert = () => alert("Coming soon")

    {/*}
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
*/}
    const totalAmount = 0;
    return (
        <main className="main-cart">
            <nav className="nav-cart">
                <ul className="ul-nav-cart">
                    <li className="li1-nav-cart">
                        <Link to="/">
                            <img className="image" src={logo} />
                        </Link>
                    </li>
                    <li className="li2nav--cart">
                        Paradise Nursery<br />
                        Where Green Meets serenity
                    </li>
                    <li className="li3-nav-cart">Plants</li>
                    <li className="li4-nav-cart">
                        <Link to="/cart">
                            <div className="container">
                                <img className="cart" src={cart} />
                                <div className="counter">{totalAmount}</div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="div-cart">
                <ul className="ul-cart">
                    <li>
                        <p className="p-cart">Total Cart amount:${totalAmount}</p>
                    </li>

                    <li>
                        <button className="button">Clear Cart </button>
                    </li>

                    <li>
                        <Link to="/productListing">
                            <button className="button">Continue shopping</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <button className="button" onClick={myAlert}>Checkout</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </main>
    )
}
export default Cart