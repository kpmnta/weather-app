import React, {useState} from "react";
import Form from "../Form/Form";
import './Weather.css';

function Weather() {
    const APIKEY = '9a1bddee0eb996a8fde565585fe05470';
    const [feelsLike,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [icon,setIconID] = useState('');

    const fetchData = (city, country) => {
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${APIKEY}&units=metric`
        )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setFeelsLike(data.list[0].main.feels_like);
            setMainTemp(data.list[0].main.temp);
            setDescription(data.list[0].weather[0].description);
            setMain(data.list[0].weather[0].main);
            setIconID(data.list[0].weather[0].icon);
        })
    }

    return (
        <>
            <Form getWeather={fetchData}/>
            <div id="container">
                <div className="data-container">
                    <div className="data">
                        <h3>Temperature: { mainTemp } °c</h3>
                        <h3>Feels like: { feelsLike } °c</h3>
                        <h3>Description: { description }</h3>
                        <h3>Weather Conditions: { main }</h3>
                    </div>
                    <div>
                        <img src={ `http://openweathermap.org/img/wn/${icon}@2x.png` } alt="icon weather"/>
                    </div> 
                </div>
                <p>well, maybe we should stay at home today ¯\_(ツ)_/¯</p>
            </div>

        </>
    )
}
export default Weather;
