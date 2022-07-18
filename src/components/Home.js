import React, { useEffect, useState } from 'react'
import Card from './Card'
import Modal from './Modal'

function Home() {

    //declare the state for toggle model display
    const [show, setShow] = useState(false)

    //dclase state to store api data
    const [data, setData] = useState([])

    //declare state for image id
    const [imageId, setImageId] = useState('')

    //fetch function to get data from api
    useEffect(() => {
        fetch('https://pixabay.com/api/?key=28647695-635c1c0a47f8a8556aca6db61')
            .then(response => response.json())
            .then((items) => {
                setData(items.hits)
            })
    }, [])

    return (
        <div>
            <h1>Photographer's Showcase</h1>

            <div className="card-container">
                <div className="card-wrapper">


                    {
                        data.map((item, index) => <Card key={index} data={item} show={setShow} imageId={setImageId} />)
                    }
                    {show && <Modal show={setShow} imageId={imageId} data={data} />}
                </div>
            </div>
        </div>
    )
}

export default Home
