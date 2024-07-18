import './LandingPage.css'
import { Link } from "react-router-dom"

function LandingPage() {
    return (
        <main className="main">
            <section className="section1">
                <h1 className="h1">
                    Welcome To Paradise Nursery
                </h1>
                <hr className="hr"></hr>
                <h4>
                    Where Green Meets Serenity
                </h4>
                <Link to="productListing">
                    <button className="button">
                        Get Started
                    </button>*
                </Link>
            </section>
            <section className="section2">
                <h2>
                    Welcome to Paradise Nursery, where green meets serenity!
                </h2>
                <p>
                    At paradise Nursery, we are passionate about bringing nature closer to you.
                    Our mission is to provide a wide range pf high-quality plants that not only
                    enhance the beauty of you surroundings but also contribute to a healthier
                    and more sustainable lifestyle. From air-purifying plants to aromatic ones,
                    we have something for every plant enthousiast.
                </p>
                <p>
                    Our team of experts is dedicated to ensuring that  each plant meets our strict standards
                    of quality and care. Whether you're a seasoned gardener or just starting your green journey,
                    we're here to support you every step of the way. Feel free to explore our collection, ask questions,
                    and let us help you find the perfect plant for your home or office.
                </p>
                <p>
                    Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature at your doorstep.
                </p>
            </section>
        </main>
    )
}
export default LandingPage