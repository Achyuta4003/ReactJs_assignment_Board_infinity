import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"


//import cart context
import { cartContext } from "../cartContext"

function Navbar() {

    //destructure context
    const { cart } = useContext(cartContext)

    // declare state for total item qty.
    const [totalItem, setTotalItem] = useState(0)

    //set the value of totalItem as the state cart change
    useEffect(() => {
        setTotalItem(Object.keys(cart.item).length); //convert the object keys to array then get the array length 
    }, [cart])

    return (
        <div className="theme navbar">
            <NavLink className='cart-icon' to="/">
                <i className="fa-solid fa-inverse fa-house"></i>
            </NavLink>

            <h1 className="nav-h1">Shoping Cart</h1>
            <div className="cart-icon">
                <NavLink to="/cart">
                    <i className="fa-solid fa-inverse fa-cart-shopping"></i>
                </NavLink>
                <span> {totalItem}</span>
            </div>


        </div>
    )
}

export default Navbar


