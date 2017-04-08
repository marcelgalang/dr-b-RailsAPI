import React, { Component } from 'react'
import { store } from '../redux/store'
import { getAllCarts } from '../redux/api/CartApi'
import CartPage from './CartPage'




export default class Checkout extends Component {

    render() {

        return (
            <div>
                <CartPage/>
            </div>
        )
    }
}
