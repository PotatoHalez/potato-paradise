import React, { useState, useEffect } from 'react';
import '../css/PotatoGame.css';

const PotatoGame = () => {
  const [potatoes, setPotatoes] = useState([]);
  const [basket, setBasket] = useState({ position: 50 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const gameInterval = setInterval(() => {
      setPotatoes((prevPotatoes) =>
        prevPotatoes
          .map((potato) => ({
            ...potato,
            y: potato.y + 5,
          }))
          .filter((potato) => potato.y < 100)
      );

      if (Math.random() < 0.1) {
        setPotatoes((prevPotatoes) => [
          ...prevPotatoes,
          { id: Date.now(), x: Math.random() * 100, y: 0 },
        ]);
      }

      const caughtPotatoes = potatoes.filter(
        (potato) =>
          potato.y >= 90 &&
          potato.x > basket.position - 10 &&
          potato.x < basket.position + 10
      );
      if (caughtPotatoes.length > 0) {
        setScore((score) => score + caughtPotatoes.length);
        setPotatoes((potatoes) =>
          potatoes.filter((potato) => !caughtPotatoes.includes(potato))
        );
      }
    }, 100);

    return () => clearInterval(gameInterval);
  }, [potatoes, basket]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowLeft" && basket.position > 0) {
        setBasket({ position: basket.position - 5 });
      } else if (event.key === "ArrowRight" && basket.position < 100) {
        setBasket({ position: basket.position + 5 });
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [basket]);

  return (
    <div className='game-container'>
      {potatoes.map((potato) => (
        <div
          key={potato.id}
          className='potato'
          style={{ left: `${potato.x}%`, top: `${potato.y}%` }}
        />
      ))}
      <div className='basket' style={{ left: `${basket.position}%` }} />
      <div className='score'>Score: {score}</div>
    </div>
  );
};

export default PotatoGame;
