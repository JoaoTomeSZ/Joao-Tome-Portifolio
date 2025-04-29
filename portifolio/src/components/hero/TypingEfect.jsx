import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
  const text = "João Tomé";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150;
  const deletingSpeed = 150;
  const pauseTime = 3500; // pausa antes de apagar

  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else if (!isDeleting && index === text.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <h1 className="lg:text-9xl font-bold text-[#6EE7B7] text-shadow-2xs text-4xl">
      {text.slice(0, index)}
      <span className="animate-pulse text-white">|</span>
    </h1>
  );
};

export default TypingAnimation;
