import './Card.css'
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { addItemToCart } from './CartSlice';

function Card(props) {
    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products  

    const handleAddToCart = product => {
        dispatch(addItemToCart(product));
        setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
    };

    const product = {
        id: props.id,
        name: props.name,
        description: props.description,
        price: props.price
    }
    return (
        <div className="div-card">
            <p>{props.name}</p>
            <img src={props.image} />
            <p>{props.description}</p>
            <p>{props.price}</p>
            <button
                onClick={() => handleAddToCart({ product })}
            >Add To Cart</button>
        </div>
    )
}

export default Card