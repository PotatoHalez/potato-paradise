import React, { useState, useEffect } from 'react';
import './PotatoGame.css'

const PotatoGame = () => {
    const [potatoes, setPotatoes] = useState(createInitialPotato)
    const [basket, setBasket] =  useState({ position: 50 })
    const [score, setScore] = useState(0);

    useEffect(() => {
        const gameInterval = setInterval(() => {
            // logic here 
        }, 200);
        
        return () => clearInterval(gameInterval);
    }, [potatoes, score]); 

    const moveBasket = (direction) => {
        // logic 
    }

    // implement useEffect

    // event listener 

    // return 
    
}

export default PotatoGame;
