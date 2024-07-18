import { Link } from "react-router-dom"

function ProductListing() {
    return (
        <main className="main">
            <header>
                Header
            </header>
            <nav>
                <Link to="/">HomePage</Link>
            </nav>
            <main>
                Main section
            </main>
        </main>
    )
}
export default ProductListing