import { useState } from 'react'


function Calculator() {

    //declaring the states
    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [minweight, setMinWeight] = useState(0)
    const [maxweight, setMaxWeight] = useState(0)
    const [bmi, setBmi] = useState(0)
    const [feedback, setFeedback] = useState("")
    const [show, setShow] = useState(false)

    const calcBmi = (e) => {
        e.preventDefault() // prevent page reloading

        if (height > 0 && weight > 0) {
            //calculate BMI
            const bmi = ((weight / height ** 2) * 10000).toFixed(2)
            setBmi(bmi)

            //set the show for display result
            setShow(true)

            //calculate minWeight and maxweight
            const minweight = Math.round((18.5 * height ** 2) / 10000)
            setMinWeight(minweight)
            const maxweight = Math.round((24.9 * height ** 2) / 10000)
            setMaxWeight(maxweight)

            //set the feedback based on BMI
            if (bmi < 18.5) {
                setFeedback('Underweight')
            }
            else if (18.5 <= bmi && bmi < 24.9) {

                setFeedback('Healthy')
            }
            else if (25 <= bmi && bmi < 29.9) {

                setFeedback('Overweight')
            }
            else if (30 < bmi) {

                setFeedback('Obese')
            }

        } else {

            setShow(false)
        }
    }
    return (
        <div className='wrapper'>
            <div className='theme'>
                <h1 className='heading'>BMI Calculator</h1>
            </div>
            <div>
                <form >
                    <label htmlFor="height">Enter your height in cm:</label> <br />
                    <input type="number" name="height" id="height" onChange={(e) => setHeight(e.target.value)} required /><br />
                    <label htmlFor="weight">Enter your weight in kg:</label><br />
                    <input type="number" name="weight" id="weight" onChange={(e) => setWeight(e.target.value)} required /><br />
                    <button onClick={(e) => calcBmi(e)} className='btn theme' type='submit'>Submit</button><br />
                </form>
            </div>
            {!show ? null : <div>

                <p>Your BMI is {bmi}</p>
                <p>Your suggested weight range is between {minweight}-{maxweight}</p>
                <p>You are in {feedback} weight range</p>

            </div>}
        </div>
    )
}

export default Calculator;
