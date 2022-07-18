
function Card(props) {

    //store props data in variable
    const data = props.data

    //function for preview image
    const handleclick = (imageId) => {
        props.show(true)
        props.imageId(imageId)
    }

    return (
        <div onClick={() => handleclick(data.id)} className="card">
            <div className="img-wrapper">
                <img src={data.largeImageURL} alt="img" />
            </div>
            <div className='title'>
                <h2 >Image by : {data.user}</h2>
            </div>
        </div>
    )
}

export default Card
