import ProductCard from '../components/ProductCard'; 
import productData from '../product.json' // import productData from json file


function HomePage() {
    return (
        <div className='home'>
            <h1 className='main-h1'>Our items</h1>
            <div className='card-container'>
                <div className="card-wrapper">

                    {
                        productData.map((item, index) => <ProductCard data={item} key={index} />) //listing the the cards
                    }

                </div>
            </div>


        </div>
    )
}

export default HomePage;