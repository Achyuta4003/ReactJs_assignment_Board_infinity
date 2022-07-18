import { useContext } from 'react'
import { cartContext } from "../cartContext" // import context



function ProductCard(props) {

    //store the props in variable
    const item = props.data
    //destructure context
    const { cart, setCart } = useContext(cartContext)

    //addTOCart function
    const addToCart = (productId) => {

        //clone the cart
        let _cart = { ...cart }

        //if cart.item is not available set as empty object
        if (!_cart.item) {
            _cart.item = {}
        }

        // set the productId as key and value as one
        _cart.item[productId] = 1

        //set the value in cart object
        setCart(_cart)
    }
    return (
        <div>

            <div className='card'>
                <div className='image-wrapper'>
                    <img className='card-img' src={item.image} alt="t-shirt" />
                </div>
                <div className='text-wrapper'>
                    <h4>{item.name}</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, perferendis!</p>
                    <p>
                        <b>Price: Rs.{item.discountPrice} </b>
                        <s>Rs. {item.price}</s>
                    </p>
                </div>
                <div className='btn-wpapper'>
                    <button onClick={() => { addToCart(item.id) }} className=' theme  btn'>ADD TO CART</button>
                </div>
            </div>

        </div>

    )
}

export default ProductCard;
