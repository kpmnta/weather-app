import React from 'react';
import './Form.css';

const Form = (props) => {
    const { getWeather } = props 

    const [form, setForm] = React.useState({
        city: '',
        country: ''
    })

    const handleCity = (event) => {
        setForm(state => ({
            ...state,
            city: event.target.value
        }))
    }

    const handleCountry = (event) => {
        setForm(state => ({
            ...state,
            country: event.target.value
        }))
    }

    function showData() {
        document.getElementById('container').style.display = "block";
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (form.city !== '' && form.country !== '') {
            getWeather(form.city, form.country)
        }
        showData();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="city"
            name="city"
            onChange={handleCity}
            value={form.city}
            />
            <input 
            type="text"
            placeholder="country"
            name="country"
            onChange={handleCountry}
            value={form.country}
            />
            <button id="submit" onClick={handleSubmit}>Let's Find Out!</button>
        </form>
    )
}

export default Form;