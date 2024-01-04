import React from 'react'
import '../css/PotatoHouse.css'

const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Just kidding! No login needed (yet) to enjoy Potato Paradise!');
    }
    
    return ( 
        <div className='potatoHouse'>
    <h1> Welcome home, potato lover! </h1>
    <div className='loginContainer'>
            <img src='images/potatohouse.jpeg' alt='Potato Paradise' />
            <div className='loginSection'>
                <h2> Log into Potato Paradise here!</h2>
            <form onSubmit={handleSubmit} className='loginForm'>
                <input type='text' placeholder= 'Potatoname' />
                <input type='text' placeholder='Potatoword' />
                <button type='submit'>Potato time</button>
                </form>
            </div>
            </div>
    </div>
    )
}

export default Home