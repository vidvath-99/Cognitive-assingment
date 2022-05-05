import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/pages/Home.css";
export const Home = () => {
    const [input, setInput] = useState('')
    let nav = useNavigate();

    const onChange = (e) => {
        setInput(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (input !== '') {
            nav('/search', {
                state: {
                    country: input
                }
            })

        }
    }
    return (
        <div className='home'>
            <div id="tsparticles" />
            <form onSubmit={onSubmit} className='home__form'>
                <h3>Search</h3>
                <label htmlFor="username">Country</label>
                <input required onChange={onChange} className='home__form__input' type="text" placeholder="Enter a country or city" id="username" />
                <button className='home__form__btn'>Search</button>

            </form>
        </div>
    )
}
