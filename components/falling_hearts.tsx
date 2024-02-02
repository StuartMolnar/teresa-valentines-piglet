import React, { useEffect } from 'react';

const FallingHearts = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.classList.add('z-50');

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";

      heart.innerText = '💗';

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const intervalId = setInterval(createHeart, 300);

    
    return () => clearInterval(intervalId);
  }, []);

  return null;
};

export default FallingHearts;
