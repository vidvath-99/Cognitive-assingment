import React, { useState, useEffect } from 'react'
import "../styles/pages/details.css"
import { BsFillCloudLightningRainFill } from "react-icons/bs"
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "../styles/pages/details.css"
export const Details = () => {
    const [countryData, setcountryData] = useState([]);
    const [weatherData, setWeatherData] = useState({});
    const loc = useLocation();
    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/name/${loc.state.country}`).then((res) => {
            setcountryData(res.data);
        })
        axios.get(`http://api.weatherstack.com/current?access_key=7fb47189b981433a52c55cbea18665e1&query=${loc.state.country}`).then(res => {
            setWeatherData(res.data);
        })
    }, []);


    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="frame">
                <div className='frame__flag'>
                    <img src={countryData[0]?.["flags"]["svg"]} />
                </div>
                <div className={`front ${open ? "front--active" : ""}`}>
                    <div className='front__population'>
                        <p>{`population: ${countryData[0]?.['population']}`}</p>
                    </div>
                    <div className='front__lat__long'>
                        <p>{`lat : ${countryData[0]?.["latlng"][0]}`}</p>
                        <p>{`lng : ${countryData[0]?.["latlng"][1]}`}</p>
                    </div>
                    <div className='front__moreBtn'>
                        <button onClick={() => {
                            setOpen(!open)
                        }} className='front__btn'>More data</button>
                    </div>
                    <div className='front__weather '>
                        <div className='front__temp'>{
                            weatherData['current']?.['temperature']
                        } C </div>
                        <div className='front__weatherIcon' style={{
                            fontSize: "1rem"
                        }}>
                            <img src={weatherData['current']?.['weather_icons'][0]} alt="weather icon" />
                        </div>
                        <div className='front__windSpeed'>
                            {weatherData['current']?.['wind_speed']}km/hr
                        </div>
                        <div className='front__timeZone'>
                            {weatherData['location']?.['timezone_id']}
                        </div>
                    </div>
                    {/* <div>
                        <div className="temperature">
                            12°
                        </div>
                        <div className="icons">
                            <i className="fas fa-wind" /><br /><i className="fas fa-tint" />
                        </div>
                        <div>
                            <div className="info">
                                E 7 km/h <br /> 87%
                            </div>
                            <table className="preview">
                                <tbody>
                                    <tr>
                                        <td>Tue</td>
                                        <td>21° | 9°</td>
                                    </tr>
                                    <tr>
                                        <td>Wed</td>
                                        <td>23° | 10°</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div> */}
                </div>
                {/* <div className="drop-big-1" />
                <div className="drop-big-2" />
                <div className="drop-big-3" />
                <div className="drop-big-4" />
                <div className="drop-big-5" />
                <div className="drop-big-6" />
                <div className="drop-big-7" />
                <div className="drop-big-8" />
                <div className="drop-big-9" />
                <div className="drop-big-10" />
                <div className="drop-medium-1" />
                <div className="drop-medium-2" />
                <div className="drop-medium-3" />
                <div className="drop-medium-4" />
                <div className="drop-medium-5" />
                <div className="drop-medium-6" />
                <div className="drop-medium-7" />
                <div className="drop-medium-8" />
                <div className="drop-medium-9" />
                <div className="drop-medium-10" />
                <div className="drop-small-1" />
                <div className="drop-small-2" />
                <div className="drop-small-3" />
                <div className="drop-small-4" />
                <div className="drop-small-5" />
                <div className="drop-small-6" />
                <div className="drop-small-7" />
                <div className="drop-small-8" />
                <div className="drop-small-9" />
                <div className="drop-small-10" /> */}
            </div>
        </div>
    )
}
