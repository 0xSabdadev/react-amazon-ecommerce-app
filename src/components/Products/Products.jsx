import React, {useState} from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import {ProductsData} from '../../data/products'

const Products = () => {
    const [MenuProducts, setMenuProducts] = useState(ProductsData)
    return (
        <div className={css.container}>
            <img src={Plane} alt='plane-img' />
            <h1>Our Featured Products</h1>
            <div className={css.products}>
                <ul className={css.menu}>
                    <li>All</li>
                    <li>Skin Care</li>
                    <li>Conditioners</li>
                    <li>Foundations</li>
                </ul>
            </div>
        </div>
    )
}

export default Products
