import { Link } from "react-router-dom"
import './ProductListing.css'

function ProductListing() {
    return (
        <main className="main-product">
            <nav className="nav">
                <Link to="/">HomePage</Link>
            </nav>
            <div className="div">
                Main section
            </div>
        </main>
    )
}
export default ProductListing