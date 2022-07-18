import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../cartContext'
import productData from '../product.json' //import product data from json file

function CartPage() {
    //destructuring context
    const { cart, setCart } = useContext(cartContext)

    //declare variable for total item qty
    const totalItem = (Object.keys(cart.item).length)

    //declare state for product list
    const [productList, setProductlist] = useState([])

    //update the list when item added or removed from cart
    useEffect(() => {
        const itemIds = Object.keys(cart.item);
        const productList = []
        itemIds.map((itemId) => {
            productList.push((productData.filter((item) => item.id == itemId))[0])
        })
        setProductlist(productList)

    }, [cart])

    //function for remove button
    const handleDelete = (productId) => {
        const _cart = { ...cart }
        delete _cart.item[productId];
        setCart(_cart);
    }



    return (
        !totalItem ?
            <img className='empty-cart' src="/empty-cart.png" alt="empty-cart" /> :
            <div className='cart'>
                <h1 className='cart-h1'>You have ordered:</h1>

                <div className='item-container'>
                    <div className='item-wrapper'>
                        {
                            productList.map((item, index) =>
                                <div className="item" key={index}>
                                    <div className=' image-wrapper-item'>
                                        <img className='item-img' src={item.image} alt="t-shirt" />
                                    </div>
                                    <div className='item-text-wrapper'>
                                        <h4>{item.name}</h4>
                                        <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet..</p>
                                        <p><b>Price: Rs.{item.discountPrice}</b></p>
                                    </div>
                                    <div className='btn-wpapper'>
                                        <button onClick={() => handleDelete(item.id)} className=' dlt-btn '>REMOVE</button>
                                    </div>
                                </div>


                            )
                        }

                    </div>

                </div>

            </div>
    )
}

export default CartPage;
