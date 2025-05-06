import React, { useEffect, useState } from 'react';

const TypingAnimation = () => {
  const text = "João Tomé.";
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 200;
  const deletingSpeed = 100;
  const pauseTime = 3000; 

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
    <h1 className="text-[28px] lg:text-2xl text-black text-shadow-2xs text- p-1">
      {text.slice(0, index)}
      <span className="animate-pulse text-gray-500">|</span>
    </h1>
  );
};

export default TypingAnimation;
